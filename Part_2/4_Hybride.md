# Une approche hybride !?

1. Utiliser Gale-Shapley pour générer une solution initiale stable. 
2. Utiliser l'algorithme génétique pour optimiser cette solution en respectant :
    * Les préférences/exclusions
    * Le classement des étudiants
    * Les places disponibles
    * D'autres critères potentiels

Les chromosomes de l'algo génétique représenteraient les affectations, avec :
  * Gènes = couples (étudiant, stage)
  * Fitness = score basé sur le respect des contraintes et préférences
  * Mutations = échanges d'affectations entre étudiants
  * Croisements = combinaisons de solutions partielles

## OK,c'est bien beau mais...
C'est se lancer dans une implémentation __complexe__ !!
_Divers questions se posent quant à la pertinence d'un tel développement dans le cas de cette épréuve_
  * Avons-nous toutes les contraintes du problème ?
  * Pourrai-il exister d'autres critères à optimiser ?
  * Quelle est la taille maximale des données (nombre d'étudiants/stages) ?
  * Quel est le temps de calcul acceptable ?
  * La stabilité est-elle vraiment une contrainte forte ?