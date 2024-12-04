import {Place} from "@/interfaces/Place";
import {TablePlace} from "../tables/TablePlace";
import {TableProps} from '@/types/TableProps'
import {Card, CardContent, CardHeader, CardTitle} from "../ui/Card";

/**
 * Interface representing the properties of the CardPlace component.
 * 
 * @interface CardPlaceProps
 * @property {Object.<string, string>} headers - A key-value pair representing the headers.
 * @property {HydraCollection<Place>} data - Data for a collection of places.
 * @property {number} totalItems - Total number of items available.
 * @property {boolean} loading - Loading state of the component.
 * @property {TableProps<Place>["onPaginationChange"]} onPaginationChange - Function to handle pagination changes.
 */
interface CardPlaceProps {
  headers: {
    [key: string]: string
  };
  data: HydraCollection<Place>;
  totalItems: number;
  loading: boolean;
  onPaginationChange: TableProps<Place>["onPaginationChange"];
}

/**
 * CardPlace Component
 *
 * This function component renders a card view for displaying a collection of places.
 *
 * @function CardPlace
 * @param {CardPlaceProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered card component with a table of places.
 */
export function CardPlace ({ headers, data, totalItems, loading, onPaginationChange }: CardPlaceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Places disponibles</CardTitle>
      </CardHeader>

      <CardContent className="pt-6">
        <TablePlace
          headers={headers}
          data={data}
          rowCount={totalItems}
          isLoading={loading}
          onPaginationChange={onPaginationChange}
        />
      </CardContent>
    </Card>
  );
}