import { Injectable } from '@angular/core';
import { FilterResult } from '../utils/common-utilities';

@Injectable()
export class QueryBuilderService {
  constructor() {}

  buildJqlQuery(filters: FilterResult[]): string {
    const jqlParts = filters
      .map((filter) => this.transformFilterToJql(filter))
      .filter(Boolean);
    return jqlParts.join(' AND ');
  }

  private transformFilterToJql(filter: FilterResult): string | null {
    const { field, operator, value } = filter;

    if (value === null || value === undefined || value === '') return null;

    if (!operator) return '';
    switch (operator) {
      case '=':
      case '!=':
      case '<':
      case '<=':
      case '>':
      case '>=':
        return `${field} ${operator} ${this.formatValue(value)}`;

      case 'contains':
        return `${field} ~ ${this.formatValue(value)}`;

      case 'not contains':
        return `${field} !~ ${this.formatValue(value)}`;

      case 'startsWith':
        return `${field} ~ "${value}*"`;

      case 'endsWith':
        return `${field} ~ "*${value}"`;

      case 'in':
        return `${field} in (${this.formatArray(value)})`;

      case 'not in':
        return `${field} not in (${this.formatArray(value)})`;

      case 'is':
        return `${field} is ${value}`;

      case 'is not':
        return `${field} is not ${value}`;

      case 'between':
        if (
          typeof value === 'object' &&
          value !== null &&
          typeof value.min === 'number' &&
          typeof value.max === 'number'
        ) {
          return `(${field} >= ${value.min} AND ${field} <= ${value.max})`;
        } else {
          return null; 
        }

      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }

  private formatValue(value: any): string {
    return typeof value === 'string' ? `"${value}"` : value;
  }

  private formatArray(values: any[]): string {
    if (typeof values === 'string') {
      return values;
    }
    return values.map((v) => this.formatValue(v)).join(', ');
  }
}
