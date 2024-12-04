import { SortDirection } from "@/enums/SortDirection";

export type SortConfig<T> = {
  key: keyof T;
  direction: SortDirection;
}