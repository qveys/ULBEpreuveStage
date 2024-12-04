import {Classement} from "@/interfaces/Classement";
import {TableClassement} from "../tables/TableClassement";
import {TableProps} from '@/types/TableProps'
import {Card, CardContent, CardHeader, CardTitle} from "../ui/Card";

/**
 * Interface defining the props for the CardClassement component.
 * 
 * @interface CardClassementProps
 * @property {Object.<string, string>} headers - Key-value pairs for table headers.
 * @property {HydraCollection<Classement>} data - Collection of Classement items.
 * @property {number} totalItems - Total number of items.
 * @property {boolean} loading - Loading state indicator.
 * @property {TableProps<Classement>["onPaginationChange"]} onPaginationChange - Pagination change handler.
 */
interface CardClassementProps {
  headers: {
    [key: string]: string
  };
  data: HydraCollection<Classement>;
  totalItems: number;
  loading: boolean;
  onPaginationChange: TableProps<Classement>["onPaginationChange"];
}
/**
 * Renders a card component displaying a classement table.
 *
 * @function CardClassement
 * @param {CardClassementProps} props - The properties to configure the component.
 * @returns {JSX.Element} The rendered CardClassement component.
 */
export function CardClassement ({ headers, data, totalItems, loading, onPaginationChange }: CardClassementProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Classement</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <TableClassement
          headers={headers}
          data={data}
          rowCount={totalItems}
          isLoading={loading}
          className={{ rang: "text-right" }}
          onPaginationChange={onPaginationChange}
        />
      </CardContent>
    </Card>
  );
}