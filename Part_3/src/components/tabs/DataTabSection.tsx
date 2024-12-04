interface DataTabSectionProps {
  title: string | { label: string; value: string }[];
  content: string | { label: string; value: string }[];
}
/**
 * Represents the properties for the DataTabSection component.
 * 
 * @interface DataTabSectionProps
 * @property {string | { label: string; value: string }[]} title - The title of the tab section, either a string or an array of label-value pairs.
 * @property {string | { label: string; value: string }[]} content - The content of the tab section, either a string or an array of label-value pairs.
 */
export function DataTabSection(props: DataTabSectionProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium">
        {typeof props.title === "string" 
          ? props.title 
          : props.title.map((item) => (
              <span key={item.label}>{item.label}: {item.value}</span>
            ))}
      </p>
      <p className="text-sm text-muted-foreground">
        {typeof props.content === "string" 
          ? props.content 
          : props.content.map((item) => (
              <span key={item.label}>{item.label}: {item.value}</span>
            ))}
      </p>
    </div>
  );
}