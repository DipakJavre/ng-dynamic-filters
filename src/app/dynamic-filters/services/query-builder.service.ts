import { Injectable } from '@angular/core';

@Injectable()
export class QueryBuilderService {
  constructor() {}

  buildJqlQuery(filters: any[]): string {
    const jqlParts = filters.map(filter => this.transformFilterToJql(filter)).filter(Boolean);
    return jqlParts.join(' AND ');
  }

  private transformFilterToJql(filter: any): string | null {
    const { field, operator, value } = filter;

    if (value === null || value === undefined || value === '') return null;

    if(!operator) return '';
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

      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  }

  private formatValue(value: any): string {
    return typeof value === 'string' ? `"${value}"` : value;
  }

  private formatArray(values: any[]): string {
    return values.map(v => this.formatValue(v)).join(', ');
  }
}
