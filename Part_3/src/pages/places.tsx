import React, {useState} from "react";
import {Place} from "@/interfaces/Place";
import {useApiResource} from "@/hooks/useApiResource";
import {Loading} from "@/components/common/Loading";
import {Error} from "@/components/common/Error";
import {CardPlace} from "@/components/cards/CardPlace";

export default function PlacePage() {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, error, totalItems, fetch } = useApiResource<Place>("places", setLoading);

  if (isLoading) return <Loading />;
  if (error) return <Error {...error} />;

  async function onPaginationChange(isNextPage: boolean, navigation: { previousPage: string; nextPage: string }): Promise<HydraCollection<Place>> {
    try {
      const path = isNextPage ? navigation.nextPage : navigation.previousPage;
      if (!path) return {} as HydraCollection<Place>;
      const data = await fetch(path);
      return data;
    } catch (e) {
      console.error("Error fetching next page:", e);
      return Promise.reject(e);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CardPlace
        headers={{
          hopital: "Hopital",
          service: "Service",
          places: "Nombre de places disponibles",
        }}
        data={data}
        totalItems={totalItems}
        loading={loading}
        onPaginationChange={onPaginationChange}
      />
    </div>
  );
}