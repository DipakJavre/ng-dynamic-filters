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
    dateFormat?: SupportedDateFormats;
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
    { label: 'Ends With', value: 'endsWith' }
  ],
  number: [
    { label: 'Equals', value: '=' },
    { label: 'Not Equals', value: '!=' },
    { label: 'Less Than', value: '<' },
    { label: 'Less Than or Equal', value: '<=' },
    { label: 'Greater Than', value: '>' },
    { label: 'Greater Than or Equal', value: '>=' },
    { label: 'Between', value: 'between' },
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


export type SupportedDateFormats =
  | 'YYYY-MM-DD'           // 2025-06-10
  | 'DD-MM-YYYY'           // 10-06-2025
  | 'MM-DD-YYYY'           // 06-10-2025
  | 'DD/MM/YYYY'           // 10/06/2025
  | 'MM/DD/YYYY'           // 06/10/2025
  | 'YYYY/MM/DD'           // 2025/06/10
  | 'D MMMM YYYY'          // 10 June 2025
  | 'MMMM D, YYYY'         // June 10, 2025
  | 'MMM D, YYYY'          // Jun 10, 2025
  | 'D-MMM-YYYY'           // 10-Jun-2025
  | 'Do MMMM YYYY'         // 10th June 2025
  | 'dddd, D MMMM YYYY'    // Tuesday, 10 June 2025
  | 'DD MMM YYYY'          // 10 Jun 2025
  | 'YYYY.MM.DD'           // 2025.06.10
  | 'DD.MM.YYYY';          // 10.06.2025


