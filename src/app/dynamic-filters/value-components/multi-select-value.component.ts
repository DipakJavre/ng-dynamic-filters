import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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

      <!-- <input
        type="text"
        class="search-box"
        [formControl]="searchControl"
        placeholder="Search..."
      /> -->

      <input
        *ngIf="allowSearch"
        type="search"
        [formControl]="searchTextForAPI"
        (input)="handleSearchInput()"
        placeholder="Search API TEXT"
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectValueComponent implements OnInit, OnChanges {
  @Input() formGroup!: FormGroup;
  @Input() options: OptionsDefinition[] = [];

  @Input() allowSearch: boolean = false;
  @Input() field: string = '';
  @Input() onSearch: ((searchText: string, fieldKey: string) => void) | null =
    null;

  searchControl = new FormControl('');
  searchTextForAPI = new FormControl('');
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && changes['options'].currentValue) {
      console.log('===> options changed', this.options);

      this.filteredOptions = [...this.options];
    }
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

  handleSearchInput(): void {
    if (typeof this.onSearch === 'function') {
      this.onSearch(
        this.searchTextForAPI.value ? this.searchTextForAPI.value : '',
        this.field
      );
    }
  }

  updateOptions(options: OptionsDefinition[]) {
    this.filteredOptions = [...options];
  }
}
