import {ResultatService} from '../services/resultat.service';
import {ValidationError} from '../errors/validation.error';

export async function Resultat() {
  // Exemple d'utilisation dans un composant
  try {
      const results = await ResultatService.submitBatch(assignments);
      // Traitez les résultats si nécessaire
  } catch (error) {
      await ErrorHandler.handleError(error);
      // Gestion spécifique si nécessaire
      if (error instanceof ValidationError) {
          // Afficher les erreurs de formulaire
          const fieldErrors = error.getFieldErrors('matricule');
          // Traitez les erreurs de champ si nécessaire
      }
  }
}