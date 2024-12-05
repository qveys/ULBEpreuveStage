import {ApiError} from "./api.error";
import {ValidationError} from "./validation.error";

/**
 * src/errors/error-handler.ts
 * Gestionnaire centralisé des erreurs
 */
export class ErrorHandler {
    /**
     * Analyse une réponse d'erreur de l'API et crée l'erreur appropriée
     */
    static async handleApiError(response: Response): Promise<never> {
        let details;
        try {
            details = await response.json();
        } catch {
            throw new ApiError(response.status, `Erreur API: ${response.status} ${response.statusText}`, "VALIDATION_ERROR");
        }

        // Gestion spécifique des erreurs de validation
        if (response.status === 422 && details['violations']) {
            throw new ValidationError(
                'Erreur de validation des données',
                details['violations']
            );
        }

        // Gestion des erreurs d'authentification
        if (response.status === 401) {
            throw new ApiError(401, 'Token d\'authentification invalide ou expiré', "VALIDATION_ERROR");
        }

        // Gestion des erreurs de ressource non trouvée
        if (response.status === 404) {
            throw new ApiError(404, `La ressource demandée n'existe pas`, "VALIDATION_ERROR");
        }

        // Autres erreurs
        throw new ApiError(response.status, details.message || 'Une erreur inattendue est survenue', "VALIDATION_ERROR");
    }

    /**
     * Gère gracieusement une erreur et retourne un message utilisateur approprié
     */
    static getUserMessage(error: unknown): string {
        if (error instanceof ValidationError) {
            return `Erreur de validation: ${error.violations.map(v => v.message).join(', ')}`;
        }

        if (error instanceof ApiError) {
            switch (error.status) {
                case 401:
                    return 'Session expirée, veuillez vous reconnecter';
                case 403:
                    return 'Vous n\'avez pas les droits nécessaires pour cette action';
                case 404:
                    return 'La ressource demandée n\'existe pas ou a été déplacée';
                case 429:
                    return 'Trop de requêtes, veuillez réessayer dans un moment';
                default:
                    return error.message;
            }
        }

        if (error instanceof Error) {
            return error.message;
        }

        return 'Une erreur inattendue est survenue';
    }

    /**
     * Gère les erreurs de manière appropriée selon le contexte
     */
    static async handleError(error: unknown): Promise<void> {
        // Log l'erreur pour debug
        console.error('Erreur détectée:', error);

        // Si c'est une erreur d'authentification, redirige vers la page de login
        if (error instanceof ApiError && error.isAuthError()) {
            // Redirection ou refresh du token selon le cas
            return;
        }

        // Affiche un message approprié à l'utilisateur
        const message = this.getUserMessage(error);

        // Ici vous pouvez intégrer votre système de notification préféré
        // toast.error(message);
    }
}

/**
 * Mise à jour du BaseApiService pour utiliser le nouveau système
 */
export abstract class BaseApiService {
    // ... autres méthodes ...

    protected async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            await ErrorHandler.handleApiError(response);
        }
        return response.json() as Promise<T>;
    }
}