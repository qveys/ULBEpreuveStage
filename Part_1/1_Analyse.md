# Analyse approfondie de l'API 

### 1.1 Relations entre entités
- Un étudiant (identifié par matricule) dans le Classement peut avoir plusieurs Preferences
- Une Place est définie par une combinaison unique Hopital-Service
- Un Resultat représente l'attribution finale d'une Place à un étudiant

### 1.2 Endpoints de consultation

##### GET /classements
- Pagination supportée (paramètre page)
- Format réponse: Collection Hydra
- Usage: Obtenir le classement des étudiants pour prioriser les attributions

##### GET /hopitals
- Liste statique des hôpitaux participants
- Données de référence rarement modifiées
- Clé primaire implicite pour jointures

###"# GET /services
- Catalogue des services disponibles
- Données de référence
- Utilisé pour les jointures avec places et préférences

##### GET /places
- Données dynamiques critiques
- Représente la capacité d'accueil
- Point potentiel de contention lors des attributions

##### GET /preferences
- Données d'entrée pour l'algorithme d'attribution
- Contient à la fois les souhaits et les exclusions
- Crucial pour la satisfaction des contraintes

###  1.3 Endpoints de gestion des résultats

##### POST /resultats
- Point d'entrée principal pour l'attribution
- Validation implicite des contraintes
- Pas de bulk update mentionné

##### DELETE /resultats/{id}
- Permet la correction d'erreurs
- Gestion individuelle uniquement
- Pas de suppression en masse
