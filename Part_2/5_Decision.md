# Décision 

Analyse de divers angles, étape par étape, afin de prendre la meilleure décision.
1. Nos objectifs principaux sont :
    * Maximiser la satisfaction des étudiants
    * Respecter les contraintes (places disponibles, exclusions)
    * Tenir compte du classement (priorité aux meilleurs rangs)
2. Nos contraintes projet :
    * Temps limité (deadline le 9/12)
    * Besoin d'une solution fiable et fonctionnelle
    * Code maintenable et compréhensible

__Réflexion sur la complexité__
Une solution hybride serait théoriquement "meilleure" mais :
Plus complexe à implémenter correctement 
= Plus de risques de bugs
= Plus difficile à tester/valider
= Pourrait prendre trop de temps à développer

## Approche progressive
1. Implémentation des bases, avec Gale-Shapley
2. Si le temps le permet :
    * Convergeance vers l'optimum
    * Ajout d'optimisations locales
    * Implémenter quelques améliorations ciblée

Dans tous les cas, impossible d'envisager un algorithme génétique complet dans ces conditions. Puis, le but recherché est atteint avec la phase 1 ; 
donc pas obligatoire d'en faire plus