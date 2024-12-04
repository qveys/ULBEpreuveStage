import {useState} from "react";
import {ArrowUpDown, Search} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/Table";
import {Input} from "@/components/ui/Input";
import {Hospital} from "@/interfaces/Hospital";
import {useApiResource} from '@/hooks/useApiResource';
import {useSort} from "@/hooks/useSort";
import {useTableData} from "@/hooks/useTableData";

/**
 * TableHospitals component fetches, displays, and allows sorting of hospital data.
 *
 * It uses various custom hooks for managing API resources, sorting, and table data.
 *
 * Hooks Used:
 * - useApiResource: Fetches hospital data from a specified API endpoint.
 * - useSort: Provides sorting functionality on hospital names.
 * - useTableData: Filters and sorts hospital data based on provided configurations.
 *
 * The component enables users to search for hospitals via an input field and sort them by name.
 * Displays the number of hospitals found after filtering and sorting.
 * 
 * Returns a React component rendering the hospital table, handling loading and error states.
 */
const TableHospitals = () => {

  const { data: hospitals, isLoading, error } = useApiResource<Hospital>('hopitals');
  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  const { sortConfig, handleSort } = useSort<Hospital>('nomcourt');
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredAndSortedHospitals = useTableData(hospitals, sortConfig, searchTerm, 'nomcourt');
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
          placeholder="Rechercher un hôpital..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("nomcourt")}
              >
                <div className="flex items-center gap-2">
                  Nom de l'hôpital
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedHospitals.map((hospital) => (
              <TableRow key={hospital.id}>
                <TableCell>{hospital.nomcourt}</TableCell>
                <TableCell>
                  <button
                    className="text-[#00213F] hover:underline"
                    onClick={() => console.log("Voir détails:", hospital.id)}
                  >
                    Voir détails
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-gray-500">
        {filteredAndSortedHospitals.length} hôpitaux trouvés
      </div>
    </div>
  );
};

export default TableHospitals;
