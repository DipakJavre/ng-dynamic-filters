import { Type } from '@angular/core';
import { TextValueComponent } from './text-value.component';
import { NumberValueComponent } from './number-value.component';
import { SelectValueComponent } from './select-value.component';
import { BooleanValueComponent } from './boolean-value.component';
import { DateValueComponent } from './date-value.component';

export const ValueComponentMap: Record<string, Type<any>> = {
  string: TextValueComponent,
  number: NumberValueComponent,
  select: SelectValueComponent,
  boolean: BooleanValueComponent,
  date: DateValueComponent,
};
