import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FakeApiService {
  constructor() {}

  getMenuItems(): Observable<
    {
      label: string;
      value: { item: string; price: number };
    }[]
  > {
    const rawData = [
      { item: 'Rasam Rice', price: 464 },
      { item: 'Pasta Alfredo', price: 478 },
      { item: 'Tandoori Chicken', price: 222 },
      { item: 'Masala Dosa', price: 214 }
    ];

    // simulate 1 second delay using timer
    return timer(1000).pipe(
      map(() =>
        rawData.map(entry => ({
          label: entry.item,
          value: {
            item: entry.item,
            price: entry.price
          }
        }))
      )
    );
  }
}
