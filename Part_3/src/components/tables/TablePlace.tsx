import {Place} from "@/interfaces/Place";
import {Table} from "./Table";
import {TableProps} from "@/types/TableProps";

/**
 * TablePlace is a React functional component that renders a table.
 *
 * Props:
 * - headers: An array of strings representing the table headers.
 * - data: An array of Place objects containing the data to be displayed in the table.
 * - rowCount: The total number of rows in the data set.
 * - isLoading: A boolean indicating whether the table data is currently being loaded.
 * - className: An optional string for additional CSS classes to style the table.
 * - onPaginationChange: A function that handles pagination changes.
 *
 * The component utilizes a generic Table component to display the data,
 * passing down all relevant props necessary for rendering.
 */
export function TablePlace({
  headers,
  data,
  rowCount,
  isLoading,
  className,
  onPaginationChange,
}: TableProps<Place>) {
  return (
    <Table
      headers={headers}
      data={data}
      isLoading={isLoading}
      className={className}
      onPaginationChange={onPaginationChange}
      rowCount={rowCount}
    />
  );
}
