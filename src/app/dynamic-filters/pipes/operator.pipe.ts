import { Pipe, PipeTransform } from '@angular/core';
import {
  FilterDefinition,
  OperatorDefinition,
  operatorsMap,
} from '../utils/common-utilities';

@Pipe({
  name: 'operators',
  pure: true,
})
export class OperatorsPipe implements PipeTransform {
  transform(field: string, filters: FilterDefinition[]): OperatorDefinition[] {
    const dataType = filters.find((f) => f.field === field)?.type?.dataType;    
    return dataType ? operatorsMap[dataType] ?? [] : [];
  }
}
