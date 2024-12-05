/**
 * src/services/base/api.service.ts
 * Service de base pour les appels API avec gestion des erreurs et typage
 */
import {env} from '../constants/env.constant'
import {buildUrl} from '../utils/utils';
import {ApiCollection} from '../interfaces';
import {ApiError} from '../errors/api.error';
import {ErrorHandler} from '../errors/handler.error';

/**
 * Options pour les requêtes API
 */
interface RequestOptions {
    headers?: HeadersInit;
}

/**
 * Service de base pour toutes les interactions avec l'API
 */
export abstract class BaseApiService {
    /**
     * Headers par défaut pour toutes les requêtes
     */
    private get defaultHeaders(): HeadersInit {
        return {
            'Authorization': env.API.TOKEN,
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        };
    }

    /**
     * Effectue un appel GET
     */
    protected async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        const url = buildUrl(env.API.BASE_URL, endpoint);
        const response = await fetch(url, {
            method: 'GET',
            ...this.prepareRequest(options)
        });

        return this.handleResponse<T>(response);
    }

    /**
     * Effectue un appel GET pour une collection
     */
    protected async getCollection<T>(endpoint: string, options?: RequestOptions): Promise<T[]> {
        const result = await this.get<ApiCollection<T>>(endpoint, options);
        return result['hydra:member'];
    }

    /**
     * Effectue un appel POST
     */
    protected async post<T>(endpoint: string, data: unknown, options?: RequestOptions): Promise<T> {
        const url = buildUrl(env.API.BASE_URL, endpoint);
        const response = await fetch(url, {
            method: 'POST',
            ...this.prepareRequest(options),
            body: JSON.stringify(data)
        });

        return this.handleResponse<T>(response);
    }

    /**
     * Effectue un appel DELETE
     */
    protected async delete(endpoint: string, options?: RequestOptions): Promise<void> {
        const url = buildUrl(env.API.BASE_URL, endpoint);
        const response = await fetch(url, {
            method: 'DELETE',
            ...this.prepareRequest(options)
        });

        if (!response.ok) {
            await this.handleResponse(response);
        }
    }

    /**
     * Prépare la configuration complète pour une requête
     */
    private prepareRequest(options?: RequestOptions): RequestInit {
        return {
            headers: {
                ...this.defaultHeaders,
                ...options?.headers
            }
        };
    }

    /**
     * Gère les erreurs de l'API de manière uniforme
     */
    private async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            let details;
            try {
                details = await response.json();
            } catch {
                // Ignore l'erreur si le body n'est pas du JSON
            }

            throw new ApiError(response.status, `API Error: ${response.status} ${response.statusText}`, "VALIDATION_ERROR");
        }

        return response.json() as Promise<T>;
    }
}

/**
 * Type de base pour les services spécifiques
 * Assure que tous les services ont un endpoint de base
 */
export abstract class ApiService extends BaseApiService {
    protected abstract readonly endpoint: string;

 protected async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        await ErrorHandler.handleApiError(response);
    }
    return response.json() as Promise<T>;
}