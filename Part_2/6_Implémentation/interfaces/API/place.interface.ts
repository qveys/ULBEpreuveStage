/**
 * Représente les places disponibles pour un stage
 */
export interface Place {
    /** Identifiant de l'hôpital */
    hopital: number;
    /** Identifiant du service */
    service: number;
    /** Nombre de places disponibles */
    places: number;
}