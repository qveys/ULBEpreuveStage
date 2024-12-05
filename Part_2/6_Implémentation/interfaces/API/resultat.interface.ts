/**
 * Représente une attribution finale de stage
 */
export interface Resultat {
    /** Identifiant de l'étudiant */
    matricule: string;
    /** Identifiant de l'hôpital assigné */
    hopital: number;
    /** Identifiant du service assigné */
    service: number;
}
