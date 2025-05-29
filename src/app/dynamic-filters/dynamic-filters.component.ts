import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  Type,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  signal,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  FilterDefinition,
  OperatorDefinition,
  operatorsMap,
  SupportedDataType,
} from './utils/common-utilities';
import { NgFor, NgIf } from '@angular/common';
import { AddNewFilterComponent } from './add-new-filter/add-new-filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ValueComponentMap } from './value-components/value-component-map';
import { QueryBuilderService } from './services/query-builder.service';
import { HighlightJqlPipe } from './pipes/HighlightJqlPipe ';
import { OperatorsPipe } from './pipes/operator.pipe';

@Component({
  selector: 'lib-dynamic-filters',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgSelectModule, HighlightJqlPipe, OperatorsPipe],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss',
  providers: [QueryBuilderService],
})
export class DynamicFiltersComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('valueInputContainer', { read: ViewContainerRef })
  valueInputContainer!: ViewContainerRef;
  valueComponentRef!: ComponentRef<any>;

  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;
  @ViewChild('addDropdownWrapper', { static: false })
  addDropdownWrapper!: ElementRef;
  @ViewChild('addDropdownDynamicContainer', { read: ViewContainerRef })
  addDropdownDynamicContainer!: ViewContainerRef;
  addFilterDropdownComponentRef!: ComponentRef<any>;
  fieldInfoMap = new Map<string, string>();

  openDropdownIndex = signal<number>(-1);
  isAddDropdownOpen = signal(false);
  jqlQuery = signal('');

  filtersForm!: FormGroup;

  @Input() filterList: FilterDefinition[] = [];

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private queryBuilderService: QueryBuilderService
  ) {}

  ngOnInit(): void {
    this.initializeFiltersForm();
    this.filtersForm
      .get('filters')
      ?.valueChanges.pipe()
      .subscribe(() => {
        Promise.resolve().then(() => {
          this.buildJQLQuery();
          if (this.isAddDropdownOpen()) {
            this.isAddDropdownOpen.set(false);
            this.addDropdownDynamicContainer.clear();
          }
        });
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterList'] && changes['filterList'].currentValue) {
      this.updateValueComponentOptions();
    }
  }

  syncFilterOptions(): void {
    this.filters.controls.forEach((ctrl) => {
      const field = ctrl.get('field')?.value;
      const newFieldDef = this.filterList.find((f) => f.field === field);
      if (newFieldDef) {
        const value = ctrl.get('value')?.value;
        const isMulti = newFieldDef.type.isMultiple;
        if (isMulti && !Array.isArray(value)) {
          ctrl.get('value')?.setValue([]);
        }
        if (!isMulti && value === null) {
          ctrl.get('value')?.setValue(null);
        }
      }
    });
  }

  buildJQLQuery() {
    const filters: any[] = this.filtersForm.get('filters')?.value || [];
    if (filters.length) {
      this.jqlQuery.set(this.queryBuilderService.buildJqlQuery(filters));
    } else {
      this.jqlQuery.set('');
    }
  }

  initializeFiltersForm() {
    this.filtersForm = this.fb.group({
      filters: this.fb.array([]),
    });

    this.filterList.forEach((field) => {
      const isMultipleType = field.type.isMultiple;
      const filterGroup = this.fb.group({
        operator: [null],
        field: [field.field],
        value: [isMultipleType ? [] : null],
        isVisibleInRow: [field.isVisibleInRow],
        label: [field.label],
      });
      this.filters.push(filterGroup);

      // Map field information for display
      this.mapFieldInformation(field);
    });
  }

  mapFieldInformation(field: FilterDefinition) {
    this.fieldInfoMap.set(field.field, field.fieldInformation || '');
  }

  toggleDropdown(index: number) {
    if (this.isAddDropdownOpen()) {
      this.isAddDropdownOpen.set(false);
      this.addDropdownDynamicContainer.clear();
    }

    const currentIndex = this.openDropdownIndex();
    this.openDropdownIndex.set(currentIndex === index ? -1 : index);

    if (this.openDropdownIndex() === -1) return;

    const operatorValue = this.filters
      .at(this.openDropdownIndex())
      .get('operator')?.value;

    if (operatorValue) {
      setTimeout(() => {
        this.loadValueComponentDefault(this.openDropdownIndex());
      });
    }
  }

  loadValueComponentDefault(index: number) {
    this.loadValueComponent(index);
  }

  toggleAddDropdown() {
    this.isAddDropdownOpen.set(!this.isAddDropdownOpen());
    this.openDropdownIndex.set(-1);
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
      this.openDropdownIndex.set(-1);
      this.isAddDropdownOpen.set(false);
    }
  }

  get filters(): FormArray {
    return this.filtersForm.get('filters') as FormArray;
  }

  // removeFilter(i: number) {
  //   const filterGroup = this.filters.at(i);
  //   if (filterGroup) {
  //     const fieldName = filterGroup.get('field')?.value;
  //     const isMultipleType =
  //       this.filterList.find((f) => f.field === fieldName)?.type.isMultiple

  //     filterGroup.patchValue({
  //       operator: null,
  //       value: isMultipleType ? [] : null,
  //       isVisibleInRow: false,
  //     });
  //   }
  //   if (this.openDropdownIndex() === i) {
  //     this.openDropdownIndex.set(-1);
  //   }
  // }


  destroyAddFilterDropdown() {
    if (this.addFilterDropdownComponentRef) {
      this.addFilterDropdownComponentRef.destroy();
      this.addFilterDropdownComponentRef = null as any;
    }
    this.isAddDropdownOpen.set(false);
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
    const { fieldName, fieldType, componentType } =
      this.getComponentInfo(index);
    if (!componentType || !this.valueInputContainer) return;

    this.valueInputContainer.clear();
    this.valueComponentRef =
      this.valueInputContainer.createComponent(componentType);
    this.setCommonComponentInputs(index, fieldName, fieldType);
    this.cdr.markForCheck();
  }

  updateValueComponentOptions() {
    if (!this.valueComponentRef || this.openDropdownIndex() < 0) return;

    const { fieldName, fieldType } = this.getComponentInfo(
      this.openDropdownIndex()
    );
    if (fieldType === 'select') {
      const options = this.getOptionsForField(fieldName);
      this.valueComponentRef.instance.updateOptions([...options]);
      this.valueComponentRef.changeDetectorRef.markForCheck();
    }
  }

  private getComponentInfo(index: number) {
    const fieldName = this.filters.at(index).get('field')?.value;
    const fieldType = this.getFieldType(fieldName) as SupportedDataType;
    const componentType = ValueComponentMap[fieldType];
    return { fieldName, fieldType, componentType };
  }

  private setCommonComponentInputs(
    index: number,
    fieldName: string,
    fieldType: SupportedDataType
  ) {
    const instance = this.valueComponentRef.instance;
    instance.formGroup = this.filters.at(index);

    if (fieldType === 'select') {
      instance.options = [...this.getOptionsForField(fieldName)];
      instance.allowSearch = this.filterList[index]?.type?.allowSearch;
      instance.onSearch = this.filterList[index]?.type?.onSearch;
      instance.field = this.filterList[index]?.field;
      instance.isMultiple = this.filterList[index].type?.isMultiple;
    }
  }

  getOptionsForField(fieldName: string): { label: string; value: any }[] {
    const field = this.filterList.find((f) => f.field === fieldName);
    return field?.type?.options ?? [];
  }

  ngOnDestroy() {
    this.destroyAddFilterDropdown();
  }
}
