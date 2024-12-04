import {DataTab} from "@/components/tabs/DataTab";
import {DataItem} from "@/interfaces/DataItem";

export default function HopitauxPage() {
  return (
    <DataTab
      title={"Hopitaux disponibles"}
      endpoint={"hopitals"}
      renderContent={function (item: DataItem): {
        leftTitle: string;
        rightContent: string;
        rightTitle: string;
        leftContent: { label: string; value: string }[];
      } {
        return {
          rightTitle: "Nom Court",
          rightContent: item.nomcourt || "Hopital non identifié",
          leftTitle: '',
          leftContent: [{ label: "ID", value: item.id.toString() }],
        };
      }}
    />
  );
}
