import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { menuList } from './dynamic-filters/utils/restaurants_records';
import { SelectOption } from './dynamic-filters/utils/common-utilities';

@Injectable()
export class FakeApiService {
  
  constructor() {}

  filteredOptions(searchText: string): SelectOption[] {
    const text = searchText.trim().toLowerCase();
    const menu = menuList;
    return menu
      .filter((item: any) => item.item.toLowerCase().includes(text))
      .map((item: any) => ({
        label: item.item,
        value: item.item,
      }));
  }
}
