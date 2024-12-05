import {validateEnvConfig} from '../validators/envConfigValidator';

/**
 * Configuration validée de l'environnement
 * Effectue la validation au démarrage de l'application
 */
export const env = {
    API: {
        BASE_URL: validateEnvConfig('API_BASE_URL'),
        TOKEN: validateEnvConfig('API_TOKEN')
    }
} as const;

