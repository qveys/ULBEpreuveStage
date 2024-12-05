/**
 * src/services/resultat.service.ts
 */
import ApiService from './api.service';
import {Resultat} from '../interfaces/API/resultat.interface';

export class ResultatService extends ApiService {
    protected readonly endpoint = 'resultats';

    /**
     * Récupère tous les résultats existants
     */
    async getAll(): Promise<Resultat[]> {
        return this.getCollection<Resultat>(this.endpoint);
    }

    /**
     * Soumet un nouveau résultat
     */
    async submit(resultat: Omit<Resultat, 'id'>): Promise<Resultat> {
        return this.post<Resultat>(this.endpoint, resultat);
    }

    /**
     * Soumet plusieurs résultats en batch
     */
    async submitBatch(resultats: Omit<Resultat, 'id'>[]): Promise<void> {
        // Utilise Promise.all pour soumettre en parallèle
        // mais limite le nombre de requêtes simultanées à 5
        const batchSize = 5;
        for (let i = 0; i < resultats.length; i += batchSize) {
            const batch = resultats.slice(i, i + batchSize);
            await Promise.all(batch.map(r => this.submit(r)));
        }
    }

    /**
     * Supprime tous les résultats existants
     */
    async clearAll(): Promise<void> {
        const resultats = await this.getAll();
        // Limite également les suppressions parallèles
        const batchSize = 5;
        for (let i = 0; i < resultats.length; i += batchSize) {
            const batch = resultats.slice(i, i + batchSize);
            await Promise.all(batch.map(r => this.delete(`${this.endpoint}/${r.matricule}`)));
        }
    }
}
