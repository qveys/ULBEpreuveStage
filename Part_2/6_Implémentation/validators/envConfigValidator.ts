import {env} from "../constants/env.constant";
import {EnvConfig} from "../interfaces/APP";

/**
 * Valide une variable d'environnement
 * @throws {Error} Si la variable n'est pas définie
 */
export const validateEnvConfig = (key: keyof EnvConfig): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(
            `Variable d'environnement manquante: ${key}\n` +
            `Assurez-vous d'avoir défini ${key} dans votre fichier .env.local`
        );
    }
    return value;
}

/***
 * Utilitaire pour vérifier que toutes les variables d'environnement sont présentes
 * À exécuter au démarrage de l'application
 */
export const validateEnv = (): void => {
    // La simple utilisation de env va déclencher les validations
    // grâce aux getters
    Object.keys(env.API).forEach(key => {
        // Vérifie aussi que les valeurs ne sont pas des chaînes vides
        const value = env.API[key as keyof typeof env.API];
        if (!value.trim()) {
            throw new Error(
                `Variable d'environnement invalide: ${key}\n` +
                'La valeur ne peut pas être une chaîne vide'
            );
        }
    });
};