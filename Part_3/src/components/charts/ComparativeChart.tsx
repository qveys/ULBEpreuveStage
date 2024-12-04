import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card";
import {Skeleton} from "@/components/ui/Skeleton";

/**
 * The `ComparativeChartProps` interface outlines the properties required
 * by the `ComparativeChart` component.
 * 
 * @property {string} title - The title displayed at the top of the chart.
 * @property {any[]} data - An array of data objects used to render the chart.
 * @property {string} xAxisKey - The key from the data objects used to access the x-axis value.
 * @property {boolean} [isLoading] - Optional boolean to indicate if the data is still loading.
 * @property {Array<{ dataKey: string; name: string; color: string; }>} bars - Array of bar objects.
 * Each bar contains:
 *    - `dataKey`: key in the data used to represent the bar's value.
 *    - `name`: label for the bar shown in the legend.
 *    - `color`: color code for the bar.
 */
interface ComparativeChartProps {
  title: string;
  data: any[];
  xAxisKey: string;
  isLoading?: boolean;
  bars: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
}

/**
 * The `CustomTooltip` component provides a custom tooltip for the `BarChart`.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Indicates if the tooltip is active.
 * @param {Array} props.payload - The array of data items that the tooltip relates to.
 * @param {string} props.label - The label or title of the tooltip.
 * @returns {JSX.Element | null} - The JSX for the rendered tooltip or null if inactive.
 *
 * This component ensures that if the tooltip is active and has valid payload data,
 * it renders a styled tooltip displaying each entry with its name and formatted value.
 */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border dark:bg-[#1A202C] bg-white p-2 shadow-sm">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/**
 * `ComparativeChart` is a React functional component that displays a comparative bar chart.
 * 
 * It utilizes the `recharts` library to render a responsive bar chart within a card layout, 
 * provided by the `Card` component. The chart dynamically represents data based on the props supplied.
 * 
 * @component
 * 
 * @param {ComparativeChartProps} props - The props needed to render the ComparativeChart component.
 * @param {string} props.title - Title displayed at the top of the chart.
 * @param {any[]} props.data - An array containing the data objects for chart rendering.
 * @param {string} props.xAxisKey - Key for accessing x-axis values from data objects.
 * @param {boolean} [props.isLoading=false] - Flag indicating if data is loading; triggers a skeleton view if true.
 * @param {Array<{ dataKey: string; name: string; color: string; }>} props.bars - Array of bar configuration objects, each with `dataKey`, `name`, and `color`.
 * 
 * @returns {JSX.Element} Returns a JSX element rendering a bar chart or placeholder skeleton when loading.
 */
export function ComparativeChart({ title, data, xAxisKey, isLoading = false, bars }: ComparativeChartProps) {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle><Skeleton className="h-6 w-[250px]" /></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <Skeleton className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={8}
              barSize={32}
            >
              <XAxis
                dataKey={xAxisKey}
                tick={{ fill: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
              />
              <YAxis
                tick={{ fill: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{
                  paddingTop: '20px'
                }}
              />
              {bars.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  name={bar.name}
                  fill={bar.color}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
