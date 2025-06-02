export interface FilterResult {
  field: string;
  operator: string;
  value: any;
}
export interface SelectOption {
  value: any;
  label: string;
}

export interface FilterDefinition {
  field: string;
  label: string;
  isVisibleInRow: boolean;
  fieldInformation?: string;
  type: {
    dataType: SupportedDataType;
    options?: SelectOption[];
    allowSearch?: boolean;
    onSearch?: (searchText: string, fieldKey: string) => void;
    isMultiple?: boolean;
  };
}

export type SupportedDataType =
  | 'string'
  | 'number'
  | 'date'
  | 'time'
  | 'boolean'
  | 'select';

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
    { label: 'Between', value: 'between' },
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
  date: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Before', value: '<' },
    { label: 'After', value: '>' },
    { label: 'Between', value: 'between' },
    { label: 'On or Before', value: '<=' },
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
    { label: 'In', value: 'in' },
    { label: 'Not In', value: 'not in' },
  ],
};
