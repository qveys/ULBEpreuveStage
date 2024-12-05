/**
 * Réponse de l'API pour les collections
 */
export interface ApiCollection<T> {
    'hydra:member': T[];
    'hydra:totalItems': number;

    [x: string]: number | T[];
}