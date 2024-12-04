import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import {Table as TableParent, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow,} from "../ui/Table";
import {TablePagination} from "./TablePagination";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    PaginationState,
    useReactTable,
} from "@tanstack/react-table";
import {Skeleton} from "../ui/Skeleton";
import {TableProps} from "@/types/TableProps";

/**
 * Table component renders a customizable table based on provided data and headers.
 *
 * @template T - The type of the records in the table.
 * @param {TableProps<T>} props - The properties object for the Table component.
 * @property {T[]} props.data - The data displayed in the table.
 * @property {Record<string, string>} props.headers - A record mapping column keys to column headers.
 * @property {number} props.rowCount - Total number of rows for pagination purposes.
 * @property {Function} props.onPaginationChange - Callback function for handling pagination changes.
 * @property {boolean} props.isLoading - Indicates if the table data is still loading.
 * @property {Record<string, string>} [props.className] - Optional class name mapping for styling columns.
 */
export function Table<T extends Record<string, any>>(props: TableProps<T>) {
    const columns: ColumnDef<T>[] = Object.keys(props.headers).map((key) => ({
        accessorKey: key,
        header: props.headers[key],
    }));

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const [tableData, setTableData] = useState<HydraCollection<T>>(props.data);
    const stateRef = useRef<HydraCollection<T>>(props.data);

    useEffect(() => {
        stateRef.current = tableData;
    }, [tableData]);

    const updateTableData = (data: HydraCollection<T>) => {
        setTableData(prev => ({
            ...prev,
            ...data,
            "hydra:member": Array.from(new Set([...prev["hydra:member"], ...data["hydra:member"]]))
        }));
    };

    const table = useReactTable({
        data: tableData["hydra:member"],
        columns,
        state: { pagination },
        rowCount: props.rowCount,
        pageCount: Math.ceil(props.rowCount / pagination.pageSize),
        autoResetPageIndex: false,
        onPaginationChange: async (updater) => {
            if (typeof updater === "function") {
                const prev = table.getState().pagination;
                const next = updater(prev);

                if (prev.pageSize !== next.pageSize) {
                    setPagination(next);
                    return;
                }

                setPagination(next);

                if (
                    props.onPaginationChange &&
                    next.pageIndex !== prev.pageIndex &&
                    next.pageIndex %
                        (tableData["hydra:member"].length / next.pageSize) ===
                        0
                ) {
                    const data = await props.onPaginationChange(
                        prev.pageIndex < next.pageIndex,
                        {
                            previousPage:
                                tableData["hydra:view"]?.["hydra:previous"] ??
                                "",
                            nextPage:
                                tableData["hydra:view"]?.["hydra:next"] ?? "",
                        },
                        setTableData,
                    );
                    updateTableData(data);
                }
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <TableParent>
            <TableHeader>
                <TableRow
                    className={
                        "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50"
                    }
                >
                    <TableCell colSpan={Object.keys(props.headers).length}>
                        <TablePagination table={table} />
                    </TableCell>
                </TableRow>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead
                                key={header.id}
                                className={cn(
                                    props.className?.[header.column.id],
                                )}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {props.isLoading
                    ? [...Array(pagination.pageSize)].map((_, i) => (
                          <TableRow key={i}>
                              {table.getHeaderGroups().map((headerGroup) =>
                                  headerGroup.headers.map((header) => (
                                      <TableCell key={header.id}>
                                          <Skeleton className="h-4 w-100" />
                                      </TableCell>
                                  )),
                              )}
                          </TableRow>
                      ))
                    : table.getRowModel().rows.map((row) => (
                          <TableRow key={row.id}>
                              {row.getVisibleCells().map((cell) => (
                                  <TableCell
                                      key={cell.id}
                                      className={cn(
                                          props.className?.[cell.column.id],
                                      )}
                                  >
                                      {flexRender(
                                          cell.column.columnDef.cell,
                                          cell.getContext(),
                                      )}
                                  </TableCell>
                              ))}
                          </TableRow>
                      ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={Object.keys(props.headers).length}>
                        <TablePagination table={table} />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </TableParent>
    );
}
