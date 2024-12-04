import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";
import {useStats} from "@/hooks/useStats";
import {useTheme} from "next-themes";

/**
 * Renders a statistics chart showing distribution of various categories such as Rankings, 
 * Hospitals, Departments, and Places using a bar chart representation.
 * 
 * Utilizes the Recharts library for the chart components and displays information within a card UI.
 * Responsive design is handled by the ResponsiveContainer component from Recharts.
 * 
 * Data is fetched using a custom hook `useStats`, and chart rendering adapts to the theme 
 * using the `useTheme` hook from "next-themes".
 * 
 * In loading state, a message 'Loading...' is displayed instead of the chart.
 */
export function StatsChart() {
  const theme = useTheme();
  const stats = useStats();
  const { data, isLoading } = stats || { data: null, isLoading: true };

  const chartData = [
    { name: "Rankings", value: data?.rankings || 0 },
    { name: "Hospitals", value: data?.hospitals || 0 },
    { name: "Departments", value: data?.departments || 0 },
    { name: "Places", value: data?.places || 0 },
  ];

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Distribution Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full flex items-center justify-center">
            Loading...
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor:
                    theme.resolvedTheme === "dark" ? "#1A202C" : "#fff",
                }}
              />
              <Bar
                dataKey="value"
                fill={theme.resolvedTheme === "dark" ? "#8884d8" : "#82ca9d"}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
