import { SelectOption } from '../dynamic-filters/utils/common-utilities';

export type QueryFieldType =
  | 'text'
  | 'number'
  | 'select'
  | 'multi-select'
  | 'boolean'
  | 'range'
  | 'date';

export interface QueryFieldOption {
  label: string;
  value: string | number | boolean;
}

export interface QueryField {
  key: string;
  label: string;
  type: QueryFieldType;
  inputType?: 'input' | 'select' | 'checkbox' | 'radio';
  options?: QueryFieldOption[];
  placeholder?: string;
  defaultValue?: any;
  required?: boolean;
  multi?: boolean;
}

export interface getOperatorsParams {
  type: string;
  isAutocomplete?: boolean;
}

export type SupportedDataType =
  | 'string'
  | 'number'
  | 'date'
  | 'time'
  | 'boolean'
  | 'array'
  | 'object'
  | 'arrayOfObjects';

export interface OperatorDefinition {
  label: string;
  value: string;
}

export const operatorsMap: {
  [key: string]: { label: string; value: string }[];
} = {
  string: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Contains', value: 'contains' },
    { label: 'Does Not Contain', value: 'does not contain' },
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
  number: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Less Than', value: '<' },
    { label: 'Less Than or Equal', value: '<=' },
    { label: 'Greater Than', value: '>' },
    { label: 'Greater Than or Equal', value: '>=' },
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
  date: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Before', value: '<' },
    { label: 'On or Before', value: '<=' },
    { label: 'After', value: '>' },
    { label: 'On or After', value: '>=' },
  ],
  time: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Before', value: '<' },
    { label: 'On or Before', value: '<=' },
    { label: 'After', value: '>' },
    { label: 'On or After', value: '>=' },
  ],
  boolean: [
    { label: 'Is', value: 'is' },
    { label: 'Is Not', value: 'is not' },
  ],
  array: [
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
  object: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
  ],
  arrayOfObjects: [
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
};

export const RESTAURANT_FILTER_FIELDS: QueryField[] = [
  {
    key: 'city',
    label: 'City',
    type: 'select',
    options: [
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Hyderabad', value: 'Hyderabad' },
    ],
    placeholder: 'Select a city',
  },
  {
    key: 'cuisine',
    label: 'Cuisine',
    type: 'multi-select',
    options: [
      { label: 'North Indian', value: 'North Indian' },
      { label: 'Mughlai', value: 'Mughlai' },
      { label: 'Continental', value: 'Continental' },
      { label: 'Italian', value: 'Italian' },
    ],
    multi: true,
  },
  {
    key: 'rating',
    label: 'Rating',
    type: 'range', // can use slider or min/max number
    placeholder: 'Rating from X to Y',
  },
  {
    key: 'priceRange',
    label: 'Price Range',
    type: 'range',
    placeholder: 'Min / Max price',
  },
  {
    key: 'features.outdoorSeating',
    label: 'Outdoor Seating',
    type: 'boolean',
  },
  {
    key: 'features.familyFriendly',
    label: 'Family Friendly',
    type: 'boolean',
  },
  {
    key: 'tags',
    label: 'Tags',
    type: 'multi-select',
    options: [
      { label: 'quiet', value: 'quiet' },
      { label: 'coffee', value: 'coffee' },
      { label: 'dessert', value: 'dessert' },
      { label: 'premium', value: 'premium' },
      { label: 'fine-dine', value: 'fine-dine' },
    ],
  },
  {
    key: 'menuKeyword',
    label: 'Menu Keyword',
    type: 'text',
    placeholder: 'Search in menu items',
  },
  {
    key: 'availableTables',
    label: 'Available Tables',
    type: 'boolean',
  },
  {
    key: 'createdAt',
    label: 'Created At',
    type: 'date',
  },
];
