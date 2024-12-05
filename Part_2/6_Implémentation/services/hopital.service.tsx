/**
 * src/services/hopital.service.ts
 */
import ApiService from './api.service';
import {Hopital} from '../interfaces/API/hopital.interface';

export class HopitalService extends ApiService {
    protected readonly endpoint = 'hopitals';

    async getAll(): Promise<Hopital[]> {
        return this.getCollection<Hopital>(this.endpoint);
    }

    async getById(id: number): Promise<Hopital> {
        return this.get<Hopital>(`${this.endpoint}/${id}`);
    }
}
