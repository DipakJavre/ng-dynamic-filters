import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-number-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label" for="number-input">Number</label>
      <input
        id="number-input"
        type="number"
        formControlName="value"
        class="field-input"
        placeholder="Enter a number"
      />
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class NumberValueComponent {
  @Input() formGroup!: FormGroup;
}
