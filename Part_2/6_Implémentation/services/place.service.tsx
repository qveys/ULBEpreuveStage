/**
 * src/services/place.service.ts
 */
import ApiService from './api.service';
import {Place} from '../interfaces/API/place.interface';

export class PlaceService extends ApiService {
    protected readonly endpoint = 'places';

    async getAll(): Promise<Place[]> {
        return this.getCollection<Place>(this.endpoint);
    }

    /**
     * Récupère les places disponibles pour un hôpital et service donnés
     */
    async getPlacesForStage(hopitalId: number, serviceId: number): Promise<Place | null> {
        const places = await this.getAll();
        return places.find(p => p.hopital === hopitalId && p.service === serviceId) || null;
    }
}

