import {Classement} from "@/interfaces/Classement";
import {Table} from "./Table";
import {TableProps} from "@/types/TableProps";

/**
 * TableClassement component.
 *
 * This component renders a table specifically designed to display classement information.
 * It utilizes the generic Table component and is parameterized with Classement data.
 *
 * Props:
 * - headers: An array of header objects used to render the table headers.
 * - data: An array of Classement objects to populate the table rows.
 * - rowCount: Number of rows in the table.
 * - isLoading: Boolean indicating if the table is in a loading state.
 * - className: Optional additional class names to apply to the table for styling.
 * - onPaginationChange: Callback for handling pagination changes.
 */

export function TableClassement({
  headers,
  data,
  rowCount,
  isLoading,
  className,
  onPaginationChange,
}: TableProps<Classement>) {
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
