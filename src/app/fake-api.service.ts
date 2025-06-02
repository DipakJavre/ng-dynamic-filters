import { Injectable } from '@angular/core';
import { menuList } from './models/restaurant.model';
import { SelectOption } from '@ngx-filter';

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
