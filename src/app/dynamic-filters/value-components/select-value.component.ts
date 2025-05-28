import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@Component({
  standalone: true,
  selector: 'app-select-value',
  styleUrl: './value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label" for="select-input">Select Option</label>
      <ng-select
        id="select-input"
        formControlName="value"
        [items]="options"
        bindLabel="label"
        bindValue="value"
        class="field-input"
        placeholder="Choose an option"
        [searchable]="false"
        [clearable]="true"
      ></ng-select>
    </div>
  `,
  imports: [ReactiveFormsModule, NgSelectModule],
})
export class SelectValueComponent {
  @Input() formGroup!: FormGroup;
  @Input() options: { label: string; value: string }[] = [];
}
