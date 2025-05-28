import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { OptionsDefinition } from "../common/common-utilities";


@Component({
  standalone: true,
  selector: 'app-multiselect-value',
  styleUrls: ['./value-input.scss'],
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label class="field-label" for="multiselect-input">Select Options</label>
      <ng-select
        formControlName="value"
        [items]="options"
        bindLabel="label"
        bindValue="value"
        class="field-input"
        placeholder="Choose options"
        [multiple]="true"
        [closeOnSelect]="false"
        [searchable]="true"
        [clearable]="true"
      ></ng-select>
    </div>
  `,
  imports: [ReactiveFormsModule, NgSelectModule],
})
export class MultiSelectValueComponent {
  @Input() formGroup!: FormGroup;
  @Input() options: OptionsDefinition[] = [];
}
