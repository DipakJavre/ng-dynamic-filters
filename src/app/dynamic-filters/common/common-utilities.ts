import { SelectOption } from '../utils/common-utilities';

// export type QueryFieldType =
//   | 'text'
//   | 'number'
//   | 'select'
//   | 'multi-select'
//   | 'boolean'
//   | 'range'
//   | 'date';

// export interface QueryFieldOption {
//   label: string;
//   value: string | number | boolean;
// }

// export interface QueryField {
//   key: string;
//   label: string;
//   type: SupportedDataType;
//   inputType?: 'input' | 'select' | 'checkbox' | 'radio';
//   options?: QueryFieldOption[];
//   placeholder?: string;
//   defaultValue?: any;
//   required?: boolean;
//   multi?: boolean;
// }

// export interface getOperatorsParams {
//   type: string;
//   isAutocomplete?: boolean;
// }

export type SupportedDataType =
  | 'string'
  | 'number'
  | 'date'
  | 'time'
  | 'boolean'
  | 'select'
  | 'object'
  | 'multiSelect'
  | 'arrayOfObjects';

export interface OperatorDefinition {
  label: string;
  value: string;
}
export interface OptionsDefinition {
  label: string;
  value: string;
}

export const operatorsMap = {
  string: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Contains', value: 'contains' },
    { label: 'Does Not Contain', value: 'not contains' },
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Ends With', value: 'endsWith' },
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
  select: [
    { label: 'Contains', value: 'contains' },
    { label: 'Does Not Contain', value: 'not contains' },
  ],
  multiSelect: [
    { label: 'Contains', value: 'contains' },
    { label: 'Does Not Contain', value: 'not contains' },
  ],
  object: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    // or handled via nested fields
  ],
  arrayOfObjects: [
    { label: 'Some Match', value: 'some' },
    { label: 'Every Match', value: 'every' },
  ],
};


// export const RESTAURANT_FILTER_FIELDS: QueryField[] = [
//   {
//     key: 'city',
//     label: 'City',
//     type: 'select',
//     options: [
//       { label: 'Chennai', value: 'Chennai' },
//       { label: 'Hyderabad', value: 'Hyderabad' },
//     ],
//     placeholder: 'Select a city',
//   },
//   {
//     key: 'cuisine',
//     label: 'Cuisine',
//     type: 'select',
//     options: [
//       { label: 'North Indian', value: 'North Indian' },
//       { label: 'Mughlai', value: 'Mughlai' },
//       { label: 'Continental', value: 'Continental' },
//       { label: 'Italian', value: 'Italian' },
//     ],
//     multi: true,
//   },
//   {
//     key: 'rating',
//     label: 'Rating',
//     type: 'number', // can use slider or min/max number
//     placeholder: 'Rating from X to Y',
//   },
//   {
//     key: 'priceRange',
//     label: 'Price Range',
//     type: 'number',
//     placeholder: 'Min / Max price',
//   },
//   {
//     key: 'features.outdoorSeating',
//     label: 'Outdoor Seating',
//     type: 'boolean',
//   },
//   {
//     key: 'features.familyFriendly',
//     label: 'Family Friendly',
//     type: 'boolean',
//   },
//   {
//     key: 'tags',
//     label: 'Tags',
//     type: 'select',
//     options: [
//       { label: 'quiet', value: 'quiet' },
//       { label: 'coffee', value: 'coffee' },
//       { label: 'dessert', value: 'dessert' },
//       { label: 'premium', value: 'premium' },
//       { label: 'fine-dine', value: 'fine-dine' },
//     ],
//   },
//   {
//     key: 'menuKeyword',
//     label: 'Menu Keyword',
//     type: 'string',
//     placeholder: 'Search in menu items',
//   },
//   {
//     key: 'availableTables',
//     label: 'Available Tables',
//     type: 'boolean',
//   },
//   {
//     key: 'createdAt',
//     label: 'Created At',
//     type: 'date',
//   },
// ];
