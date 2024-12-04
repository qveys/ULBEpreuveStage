import {DataContent} from "./DataContent";
import {DataItem} from "./DataItem";
import {FilterField} from "./FilterField";

export interface DataTab {
  title: string;
  endpoint: string;
  queryKey?: string;
  filterFields?: FilterField[];
  sortableFields?: { key: string; label: string }[];
  renderContent: (item: DataItem) => DataContent;
}
