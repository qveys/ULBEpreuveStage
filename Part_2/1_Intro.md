# Survol d'introduction

Le problème d'attribution des stages est essentiellement un problème d'appariement (matching) avec des préférences et des contraintes.

### Les données dont nous disposons
- Liste des étudiants avec leur rang de classement, leur priorité d'obtention d'un stage
- Préférences des étudiants (typepref = 1)
- Exclusions des étudiants (typepref = 2)
- Places disponibles par hôpital/service
- Le rang de l'étudiant qui détermine sa priorité

### Les contraintes
- Chaque étudiant doit avoir un stage
- Respecter les préférences selon le classement
- Éviter les exclusions si possible
- Respecter le nombre de places disponibles

### Les priorités
- Meilleur classement = plus de chances d'avoir ses préférences
- Les exclusions doivent être évitées si possible
- Optimiser la satisfaction globale