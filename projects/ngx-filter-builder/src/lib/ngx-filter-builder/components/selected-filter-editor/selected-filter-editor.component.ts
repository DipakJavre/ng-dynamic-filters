import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-selected-filter-editor',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './selected-filter-editor.component.html',
  styleUrl: './selected-filter-editor.component.scss',
})
export class SelectedFilterEditorComponent implements OnInit {

   @Input() formGroup!: FormGroup;
  @Input() operators: { value: string }[] = [];

  formattedValue = '';

  ngOnInit(): void {
    this.computeFormattedValue();

    this.formGroup.get('value')?.valueChanges.subscribe(() => {
      this.computeFormattedValue();
    });
  }

  private computeFormattedValue(): void {
    const value = this.formGroup.get('value')?.value;

    if (value === null || value === undefined) {
      this.formattedValue = '';
    } else if (Array.isArray(value)) {
      this.formattedValue = value
        .map((v: any) => typeof v === 'object' ? v.label || v.value || JSON.stringify(v) : v)
        .join(', ');
    } else if (typeof value === 'boolean') {
      this.formattedValue = value ? 'True' : 'False';
    } else if (typeof value === 'object') {
      this.formattedValue = Object.entries(value)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
    } else {
      this.formattedValue = value.toString();
    }
  }
}
