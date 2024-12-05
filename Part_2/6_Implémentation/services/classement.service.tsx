/**
 * src/services/classement.service.ts
 */
import ApiService from './api.service';
import {Classement} from '../interfaces/API/classement.interface';

export class ClassementService extends ApiService {
    protected readonly endpoint = 'classements';

    async getAll(): Promise<Classement[]> {
        return this.getCollection<Classement>(this.endpoint);
    }

    async getById(id: string): Promise<Classement> {
        return this.get<Classement>(`${this.endpoint}/${id}`);
    }
}
