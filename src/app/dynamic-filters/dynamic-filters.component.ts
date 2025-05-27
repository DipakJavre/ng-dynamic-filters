import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { FilterDefinition } from './utils/common-utilities';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { OperatorDefinition, operatorsMap } from '../common/common-utilities';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'lib-dynamic-filters',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss',
})
export class DynamicFiltersComponent implements OnInit {
  @ViewChildren('dropdownMenu') dropdownMenus!: QueryList<ElementRef>;
  openDropdownIndex: number = -1;

  filtersForm!: FormGroup;
  @Input() filterList: FilterDefinition[] = [];

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      filters: this.fb.array([]),
    });
    this.initializeFiltersForm();
    console.log('filterList', this.filterList);
  }

  initializeFiltersForm() {
    this.filterList.forEach((field) => {
      const isArrayType = field.type.dataType === 'array';
      const filterGroup = this.fb.group({
        operator: [''],
        field: [field.field],
        value: [isArrayType ? [] : ''],
        isVisibleInRow: [field.isVisibleInRow],
        label: [field.label],
      });

      this.filters.push(filterGroup);
    });
  }

  toggleDropdown(index: number) {
    if (this.openDropdownIndex === index) {
      this.openDropdownIndex = -1; // close if already open
    } else {
      this.openDropdownIndex = index; // open clicked one
    }
  }

  // Listen for clicks outside dropdown to close it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // check if click is inside this component
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.openDropdownIndex = -1; // close all dropdowns
    }
  }

  get filters(): FormArray {
    return this.filtersForm.get('filters') as FormArray;
  }

  addFilter() {
    const formGroup = this.fb.group({
      operator: [''],
      field: [''],
      value: [''],
      isVisible: [true],
    });
    this.filters.push(formGroup);
  }

  removeFilter(i: number) {
    this.filters.removeAt(i);
  }

  getOperators(field: string): OperatorDefinition[] {
    const dataType = this.filterList.find((f) => f.field === field)?.type
      ?.dataType;
    return dataType ? operatorsMap[dataType] ?? [] : [];
  }

  filterChanged(i: number) {
    console.log(`Filter changed at index ${i}`, this.filters.at(i).value);
  }

  getFieldType(fieldName: string): string {
    const match = this.filterList.find((f) => f.field === fieldName);
    return match?.type?.dataType ?? 'string';
  }

  getOptionsForField(fieldName: string): { label: string; value: string }[] {
    const match = this.filterList.find((f) => f.field === fieldName);
    return match?.type?.options ?? [];
  }
}
