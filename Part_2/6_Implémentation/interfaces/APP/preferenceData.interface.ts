/**
 * Structure enrichie d'une préférence avec données complètes
 */
export interface PreferenceData {
    hopital: number;
    service: number;
    ordre: number;
    hospitalName?: string;
    serviceName?: string;
}
