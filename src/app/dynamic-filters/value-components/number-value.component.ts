import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-number-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <div *ngIf="!isBetween" class="form-group">
        <label class="field-label" for="number-input">Enter Number</label>
        <input
          id="number-input"
          type="number"
          class="field-input w-100"
          formControlName="value"
          placeholder="Enter a number"
        />
      </div>

      <!-- Between Inputs -->
      <div *ngIf="isBetween" class="form-group d-flex gap-2">
        <div class="form-group w-100">
          <label class="field-label" for="min-input">Min</label>
          <input
            id="min-input"
            type="number"
            class="field-input w-100"
            [formControl]="minControl"
            [ngClass]="{ 'input-error': showValidationError || minControl.invalid && minControl.touched }"
            placeholder="Min"
          />
        </div>

        <div class="form-group w-100">
          <label class="field-label" for="max-input">Max</label>
          <input
            id="max-input"
            type="number"
            class="field-input w-100"
            [formControl]="maxControl"
            [disabled]="minControl.invalid"
            [ngClass]="{ 'input-error': showValidationError || maxControl.invalid && maxControl.touched }"
            placeholder="Max"
          />
        </div>
      </div>

      <!-- Error Message -->
      <div class="text-danger mt-1" *ngIf="showValidationError">
        Min should not be greater than Max
      </div>
    </div>
  `,
  imports: [CommonModule, ReactiveFormsModule]
})
export class NumberValueComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  isBetween = false;
  showValidationError = false;

  minControl = new FormControl<number | null>(null, Validators.required);
  maxControl = new FormControl<number | null>(null, Validators.required);

  ngOnInit(): void {
    this.isBetween = this.formGroup.value?.operator === 'between';

    if (this.isBetween) {
      const currentValue = this.formGroup.value?.value;
      this.minControl.setValue(currentValue?.min ?? null);
      this.maxControl.setValue(currentValue?.max ?? null);

      // Subscribe to both fields and validate
      this.minControl.valueChanges.subscribe(() => this.updateValue());
      this.maxControl.valueChanges.subscribe(() => this.updateValue());
    }
  }

  private updateValue() {
    const min = this.minControl.value;
    const max = this.maxControl.value;

    const bothPresent = this.minControl.valid && this.maxControl.valid;

    this.showValidationError = bothPresent && min! > max!;

    if (bothPresent && !this.showValidationError) {
      this.formGroup.get('value')?.setValue({ min, max });
    } else {
      this.formGroup.get('value')?.setValue(null);
    }
  }
}
