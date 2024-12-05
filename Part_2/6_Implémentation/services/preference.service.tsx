/**
 * src/services/preference.service.ts
 */
import ApiService from './api.service';
import {Preference} from '../interfaces/API/preference.interface';

export class PreferenceService extends ApiService {
    protected readonly endpoint = 'preferences';

    async getAll(): Promise<Preference[]> {
        return this.getCollection<Preference>(this.endpoint);
    }

    /**
     * Récupère toutes les préférences d'un étudiant
     */
    async getForStudent(matricule: string): Promise<{
        preferences: Preference[],
        exclusions: Preference[]
    }> {
        const allPrefs = await this.getAll();
        const studentPrefs = allPrefs.filter(p => p.matricule === matricule);

        return {
            preferences: studentPrefs.filter(p => p.typepref === 1)
                .sort((a, b) => a.ordre - b.ordre),
            exclusions: studentPrefs.filter(p => p.typepref === 2)
        };
    }
}
