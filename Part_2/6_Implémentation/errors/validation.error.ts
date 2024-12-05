import {ApiError} from "./api.error";

/**
 * src/errors/validation.error.ts
 * Erreur spécifique pour les problèmes de validation
 */
export interface ValidationErrorDetail {
    field: string;
    message: string;
}

export class ValidationError extends ApiError {
    constructor(
        message: string,
        public readonly violations: ValidationErrorDetail[]
    ) {
        super(422, message, 'VALIDATION_ERROR');
        this.name = 'ValidationError';
    }

    /**
     * Récupère les erreurs pour un champ spécifique
     */
    getFieldErrors(fieldName: string): string[] {
        return this.violations
            .filter(v => v.field === fieldName)
            .map(v => v.message);
    }
}
