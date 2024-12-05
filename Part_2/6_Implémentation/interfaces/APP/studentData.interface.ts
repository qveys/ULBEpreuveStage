import {PreferenceData} from "./PreferenceData.interface";

/**
 * Structure enrichie d'un étudiant avec toutes ses données
 */
export interface StudentData {
    matricule: string;
    rank: number;
    preferences: PreferenceData[];
    exclusions: PreferenceData[];
}