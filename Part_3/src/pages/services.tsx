import React from "react";
import {DataTab} from "@/components/tabs/DataTab";
import {Service} from "@/interfaces/Service";
import {DataItem} from "@/interfaces/DataItem";

export default function ServicesPage() { 
  return (
    <DataTab
      title={"Services dans les hopitaux"}
      endpoint={"services"}
      renderContent={(department: DataItem) => {
        const service = department as Service;
        return {
          leftTitle: service.id.toString(),
          leftContent: '',
          rightTitle: "Service:",
          rightContent: service.nom || 'Service not specified'
        };
      }}
    />
  );
}
