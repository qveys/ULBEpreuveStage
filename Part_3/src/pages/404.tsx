import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

/**
 * Composant de la page d'erreur 404
 * Affiche un message d'erreur avec des options de navigation
 * Utilise le design system de l'ULB avec les couleurs officielles
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-2xl px-8 py-12 text-center">
        <h1 className="text-6xl font-bold text-[#003e84]">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Page non trouvée
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#003361] text-white rounded-md hover:bg-[#003d75] dark:hover:bg-gray-500 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-4 py-2 border border-[#003361] text-[#003361] hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-[#003361] rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Page précédente
          </button>
        </div>
      </div>

      <div className="mt-auto pb-8"></div>
    </div>
  );
}
