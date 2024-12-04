import {FilterField as FilterFieldEnum} from '@/enums/FilterField';

export interface FilterField {
  key: string;
  label: string;
  type?: FilterFieldEnum;
  options?: string[];
  defaultValue?: string;
}