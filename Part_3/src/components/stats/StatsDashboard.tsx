import {GraduationCap, Hospital, MapPin, School} from "lucide-react";
import {StatsCard} from "./StatsCard";
import {useStats} from "@/hooks/useStats";

/**
 * The `StatsDashboard` component fetches statistical data and displays it in a grid format.
 * Statistics include Total Rankings, Total Hospitals, Total Departments, and Total Places,
 * each represented by a `StatsCard` component with appropriate icons.
 * The data is retrieved via the `useStats` hook which handles data fetching and loading states.
 */
export function StatsDashboard() {
  const { data, isLoading } = useStats();

  const stats = [
    {
      title: "Total Rankings",
      value: data?.rankings,
      icon: <GraduationCap className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Total Hospitals",
      value: data?.hospitals,
      icon: <Hospital className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Total Departments",
      value: data?.departments,
      icon: <School className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Total Places",
      value: data?.places,
      icon: <MapPin className="h-4 w-4 text-muted-foreground" />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
