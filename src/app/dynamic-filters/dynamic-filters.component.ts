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
import { debounceTime } from 'rxjs';

@Component({
  selector: 'lib-dynamic-filters',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgSelectModule, HighlightJqlPipe],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss',
  providers: [QueryBuilderService],
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

  jqlQuery: string = '';

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

          if (this.isAddDropdownOpen) {
            this.isAddDropdownOpen = false;
            this.addDropdownDynamicContainer.clear();
          }
        });
      });
  }
  buildJQLQuery() {
    const filters: any[] = this.filtersForm.get('filters')?.value || [];
    if (filters.length) {
      this.jqlQuery = this.queryBuilderService.buildJqlQuery(filters);
    } else {
      this.jqlQuery = ''; 
    }
  }

  initializeFiltersForm() {
    this.filtersForm = this.fb.group({
      filters: this.fb.array([]),
    });

    this.filterList.forEach((field) => {
      const isMultipleType = field.type.dataType === 'multiSelect';
      const filterGroup = this.fb.group({
        operator: [null],
        field: [field.field],
        value: [isMultipleType ? [] : null],
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

    if (this.openDropdownIndex === -1) return;

    const operatorValue = this.filters
      .at(this.openDropdownIndex)
      .get('operator')?.value;

    if (operatorValue) {
      setTimeout(() => {
        this.loadValueComponentDefault(this.openDropdownIndex);
      });
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
      const isMultipleType =
        this.filterList.find((f) => f.field === fieldName)?.type.dataType ===
        'multiSelect';

      filterGroup.patchValue({
        operator: null,
        value: isMultipleType ? [] : null,
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
      if (fieldType === 'select' || fieldType === 'multiSelect') {
        const options = this.getOptionsForField(fieldName);
        compRef.instance.options = options;
      }
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
