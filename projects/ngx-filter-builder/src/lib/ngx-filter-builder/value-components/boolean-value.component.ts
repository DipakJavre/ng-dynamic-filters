import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-boolean-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="checkbox-label">
        <input type="checkbox" formControlName="value" />
        <span>Boolean Value</span>
      </label>
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class BooleanValueComponent {
  @Input() formGroup!: FormGroup;
}
