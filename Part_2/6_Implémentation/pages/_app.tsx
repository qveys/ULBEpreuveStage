// pages/_app.tsx ou équivalent
//import { validateEnv } from '../validators/envConfigvalidator";;

// Valider l'environnement au démarrage
try {
    //validateEnv();
} catch (error) {
    console.error('Erreur de configuration:', error.message);
    process.exit(1);
}