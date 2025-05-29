import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-text-value',
   styleUrl:'./value-input.scss',
  template: `
    <div class="value-input-wrapper" [formGroup]="formGroup">
      <label for="textInput">Enter a value</label>
      <input
        id="textInput"
        type="text"
        formControlName="value"
        placeholder="Enter text"
        autocomplete="off"
      />
    </div>
  `,
  imports: [ReactiveFormsModule]
})
export class TextValueComponent {
  @Input() formGroup!: FormGroup;
}
