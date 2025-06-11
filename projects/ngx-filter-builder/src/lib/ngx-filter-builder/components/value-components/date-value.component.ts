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
import moment from 'moment';
import { SupportedDateFormats } from '../../utils/common-utilities';
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
          [value]="
            autoDetectToNativeDateFormat(formGroup.get('value')?.value) || ''
          "
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
})
export class DateValueComponent extends UnsubscribeBase implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() dateFormat: string = 'DD-MM-YYYY';

  isBetween = false;
  showValidationError = false;

  fromControl = new FormControl<string | null>(null, Validators.required);
  toControl = new FormControl<string | null>(null, Validators.required);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.isBetween = this.formGroup.value?.operator === 'between';

    if (this.isBetween) {
      const currentValue = this.formGroup.value?.value;
      this.fromControl.setValue(
        this.autoDetectToNativeDateFormat(currentValue?.from) ?? null
      );
      this.toControl.setValue(
        this.autoDetectToNativeDateFormat(currentValue?.to) ?? null
      );

      this.fromControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateRange());

      this.toControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.updateRange());
    }
  }

  onSingleDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.formGroup.get('value')?.setValue(this.formatDate(input.value));
  }

  autoDetectToNativeDateFormat(dateStr: string): string {
    const supportedFormats: SupportedDateFormats[] = [
      'YYYY-MM-DD',
      'DD-MM-YYYY',
      'MM-DD-YYYY',
      'DD/MM/YYYY',
      'MM/DD/YYYY',
      'YYYY/MM/DD',
      'D MMMM YYYY',
      'MMMM D, YYYY',
      'MMM D, YYYY',
      'D-MMM-YYYY',
      'Do MMMM YYYY',
      'dddd, D MMMM YYYY',
      'DD MMM YYYY',
      'YYYY.MM.DD',
      'DD.MM.YYYY',
    ];

    for (const format of supportedFormats) {
      const parsed = moment(dateStr, format, true);
      if (parsed.isValid()) {
        return parsed.format('YYYY-MM-DD');
      }
    }
    return '';
  }

  formatDate(date: string) {
    const formatedDate = moment(date).format(this.dateFormat);
    return formatedDate;
  }

  private updateRange(): void {
    const from = this.formatDate(
      this.fromControl.value ? this.fromControl.value : ''
    );
    const to = this.formatDate(
      this.toControl.value ? this.toControl.value : ''
    );

    const bothPresent = this.fromControl.valid && this.toControl.valid;

    this.showValidationError = bothPresent && new Date(from!) > new Date(to!);

    if (bothPresent && !this.showValidationError) {
      const result = { from, to };
      this.formGroup.get('value')?.setValue(result);
    } else {
      this.formGroup.get('value')?.setValue(null);
    }
  }

  openDatePicker(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.showPicker) {
      input.showPicker();
    }
  }
}
