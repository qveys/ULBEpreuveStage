/**
 * Types d'erreurs possibles de l'API
 */
export class ApiError extends Error {
    constructor(
        public status: number,
        message: string
        , validationerror: string) {
        super(message);
        this.name = 'ApiError';
    }

    /**
     * Vérifie si l'erreur est une erreur de validation
     */
    isValidationError(): boolean {
        return this.status === 422;
    }

    /**
     * Vérifie si l'erreur est due à une authentification invalide
     */
    isAuthError(): boolean {
        return this.status === 401 || this.status === 403;
    }

    /**
     * Vérifie si l'erreur est due à une ressource non trouvée
     */
    isNotFoundError(): boolean {
        return this.status === 404;
    }
}
