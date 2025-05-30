import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlightJql' })
export class HighlightJqlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const keywords = ['AND', 'OR', 'NOT', '=', '!=', '<', '<=', '>=', '>', 'in', 'not in', 'is', 'is not', '~', '!~'];
    let result = value;

    keywords.forEach(kw => {
      const pattern = new RegExp(`\\b${kw}\\b`, 'g');
      result = result.replace(pattern, `<span class="text-danger">${kw}</span>`);
    });

    return result;
  }
}
