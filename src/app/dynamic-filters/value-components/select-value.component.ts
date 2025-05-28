import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OptionsDefinition } from '../utils/common-utilities';

@Component({
  standalone: true,
  selector: 'app-select-value',
  styleUrls: ['./value-input.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label">Select Option</label>

      <input
        type="text"
        class="search-box"
        [formControl]="searchControl"
        placeholder="Search options"
      />

      <div class="checkbox-list">
        <ng-container *ngIf="filteredOptions.length > 0; else noOptions">
          <div *ngFor="let option of filteredOptions" class="checkbox-item-wrapper">
            <label class="checkbox-item">
              <input
                type="checkbox"
                [checked]="isSelected(option.value)"
                (change)="onCheckboxChange(option.value)"
              />
              {{ option.label }}
            </label>
          </div>
        </ng-container>

        <ng-template #noOptions>
          <div class="no-options-message">No options found</div>
        </ng-template>
      </div>
    </div>
  `,
})
export class SelectValueComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() options: OptionsDefinition[] = [];

  searchControl = new FormControl('');
  filteredOptions: OptionsDefinition[] = [];

  ngOnInit(): void {
    const control = this.formGroup.get('value');
    if (control && typeof control.value !== 'string' && control.value !== null) {
      control.setValue(null);
    }

    this.filteredOptions = [...this.options];

    this.searchControl.valueChanges.subscribe(search => {
      const keyword = (search || '').toLowerCase();
      this.filteredOptions = this.options.filter(option =>
        option.label.toLowerCase().includes(keyword)
      );
    });
  }

  isSelected(value: any): boolean {
    return this.formGroup.get('value')?.value === value;
  }

  onCheckboxChange(value: any): void {
    const control = this.formGroup.get('value');
    if (!control) return;

    control.setValue(control.value === value ? null : value);
  }
}
