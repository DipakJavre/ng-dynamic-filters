import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { takeUntil } from 'rxjs';
import { UnsubscribeBase } from '../../services/unsubscribe-subscription';
import * as _ from 'lodash';

@Component({
  standalone: true,
  selector: 'app-date-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <div *ngIf="!isBetween" class="form-group">
        <label class="field-label" for="date-input">Select Date</label>
        <input
          id="date-input"
          type="date"
          class="field-input w-100"
          (click)="openDatePicker($event)"
          [value]="getFormattedDate(formGroup.get('value')?.value)"
          (change)="onSingleDateChange($event)"
        />
      </div>

      <div *ngIf="isBetween" class="form-group gap-2">
        <div class="form-group w-100">
          <label class="field-label" for="from-date">From</label>
          <input
            id="from-date"
            type="date"
            class="field-input w-100"
            [formControl]="fromControl"
            (click)="openDatePicker($event)"
            [ngClass]="{
              'input-error':
                showValidationError ||
                (fromControl.invalid && fromControl.touched)
            }"
          />
        </div>

        <div class="form-group w-100 mt-2">
          <label class="field-label" for="to-date">To</label>
          <input
            id="to-date"
            type="date"
            class="field-input w-100"
            [formControl]="toControl"
            [disabled]="fromControl.invalid"
            (click)="openDatePicker($event)"
            [min]="fromControl.value"
            [ngClass]="{
              'input-error':
                showValidationError || (toControl.invalid && toControl.touched)
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
  providers: [DatePipe],
})
export class DateValueComponent extends UnsubscribeBase implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() dateFormat: string = 'yyyy-MM-dd';

  isBetween = false;
  showValidationError = false;

  fromControl = new FormControl<string | null>(null, Validators.required);
  toControl = new FormControl<string | null>(null, Validators.required);

  constructor(private datePipe: DatePipe) {
    super();
  }

  ngOnInit(): void {
    this.isBetween = this.formGroup.value?.operator === 'between';

    if (this.isBetween) {
      const currentValue = this.formGroup.value?.value;
      this.fromControl.setValue(currentValue?.from ?? null);
      this.toControl.setValue(currentValue?.to ?? null);

      this.fromControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateRange());

      this.toControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateRange());
    }
  }

  onSingleDateChange(rawValue: Event): void {
    const input = rawValue.target as HTMLInputElement;
    const formatted = this.formatDate(input.value);
    this.formGroup.get('value')?.setValue(formatted);
  }

  private updateRange(): void {
    const from = this.fromControl.value;
    const to = this.toControl.value;

    const bothPresent = this.fromControl.valid && this.toControl.valid;

    this.showValidationError = bothPresent && new Date(from!) > new Date(to!);

    if (bothPresent && !this.showValidationError) {
      const result = {
        from: this.formatDate(from!),
        to: this.formatDate(to!),
      };
      this.formGroup.get('value')?.setValue(result);
    } else {
      this.formGroup.get('value')?.setValue(null);
    }
  }

  private formatDate(value: string | Date): string {
    const parsed = new Date(value);

    if (!_.isDate(parsed) || isNaN(parsed.getTime())) {
      return value.toString();
    }

    // Format using native `Intl.DateTimeFormat` (dd-MMM-yyyy)
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(parsed);
  }

  getFormattedDate(value: string): string {
    if (!value) return '';
    const parsed = new Date(value);
    return this.datePipe.transform(parsed, 'yyyy-MM-dd') ?? '';
  }

  openDatePicker(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input?.showPicker) {
    input.showPicker();
  }
}
}
