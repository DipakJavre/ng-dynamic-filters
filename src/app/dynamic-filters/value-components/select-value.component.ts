import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from '../utils/common-utilities';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-select-value',
  styleUrls: ['./value-input.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label">
        {{ isMultiple ? 'Select Options' : 'Select Option' }}
      </label>

      <input
        type="text"
        class="search-box"
        [formControl]="searchControl"
        placeholder="Search options"
      />

      <div class="checkbox-list">
        <ng-container *ngIf="filteredOptions.length > 0; else noOptions">
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
  @Input() options: SelectOption[] = [];
  @Input() allowSearch: boolean = false;
  @Input() field: string = '';
  @Input() isMultiple: boolean = false;
  @Input() onSearch: ((searchText: string, fieldKey: string) => void) | null =
    null;

  searchControl = new FormControl('');
  filteredOptions: SelectOption[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const control = this.formGroup.get('value');
    const currentValue = control?.value;
    if (this.isMultiple && !Array.isArray(currentValue)) {
      control?.setValue([]);
    }
    if (
      !this.isMultiple &&
      typeof currentValue !== 'string' &&
      currentValue !== null
    ) {
      control?.setValue(null);
    }

    this.filteredOptions = [...this.options];

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        filter((val) => val !== null)
      )
      .subscribe((term) => {
        this.filterOptions(term || '');
      });
  }

  filterOptions(searchTerm: string): void {
    if (this.allowSearch && typeof this.onSearch === 'function') {
      this.onSearch(searchTerm, this.field);
    } else {
      this.filteredOptions = this.options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.cdr.markForCheck();
    }
  }

  isSelected(value: any): boolean {
    const current = this.formGroup.get('value')?.value;
    return this.isMultiple
      ? Array.isArray(current) && current.includes(value)
      : current === value;
  }

  onCheckboxChange(value: any, event: Event): void {
    const control = this.formGroup.get('value');
    if (!control) return;

    if (this.isMultiple) {
      const selected = new Set(control.value || []);
      if ((event.target as HTMLInputElement).checked) {
        selected.add(value);
      } else {
        selected.delete(value);
      }
      control.setValue([...selected]);
    } else {
      control.setValue(control.value === value ? null : value);
    }
  }

  updateOptions(options: SelectOption[]) {
    this.filteredOptions = [...options];
    this.cdr.markForCheck();
  }
}
