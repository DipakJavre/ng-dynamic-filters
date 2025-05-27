import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restaurant } from './models/restaurant.model';
import { RestaurantData } from './common/restaurants_records';
import { FilterDefinition } from './dynamic-filters/utils/common-utilities';
import { DynamicFiltersComponent } from './dynamic-filters/dynamic-filters.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,DynamicFiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  filterList: FilterDefinition[] = [
    {
      field: 'name',
      label: 'Restaurant Name',
      isVisibleInRow: true,
      type: {
        dataType: 'string',
      },
    },
    {
      field: 'rating',
      label: 'Ratting',
      isVisibleInRow: true,
      type: {
        dataType: 'number',
      },
    },
    {
      field: 'cuisine',
      label: 'Cuisine',
      isVisibleInRow: false,
      type: {
        dataType: 'array',
        options: [
          { value: 'North Indian', label: 'North Indian' },
          { value: 'Mughlai', label: 'Mughlai' },
          { value: 'Continental', label: 'Continental' },
          { value: 'Italian', label: 'Italian' },
        ],
      },
    },
  
  ];

  restaurants: Restaurant[] =[
      {
    "_id": "1",
    "name": "Restaurant 1",
    "city": "Chennai",
    "rating": 4.2,
    "cuisine": [
      "North Indian",
      "Mughlai"
    ],
    "priceRange": {
      "min": 114,
      "max": 1442
    },
    "features": {
      "outdoorSeating": true,
      "familyFriendly": true,
      "liveMusic": true,
      "wheelchairAccess": false
    },
    "tags": [
      "coffee",
      "dessert",
      "quiet"
    ],
    "contact": {
      "phone": "+91-8751098154",
      "email": "contact71@restaurant1.com"
    },
    "location": {
      "coordinates": [
        18.9958,
        78.3259
      ],
      "address": {
        "line1": "509, Main Road",
        "line2": null,
        "zipcode": "984394"
      }
    },
    "availableTables": null,
    "revenue": "6831356782",
    "menu": [
      {
        "item": "Rasam Rice",
        "price": 464
      },
      {
        "item": "Pasta Alfredo",
        "price": 478
      },
      {
        "item": "Tandoori Chicken",
        "price": 222
      },
      {
        "item": "Masala Dosa",
        "price": 214
      }
    ],
    "createdAt": "2025-03-14T00:00:00",
    "updatedAt": "2025-01-14T00:00:00"
  },
  {
    "_id": "2",
    "name": "Restaurant 2",
    "city": "Hyderabad",
    "rating": 3.6,
    "cuisine": [
      "Continental",
      "Italian"
    ],
    "priceRange": {
      "min": 101,
      "max": 973
    },
    "features": {
      "outdoorSeating": true,
      "familyFriendly": false,
      "liveMusic": true,
      "wheelchairAccess": true
    },
    "tags": [
      "premium",
      "fine-dine",
      "gourmet"
    ],
    "contact": {
      "phone": "+91-8992513196",
      "email": "contact70@restaurant2.com"
    },
    "location": {
      "coordinates": [
        26.1228,
        82.1126
      ],
      "address": {
        "line1": "446, Main Road",
        "line2": null,
        "zipcode": "268035"
      }
    },
    "availableTables": null,
    "revenue": "2626177909",
    "menu": [
      {
        "item": "Tandoori Chicken",
        "price": 339
      },
      {
        "item": "Pasta Alfredo",
        "price": 172
      },
      {
        "item": "Rasam Rice",
        "price": 184
      },
      {
        "item": "Naan",
        "price": 342
      },
      {
        "item": "Chow Mein",
        "price": 394
      }
    ],
    "createdAt": "2024-03-27T00:00:00",
    "updatedAt": "2024-03-02T00:00:00"
  },
  ]
}
