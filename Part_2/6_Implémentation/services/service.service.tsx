/**
 * src/services/service.service.ts
 */
import {ApiService} from './api.service';
import {Service} from '../interfaces/API/service.interface';

export class ServiceService extends ApiService {
    protected readonly endpoint = 'services';

    async getAll(): Promise<Service[]> {
        return this.getCollection<Service>(this.endpoint);
    }

    async getById(id: number): Promise<Service> {
        return this.get<Service>(`${this.endpoint}/${id}`);
    }
}
