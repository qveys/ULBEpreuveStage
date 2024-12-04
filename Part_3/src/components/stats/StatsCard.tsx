import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";
import {Skeleton} from "@/components/ui/Skeleton";

interface StatsCardProps {
  title: string;
  value: number | undefined;
  icon: React.ReactNode;
}
/**
 * StatsCardProps defines the properties for the StatsCard component.
 *
 * @property {string} title - The title displayed on the StatsCard.
 * @property {number | undefined} value - The numeric value displayed on the StatsCard.
 * @property {React.ReactNode} icon - The icon to be displayed alongside the title.
 */
export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {value !== undefined ? (
          <div className="text-2xl font-bold">{value}</div>
        ) : (
          <Skeleton className="h-8 w-20" />
        )}
      </CardContent>
    </Card>
  );
}
