import { SupportedDataType } from "../../common/common-utilities";

export interface SelectOption {
  value: any;
  label: string;
}

export interface FilterDefinition {
  field: string;
  label: string;
  isVisibleInRow: boolean;
  type:{
    dataType: SupportedDataType;
    options?: SelectOption[];
  }
}
