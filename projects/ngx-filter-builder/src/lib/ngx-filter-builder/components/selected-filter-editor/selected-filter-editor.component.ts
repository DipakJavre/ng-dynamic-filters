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
    console.log('formgroup.value', this.formGroup.value);

    this.formGroup.get('value')?.valueChanges.subscribe(() => {
      this.computeFormattedValue();
    });
  }

  private computeFormattedValue(): void {
    const value = this.formGroup.get('value')?.value;

    if (value === null || value === undefined || value === '') {
      this.formattedValue = '';
      return;
    }

    // Array (multi-select)
    if (Array.isArray(value)) {
      const isArrayOfObjects = value.every(
        (item) => typeof item === 'object' && item !== null
      );

      if (isArrayOfObjects) {
        this.formattedValue =
          value.length > 0 ? `${value.length} Selected` : '';
      } else {
        const maxPreview = 2;
        const preview = value.slice(0, maxPreview).join(', ');
        const moreCount = value.length - maxPreview;
        this.formattedValue =
          moreCount > 0 ? `${preview} +${moreCount} more` : preview;
      }

      return;
    }

    // Boolean
    if (typeof value === 'boolean') {
      this.formattedValue = this.capitalize(value.toString());
      return;
    }

    // Object (like range {min: 10, max: 20})
    if (typeof value === 'object') {
      const rangeLabels: Record<string, string> = {
        min: 'Min',
        max: 'Max',
        from: 'From',
        to: 'To',
      };

      const keys = Object.keys(rangeLabels).filter((key) => key in value);
      if (keys.length > 0) {
        this.formattedValue = keys
          .map((key) => `${rangeLabels[key]}: ${value[key]}`)
          .join(', ');
        return;
      }

      this.formattedValue = '1 Selected';
      return;
    }

    console.log('value :', value);
    // Default string/number
    this.formattedValue = value.toString();
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
