import {DataItem} from "@/interfaces/DataItem";
import {DataTabContent} from "./DataTabContent";

/**
 * DataTabWrapper component
 *
 * This generic component is designed to wrap and render a list of data items.
 * It uses the `HydraCollection` type to handle collections of data.
 *
 * @template T - Type of items in the hydra collection.
 * @param {Object} props - The component properties.
 * @param {HydraCollection<T>} props.data - The collection of data items.
 * @param {(arg0: DataItem) => any} props.renderContent - Render function that defines how each data item should be displayed.
 *
 * @returns {JSX.Element} - A JSX element.
 */
export function DataTabWrapper<T>(props: { data: HydraCollection<T>, renderContent: (arg0: DataItem) => any; }) {
  return (
    <div className="space-y-4">
      {props.data["hydra:member"]?.map((item: T, index: number) => (
        <DataTabContent key={index} content={props.renderContent(item as DataItem)} />
      ))}
    </div>
  )
}