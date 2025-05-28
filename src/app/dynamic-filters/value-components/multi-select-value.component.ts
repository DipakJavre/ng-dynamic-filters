import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OptionsDefinition } from '../utils/common-utilities';

@Component({
  standalone: true,
  selector: 'app-multiselect-checkbox',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./value-input.scss'],
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label">Select Options</label>

      <input
        type="text"
        class="search-box"
        [formControl]="searchControl"
        placeholder="Search..."
      />

      <div class="checkbox-list">
        <div *ngIf="filteredOptions.length === 0" class="no-results">
          No results found
        </div>

        <div
          *ngFor="let option of filteredOptions"
          class="checkbox-item-wrapper"
        >
          <label class="checkbox-item">
            <input
              type="checkbox"
              [checked]="isSelected(option.value)"
              (change)="onCheckboxChange(option.value, $event)"
            />
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>
  `,
})
export class MultiSelectValueComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() options: OptionsDefinition[] = [];

  searchControl = new FormControl('');
  filteredOptions: OptionsDefinition[] = [];

  ngOnInit() {
    const initial = this.formGroup.get('value')?.value;
    if (!Array.isArray(initial)) {
      this.formGroup.get('value')?.setValue([]);
    }

    this.filteredOptions = [...this.options];

    this.searchControl.valueChanges.subscribe((term) => {
      const searchTerm = term?.toLowerCase() || '';
      this.filteredOptions = this.options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm)
      );
    });
  }

  isSelected(val: any): boolean {
    const current = this.formGroup.get('value')?.value || [];
    return current.includes(val);
  }

  onCheckboxChange(val: any, event: Event) {
    const control = this.formGroup.get('value');
    if (!control) return;

    const selected = new Set(control.value || []);
    if ((event.target as HTMLInputElement).checked) {
      selected.add(val);
    } else {
      selected.delete(val);
    }
    control.setValue([...selected]);
  }
}
