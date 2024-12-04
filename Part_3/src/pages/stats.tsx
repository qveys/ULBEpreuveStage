import React from "react";
import {StatsChart} from "@/components/stats/StatsCharts";
import {StatsDashboard} from "@/components/stats/StatsDashboard";
import StatsGraphiques from "@/components/stats/StatsGraphiques";

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">ULB Health Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Health Center Statistics Dashboard
        </p>
      </section>

      <section>
        <StatsDashboard />
      </section>

      <section className="mt-8">
        <StatsChart />
      </section>

      <StatsGraphiques />
    </div>
  );
}
