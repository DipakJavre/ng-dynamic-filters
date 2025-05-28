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
}
