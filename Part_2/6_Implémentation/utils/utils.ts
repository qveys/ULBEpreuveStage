/**
 * Construit une URL complète à partir d'un endpoint
 * Gère proprement la concaténation des parties de l'URL
 */
export const buildUrl = (baseUrl: string, endpoint: string): string => {
    // Retire les slashes au début de endpoint et à la fin de baseUrl
    const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${cleanBaseUrl}/${cleanEndpoint}`;
};
