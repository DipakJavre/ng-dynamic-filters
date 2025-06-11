import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, filter as rxFilter, takeUntil } from 'rxjs/operators';
import { from, lastValueFrom } from 'rxjs';
import { UnsubscribeBase } from '../../services/unsubscribe-subscription';
import { SelectOption } from '../../utils/common-utilities';

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
        <ng-container *ngIf="isLoading; else listOrEmpty">
          <div
            class="spinner-wrapper h-100 mt-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div
              class="spinner-border spinner-border-sm text-primary"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mb-0 mt-2">Loading</p>
          </div>
        </ng-container>

        <ng-template #listOrEmpty>
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
        </ng-template>

        <ng-template #noOptions>
          <div class="no-options-message">No options found</div>
        </ng-template>
      </div>
    </div>
  `,
})
export class SelectValueComponent extends UnsubscribeBase implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() options: SelectOption[] = [];
  @Input() allowSearch: boolean = false;
  @Input() isMultiple: boolean = false;

  @Input()
  onSearch:
    | ((
        searchText: string
      ) => Promise<SelectOption[]> | import('rxjs').Observable<SelectOption[]>)
    | null = null;

  searchControl = new FormControl('');
  filteredOptions: SelectOption[] = [];
  isLoading = false;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

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
        rxFilter((val) => val !== null),
        takeUntil(this.destroy$)
      )
      .subscribe((term) => {
        this.filterOptions(term || '');
      });
  }

  async filterOptions(searchTerm: string): Promise<void> {
    if (this.allowSearch && typeof this.onSearch === 'function') {
      this.isLoading = true;
      this.cdr.markForCheck();

      try {
        const result = await lastValueFrom(from(this.onSearch(searchTerm)));
        this.filteredOptions = Array.isArray(result) ? result : [result];        
      } catch (error) {
        this.filteredOptions = [];
      } finally {
        this.isLoading = false;
        this.cdr.markForCheck();
      }
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
