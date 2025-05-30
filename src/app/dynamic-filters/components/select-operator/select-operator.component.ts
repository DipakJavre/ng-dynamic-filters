import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-operator',
  imports: [NgSelectModule,ReactiveFormsModule],
  templateUrl: './select-operator.component.html',
  styleUrl: './select-operator.component.scss',
})
export class SelectOperatorComponent {

  @Input() formGroup!: FormGroup;
  @Input() operators: any[] = [];
  @Output() onOperatorChanged = new EventEmitter<void>();

}
