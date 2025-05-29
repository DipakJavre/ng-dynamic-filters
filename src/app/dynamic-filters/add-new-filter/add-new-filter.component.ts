import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-filter',
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './add-new-filter.component.html',
  styleUrl: './add-new-filter.component.scss',
})
export class AddNewFilterComponent {

  @Input() filters!: FormArray;

  get formGroups(): FormGroup[] {
    return this.filters.controls as FormGroup[];
  }

  onChangeFilterType(index: number): void {
     const filterGroup = this.filters.at(index) as FormGroup;
    if (filterGroup) {
      console.log(filterGroup.value);
        filterGroup.patchValue({
        operator: null,
        value: null,
      });
      // const fieldName = filterGroup.get('field')?.value;
      // filterGroup.patchValue({
      //   operator: null,
      //   value: isMultipleType ? [] : null,
      //   isVisibleInRow: false,
      // });
    }
  }
}
