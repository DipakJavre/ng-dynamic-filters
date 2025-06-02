import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-date-value',
   styleUrl:'./value-input.scss',
  template: `
  
  <div [formGroup]="formGroup">
    <input type="date" formControlName="value" class="form-control" />
  </div>
  `,
  imports: [ReactiveFormsModule]
})
export class DateValueComponent {
  @Input() formGroup!: FormGroup;
}