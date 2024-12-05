/**
 * Représente une préférence ou exclusion d'un étudiant
 */
export interface Preference {
    /** Année académique */
    anacad: string;
    /** Identifiant de l'étudiant */
    matricule: string;
    /** Identifiant de l'hôpital */
    hopital: number;
    /** Identifiant du service */
    service: number;
    /** Ordre de préférence */
    ordre: number;
    /** Type de préférence (1 = préférence, 2 = exclusion) */
    typepref: 1 | 2;
}