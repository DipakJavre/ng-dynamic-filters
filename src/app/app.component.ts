import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FakeApiService } from './fake-api.service';
import {
  DynamicFiltersComponent,
  FilterDefinition,
  FilterResult,
} from '@ngx-filter';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DynamicFiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [FakeApiService],
})
export class AppComponent {
  filterColumnList: FilterDefinition[] = [
    {
      field: 'name',
      label: 'Restaurant Name',
      isVisibleInRow: true,
      type: {
        dataType: 'string',
      },
    },
    {
      field: 'isActive',
      label: 'Active Restaurants',
      isVisibleInRow: true,
      type: {
        dataType: 'boolean',
      },
    },
    {
      field: 'date',
      label: 'Date',
      isVisibleInRow: true,
      type: {
        dataType: 'date',
        dateFormat: 'dd-MM-yyyy',
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
      field: 'price',
      label: 'Price',
      isVisibleInRow: true,
      fieldInformation: 'Filter records based on price range',
      type: {
        dataType: 'number',
      },
    },
    {
      field: 'cuisine',
      label: 'Cuisine',
      isVisibleInRow: true,
      type: {
        dataType: 'select',
        options: [
          { value: 'North Indian', label: 'North Indian' },
          { value: 'Mughlai', label: 'Mughlai' },
          { value: 'Continental', label: 'Continental' },
          { value: 'Italian', label: 'Italian' },
        ],
        allowSearch: false,
        onSearch: this.onSearchFactory(),
      },
    },
    {
      field: 'menu',
      label: 'Menu',
      isVisibleInRow: true,
      type: {
        dataType: 'select',
        options: [
          { value: 'North Indian', label: 'North Indian' },
          { value: 'Mughlai', label: 'Mughlai' },
          { value: 'Continental', label: 'Continental' },
          { value: 'Italian', label: 'Italian' },
        ],
        isMultiple: true,
        allowSearch: true,
        onSearch: this.onSearchFactory(),
      },
    },
    {
      field: 'tags',
      label: 'Tags',
      isVisibleInRow: true,
      fieldInformation: 'Filter records based on tags',
      type: {
        dataType: 'select',
        options: [
          { value: 'coffee', label: 'Coffee' },
          { value: 'dessert', label: 'Dessert' },
          { value: 'quiet', label: 'Quiet' },
          { value: 'premium', label: 'Premium' },
          { value: 'fine-dine', label: 'Fine Dine' },
          { value: 'gourmet', label: 'Gourmet' },
        ],
        isMultiple: true,
        allowSearch: false,
      },
    },
  ];

  result: FilterResult[] = [];

  constructor(private fakeAPIService: FakeApiService) {}

  filterResults(event: FilterResult[]) {
    this.result = event;
  }

  onSearchFactory(): (searchText: string, fieldKey: string) => void {
    return (searchText: string, fieldKey: string) => {
      const field = this.filterColumnList.find((f) => f.field === fieldKey);
      if (field) {
        field.type.options = this.fakeAPIService.filteredOptions(searchText);

        /// Assuming the options are updated asynchronously, & instead of api used setTimeout to simulate dela
        setTimeout(() => {
          this.filterColumnList = [...this.filterColumnList];
        }, 1000);
      }
    };
  }
}
