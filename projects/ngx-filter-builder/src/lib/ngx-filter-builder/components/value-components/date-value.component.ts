import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntil } from 'rxjs';
import { UnsubscribeBase } from '../../services/unsubscribe-subscription';

@Component({
  standalone: true,
  selector: 'app-date-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <!-- Single Date -->
      <div *ngIf="!isBetween" class="form-group">
        <label class="field-label" for="date-input">Select Date</label>
        <input
          id="date-input"
          type="date"
          class="field-input w-100"
          formControlName="value"
        />
      </div>

      <!-- Date Range -->
      <div *ngIf="isBetween" class="form-group gap-2">
        <div class="form-group w-100 mb-3">
          <label class="field-label" for="from-date">From</label>
          <input
            id="from-date"
            type="date"
            class="field-input w-100"
            [formControl]="fromControl"
            [ngClass]="{
              'input-error':
                showValidationError ||
                (fromControl.invalid && fromControl.touched)
            }"
          />
        </div>

        <div class="form-group w-100">
          <label class="field-label" for="to-date">To</label>
          <input
            id="to-date"
            type="date"
            class="field-input w-100"
            [formControl]="toControl"
            [disabled]="fromControl.invalid"
            [min]="fromControl.value"
            [ngClass]="{
              'input-error':
                showValidationError ||
                (toControl.invalid && toControl.touched)
            }"
          />
        </div>
      </div>

      <div class="text-danger mt-1" *ngIf="showValidationError">
        From date must be before or equal to To date.
      </div>
    </div>
  `,
  imports: [CommonModule, ReactiveFormsModule],
})
export class DateValueComponent extends UnsubscribeBase implements OnInit {
  @Input() formGroup!: FormGroup;

  isBetween = false;
  showValidationError = false;

  fromControl = new FormControl<string | null>(null, Validators.required);
  toControl = new FormControl<string | null>(null, Validators.required);

  ngOnInit(): void {
    this.isBetween = this.formGroup.value?.operator === 'between';

    if (this.isBetween) {
      const currentValue = this.formGroup.value?.value;
      this.fromControl.setValue(currentValue?.from ?? null);
      this.toControl.setValue(currentValue?.to ?? null);

      this.fromControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateValue());

      this.toControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateValue());
    }
  }

  private updateValue(): void {
    const from = this.fromControl.value;
    const to = this.toControl.value;

    const bothPresent = this.fromControl.valid && this.toControl.valid;

    this.showValidationError =
      bothPresent && new Date(from!) > new Date(to!);

    if (bothPresent && !this.showValidationError) {
      this.formGroup.get('value')?.setValue({ from, to });
    } else {
      this.formGroup.get('value')?.setValue(null);
    }
  }
}
