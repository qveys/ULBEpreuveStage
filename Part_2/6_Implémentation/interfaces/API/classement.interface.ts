   /**
 * Représente un étudiant avec son classement
 */
export interface Classement {
    /** Identifiant unique de l'étudiant */
    matricule: string;
    /** Année académique */
    anacad: string;
    /** Position dans le classement (meilleur = plus petit) */
    rang: number;
}
