import {DataContent} from "@/interfaces/DataContent";
import {DataTabSection} from "./DataTabSection";

/**
 * DataTabContent Component
 * 
 * This component is responsible for rendering a tab content section.
 * It uses the DataTabSection component to display sections of data.
 * 
 * Props:
 * - content: DataContent
 *   - An object that contains titles and contents for left and right sections.
 * 
 * Example Usage:
 * ```jsx
 * <DataTabContent content={someDataContent} />
 * ```
 */
export function DataTabContent(props: { content : DataContent }) {
  return (
    <div className="p-4 rounded-lg border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DataTabSection
          {...{
            title: props.content.leftTitle,
            content: props.content.leftContent,
          }}
        />    
        <DataTabSection
          {...{
            title: props.content.rightTitle,
            content: props.content.rightContent,
          }}
        />
      </div>
    </div>
  );
}