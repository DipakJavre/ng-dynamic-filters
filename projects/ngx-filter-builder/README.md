
````markdown
# ngx-filter-builder

A dynamic, customizable Angular 19 library to create filters or query builders inspired by Jira filters. Supports multiple data types, operators, async options loading, and light/dark themes with CSS variables for easy customization.

---

## Features

- Supports data types: `string`, `number`, `date`, `time`, `boolean`, and `select` (single/multi)
- Dynamic operators based on field type (e.g. equals, contains, between, in, etc.)
- Async option loading for select/multiselect fields via search callbacks
- Easy integration with reactive forms and Angular standalone components
- Customizable styles with CSS variables supporting light and dark themes
- Intuitive event-based filter result output for easy query building
- Support for multiple date formats

---

## Installation

Install via npm:

```bash
npm install ngx-filter-builder
````

---

## Usage

Import the main component and use it in your template:

```html
<lib-dynamic-filters 
  [filterList]="filterColumnList" 
  (result)="filterResults($event)">
</lib-dynamic-filters>
```

Example filter definitions in your component:

```ts
filterColumnList: FilterDefinition[] = [
  {
    field: 'name',
    label: 'Restaurant Name',
    isVisibleInRow: true,
    type: { dataType: 'string' }
  },
  {
    field: 'isActive',
    label: 'Active Restaurants',
    isVisibleInRow: true,
    type: { dataType: 'boolean' }
  },
  {
    field: 'date',
    label: 'Date',
    isVisibleInRow: true,
    type: { dataType: 'date', dateFormat: 'dd-MM-yyyy' }
  },
  {
    field: 'cuisine',
    label: 'Cuisine',
    isVisibleInRow: true,
    type: {
      dataType: 'select',
      options: [
        { label: 'North Indian', value: { cuisine: 'North Indian', origin: 'India', spiceLevel: 'High' } },
        { label: 'Mughlai', value: { cuisine: 'Mughlai', origin: 'India (Mughal Empire)', spiceLevel: 'Medium' } },
        { label: 'Continental', value: { cuisine: 'Continental', origin: 'Europe', spiceLevel: 'Low' } },
        { label: 'Italian', value: { cuisine: 'Italian', origin: 'Italy', spiceLevel: 'Low to Medium' } }
      ],
      isMultiple: true
    }
  }
  // Add more fields as needed
];
```

Handle filter result events:

```ts
filterResults(event: FilterResult[]) {
  console.log('Filters applied:', event);
  // Use this to build your query or API call
}
```

---

## API

### Inputs

| Input        | Type                 | Description                                      |
| ------------ | -------------------- | ------------------------------------------------ |
| `filterList` | `FilterDefinition[]` | List of available filter fields & configurations |

### Outputs

| Output   | Type                           | Description                     |
| -------- | ------------------------------ | ------------------------------- |
| `result` | `EventEmitter<FilterResult[]>` | Emits current filter conditions |

---

## Interfaces

### FilterDefinition

```ts
interface FilterDefinition {
  field: string;
  label: string;
  isVisibleInRow: boolean;
  fieldInformation?: string;
  type: {
    dataType: 'string' | 'number' | 'date' | 'time' | 'boolean' | 'select';
    options?: SelectOption[];
    allowSearch?: boolean;
    onSearch?: (searchText: string, fieldKey: string) => void;
    isMultiple?: boolean;
    dateFormat?: 'yyyy-MM-dd' | 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'MMMM dd, yyyy' | 'dd MMM, yyyy' | 'yyyy/MM/dd' | 'dd-MM-yyyy';
  };
}
```

### SelectOption

```ts
interface SelectOption {
  value: any;
  label: string;
}
```

### FilterResult

```ts
interface FilterResult {
  field: string;
  operator: string;
  value: any;
}
```

---

## Styling & Theming

The library supports both light and dark themes via CSS root variables. You can customize these variables globally in your styles:

```css
:root {
  --ngx-filter-font-family: "Poppins", sans-serif;
  --ngx-filter-font-size: 14px;
  --ngx-filter-color-background: #ffffff;
  --ngx-filter-color-border: #dfe1e6;
  --ngx-filter-color-primary: #0052cc;
  --ngx-filter-color-primary-hover: #0747a6;
  --ngx-filter-color-neutral: #172b4d;
  --ngx-filter-color-muted: #6b778c;
  --ngx-filter-color-accent: #deebff;
  --ngx-filter-color-accent-hover: #b3d4ff;
  --ngx-filter-color-selected: #e9f2ff;
  --ngx-filter-color-shadow: rgba(9, 30, 66, 0.15);
  --ngx-filter-color-disabled-bg: #f4f5f7;
  --ngx-filter-color-placeholder: #a5adba;
  --ngx-filter-color-error: #de350b;
  --ngx-filter-light-gray: #f4f5f7;
}
```

For dark theme, override variables accordingly:

```css
:root {
  --ngx-filter-color-background: #333333;
  --ngx-filter-color-border: #3c3f4e;
  --ngx-filter-color-primary: #fff;
  --ngx-filter-color-primary-hover: #2684ff;
  --ngx-filter-color-neutral: #f4f5f7;
  --ngx-filter-color-muted: #a5adba;
  --ngx-filter-color-accent: #2e3a59;
  --ngx-filter-color-accent-hover: #435172;
  --ngx-filter-color-selected: #2c3e50;
  --ngx-filter-color-shadow: rgba(0, 0, 0, 0.6);
  --ngx-filter-color-disabled-bg: #2b2b3d;
  --ngx-filter-color-placeholder: #7a869a;
  --ngx-filter-color-error: #ff6b6b;
  --ngx-filter-light-gray: #3d3d3d;
}
```

---

## Demo

Try the live demo here: [https://your-demo-url.com](https://your-demo-url.com)
*(Replace with your actual demo URL)*

---

## Development

To build and test locally:

```bash
npm run build
npm run test
```

---

## License

MIT License © TechTose

---

## Contribution

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/your-repo/ngx-filter-builder/issues) or submit a pull request.

---

Thank you for using **ngx-filter-builder**!

```

---