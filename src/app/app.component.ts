import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  DynamicFiltersComponent,
  FilterDefinition,
  FilterResult,
  SelectOption,
} from '@ngx-filter';
import { Observable, takeUntil } from 'rxjs';
import { ApiService } from './services/api.service';
import { Product } from './models/product.model';
import { UnsubscribeBase } from '../../projects/ngx-filter-builder/src/lib/ngx-filter-builder/services/unsubscribe-subscription';
@Component({
  selector: 'app-root',
  imports: [CommonModule, DynamicFiltersComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent extends UnsubscribeBase implements OnInit {
  result: FilterResult[] = [];
  productList: Product[] = [];
  productFilterColumnList: FilterDefinition[] = [
    {
      field: 'name',
      isVisibleInRow: true,
      label: 'Product Name',
      type: {
        dataType: 'string',
      },
    },
    {
      field: 'brand',
      isVisibleInRow: true,
      label: 'Brand Name',
      type: {
        dataType: 'string',
      },
    },
    {
      field: 'category',
      isVisibleInRow: true,
      label: 'Category',
      type: {
        dataType: 'select',
        isMultiple: true,
        options: [
          {
            label: 'Choice Stuff',
            value: 'Choice Stuff',
          },
          {
            label: 'Home Supplies',
            value: 'Home Supplies',
          },
        ],
        onSearch: this.onSearchCategory(),
        allowSearch: true,
      },
    },
    {
      field: 'releaseDate',
      label: 'Release Date',
      isVisibleInRow: true,
      type: {
        dataType: 'date',
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      field: 'createdAt',
      label: 'Created Date',
      isVisibleInRow: true,
      type: {
        dataType: 'date',
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      field: 'features',
      isVisibleInRow: true,
      label: 'Features',
      type: {
        dataType: 'select',
        isMultiple: true,
        options: [
          {
            label: 'Waterproof',
            value: 'Waterproof',
          },
          {
            label: 'Bluetooth',
            value: 'Bluetooth',
          },
          {
            label: 'GPS',
            value: 'GPS',
          },
        ],
      },
    },
    {
      field: 'price',
      label: 'Price',
      isVisibleInRow: true,
      type: {
        dataType: 'number',
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
      field: 'isActive',
      label: 'Is Active Products',
      isVisibleInRow: true,
      type: {
        dataType: 'boolean',
      },
    },
  ];

  selectedFilters: FilterResult[] = []; // [{
  //   field: 'brand',
  //   operator: '=',
  //   value: 'Apple',
  //  }]

  constructor(private apiService: ApiService) {
    super();
  }

  ngOnInit(): void {
    this.getProductList();
    this.setDefaultSelectedFilters();
  }

  setDefaultSelectedFilters() {
    const filters = localStorage.getItem('SELECTED_FILLTER');
    if (filters) {
      this.selectedFilters = JSON.parse(filters) as FilterResult[];
    } else {
      this.selectedFilters = [];
    }
  }

  filterResults(event: FilterResult[]) {
    this.result = event;
    
    // Saving selected filters in local storage.
    localStorage.setItem('SELECTED_FILLTER', JSON.stringify(this.result));

    //filters API Call
    this.apiService
      .postData('products/filter', this.result)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Product[]) => {
        this.productList = res;
      });
  }

  onSearchCategory(): (searchText: string) => Observable<SelectOption[]> {
    return (searchText: string) => {
      return this.apiService.getOptions(searchText);
    };
  }

  getProductList() {
    this.apiService.getData('products')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Product[]) => {
        if (res && res.length) {
          this.productList = res;
        }
      });
  }
}
