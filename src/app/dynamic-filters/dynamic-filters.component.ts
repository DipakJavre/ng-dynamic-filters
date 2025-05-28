import {
  Component,
  ComponentRef,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
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
import { OperatorDefinition, operatorsMap } from '../common/common-utilities';
import { NgFor, NgIf } from '@angular/common';
import { AddNewFilterComponent } from './add-new-filter/add-new-filter.component';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'lib-dynamic-filters',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor,NgSelectModule],
  templateUrl: './dynamic-filters.component.html',
  styleUrl: './dynamic-filters.component.scss',
})
export class DynamicFiltersComponent implements OnInit, OnDestroy {
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

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {}

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
      const isArrayType = field.type.dataType === 'array';
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
        'array';

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

  ngOnDestroy() {
    this.destroyAddFilterDropdown();
  }
}
