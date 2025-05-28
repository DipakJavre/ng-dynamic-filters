import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Type,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FilterDefinition } from './utils/common-utilities';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  OperatorDefinition,
  operatorsMap,
  SupportedDataType,
} from '../common/common-utilities';
import { NgFor, NgIf } from '@angular/common';
import { AddNewFilterComponent } from './add-new-filter/add-new-filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ValueComponentMap } from './value-components/value-component-map';
import { TextValueComponent } from './value-components/text-value.component';
import { NumberValueComponent } from './value-components/number-value.component';
import { SelectValueComponent } from './value-components/select-value.component';
import { BooleanValueComponent } from './value-components/boolean-value.component';
import { DateValueComponent } from './value-components/date-value.component';

@Component({
  selector: 'lib-dynamic-filters',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgSelectModule],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss',
})
export class DynamicFiltersComponent implements OnInit, OnDestroy {
  @ViewChild('valueInputContainer', { read: ViewContainerRef })
  valueInputContainer!: ViewContainerRef;

  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;
  @ViewChild('addDropdownWrapper', { static: false })
  addDropdownWrapper!: ElementRef;
  @ViewChild('addDropdownDynamicContainer', { read: ViewContainerRef })
  addDropdownDynamicContainer!: ViewContainerRef;
  addFilterDropdownComponentRef!: ComponentRef<any>;

  openDropdownIndex: number = -1;
  isAddDropdownOpen = false;

  filtersForm!: FormGroup;
  @Input() filterList: FilterDefinition[] = [];

  componentMap: { [key: string]: Type<any> } = {
    string: TextValueComponent,
    number: NumberValueComponent,
    select: SelectValueComponent,
    boolean: BooleanValueComponent,
    date: DateValueComponent,
  };

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      filters: this.fb.array([]),
    });
    this.initializeFiltersForm();

    this.filters.valueChanges.subscribe(() => {
      if (this.isAddDropdownOpen) {
        this.isAddDropdownOpen = false;
        this.addDropdownDynamicContainer.clear();
      }
    });
  }

  initializeFiltersForm() {
    this.filterList.forEach((field) => {
      const isArrayType = field.type.dataType === 'select';
      const filterGroup = this.fb.group({
        operator: [null],
        field: [field.field],
        value: [isArrayType ? [] : null],
        isVisibleInRow: [field.isVisibleInRow],
        label: [field.label],
      });
      this.filters.push(filterGroup);
    });
  }

  toggleDropdown(index: number) {
    if (this.isAddDropdownOpen) {
      this.isAddDropdownOpen = false;
      this.addDropdownDynamicContainer.clear();
    }
    this.openDropdownIndex = this.openDropdownIndex === index ? -1 : index;

    if (this.openDropdownIndex !== -1) {
      const operatorValue = this.filters
        .at(this.openDropdownIndex)
        .get('operator')?.value;

      if (operatorValue) {
        setTimeout(() => {
          this.loadValueComponentDefault(this.openDropdownIndex);
        });
      }
    }
  }

  loadValueComponentDefault(index: number) {
    this.loadValueComponent(index);
  }

  toggleAddDropdown() {
    this.isAddDropdownOpen = !this.isAddDropdownOpen;
    this.openDropdownIndex = -1;
    setTimeout(() => {
      this.loadFieldVisibilityComponent();
    });
  }

  loadFieldVisibilityComponent() {
    this.addDropdownDynamicContainer.clear();

    const compRef = this.addDropdownDynamicContainer.createComponent(
      AddNewFilterComponent
    );
    compRef.instance.filters = this.filters;

    this.addFilterDropdownComponentRef = compRef;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.openDropdownIndex = -1;
      this.isAddDropdownOpen = false;
    }
  }

  get filters(): FormArray {
    return this.filtersForm.get('filters') as FormArray;
  }

  removeFilter(i: number) {
    const filterGroup = this.filters.at(i);
    if (filterGroup) {
      const fieldName = filterGroup.get('field')?.value;
      const isArrayType =
        this.filterList.find((f) => f.field === fieldName)?.type.dataType ===
        'select';

      filterGroup.patchValue({
        operator: null,
        value: isArrayType ? [] : null,
        isVisibleInRow: false,
      });
    }
    if (this.openDropdownIndex === i) {
      this.openDropdownIndex = -1;
    }
  }

  getOperators(field: string): OperatorDefinition[] {
    const dataType = this.filterList.find((f) => f.field === field)?.type
      ?.dataType;
    return dataType ? operatorsMap[dataType] ?? [] : [];
  }

  destroyAddFilterDropdown() {
    if (this.addFilterDropdownComponentRef) {
      this.addFilterDropdownComponentRef.destroy();
      this.addFilterDropdownComponentRef = null as any;
    }
    this.isAddDropdownOpen = false;
  }

  private getFieldType(fieldName: string): string {
    const match = this.filterList.find((f) => f.field === fieldName);
    return match?.type?.dataType ?? 'string';
  }

  onOperatorChange(index: number) {
    this.cdr.detectChanges();
    setTimeout(() => this.loadValueComponent(index));
  }

  loadValueComponent(index: number) {
    const fieldName = this.filters.at(index).get('field')?.value;
    const fieldType = this.getFieldType(fieldName) as SupportedDataType;
    const componentType = ValueComponentMap[fieldType];

    if (!componentType) return;

    if (this.valueInputContainer) {
      this.valueInputContainer.clear();
      const compRef = this.valueInputContainer.createComponent(componentType);
      compRef.instance.formGroup = this.filters.at(index);
    }
  }

  ngOnDestroy() {
    this.destroyAddFilterDropdown();
  }
}
