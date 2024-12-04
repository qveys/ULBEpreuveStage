import React, {useState} from "react";
import {Classement} from "@/interfaces/Classement";
import {useApiResource} from "@/hooks/useApiResource";
import {Loading} from "@/components/common/Loading";
import {Error} from "@/components/common/Error";
import {CardClassement} from "@/components/cards/CardClassement";

export default function ClassementPage() {
  const [loading, setLoading] = useState(false);
  const { data, isLoading, error, totalItems, fetch } = useApiResource<Classement>("classements", setLoading);

  if (isLoading) return <Loading />;
  if (error) return <Error {...error} />;

  async function onPaginationChange(isNextPage: boolean, navigation: { previousPage: string; nextPage: string }): Promise<HydraCollection<Classement>> {
    try {
      const path = isNextPage ? navigation.nextPage : navigation.previousPage;
      if (!path) return {} as HydraCollection<Classement>;
      const data = await fetch(path);
      return data;
    } catch (e) {
      console.error("Error fetching next page:", e);
      return Promise.reject(e);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CardClassement
        headers={{
          matricule: "Matricule",
          anacad: "Année académique",
          rang: "Rang",
        }}
        data={data}
        totalItems={totalItems}
        loading={loading}
        onPaginationChange={onPaginationChange}
      />
    </div>
  );
}