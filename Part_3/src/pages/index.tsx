import React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen font-meta">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-[#003361]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Gestion des Stages
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Plateforme centralisée pour l'attribution des stages au sein de
            l'ULB
          </p>
          <Button className="text-[#003361] hover:bg-gray-300 bg-white">
            Accéder à la plateforme
          </Button>
        </div>
      </section>

      {/* Sections principales */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#004C93] border-2">
              <CardHeader>
                <CardTitle className="text-[#004C93]">
                  Pour les étudiants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-white">
                  <li>Exprimez vos préférences de stages</li>
                  <li>Consultez les places disponibles</li>
                  <li>Suivez l'attribution de votre stage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#004C93] border-2">
              <CardHeader>
                <CardTitle className="text-[#004C93]">
                  Pour l'administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700 dark:text-white">
                  <li>Gérez les places disponibles</li>
                  <li>Supervisez les attributions</li>
                  <li>Suivez les préférences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
