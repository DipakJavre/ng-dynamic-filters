import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-boolean-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="checkbox-list mt-3" [formGroup]="formGroup">
      <ng-container *ngIf="options.length > 0; else noOptions">
        <div *ngFor="let option of options" class="checkbox-item-wrapper">
          <label class="checkbox-item">
            <input
              type="checkbox"
              [checked]="isSelected(option.value)"
              (change)="onCheckboxChange(option.value, $event)"
            />
            {{ option.label }}
          </label>
        </div>
      </ng-container>

      <ng-template #noOptions>
        <div class="no-options-message">No options found</div>
      </ng-template>
    </div>
  `,
  imports: [ReactiveFormsModule, NgFor, NgIf],
})
export class BooleanValueComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  options = [
    { label: 'True', value: true },
    { label: 'False', value: false },
  ];

  ngOnInit(): void {
    if (!this.formGroup.get('value')?.value) {
      this.formGroup.get('value')?.setValue(null);
    }
  }

  isSelected(value: boolean): boolean {
    return this.formGroup.get('value')?.value === value;
  }

  onCheckboxChange(value: boolean, event: Event): void {
    const currentValue = this.formGroup.get('value')?.value;
    const newValue = currentValue === value ? null : value;
    this.formGroup.get('value')?.setValue(newValue);
  }
}
