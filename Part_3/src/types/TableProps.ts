export type TableProps<T extends Record<string, any>> = {
  headers: { [key: string]: string };
  data: HydraCollection<T>;
  rowCount: number;
  isLoading: boolean;
  className?: { [key: string]: string };
  onPaginationChange?: (
    isNextPage: boolean,
    navigation: { previousPage: string; nextPage: string },
    setTableData: React.Dispatch<React.SetStateAction<HydraCollection<T>>>,
  ) => Promise<HydraCollection<T>>;
};
