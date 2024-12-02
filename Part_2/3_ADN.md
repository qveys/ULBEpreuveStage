# Alternative grâce à l'algorithme ADN

C'est un algorithme qui a tendance à viser l'optimum des solutions envisageables. Il possède des avantages et des incovénients qui m'a poussé à effectuer cette petite comparaison des deux approches.

| **Algorithme de Gale\-Shapley \(mariage stable\)** | **Algorithme de Gale\-Shapley \(mariage stable\)** | **Algorithme génétique \(ADN\)**            | **Algorithme génétique \(ADN\)** |
|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------:|:---------------------------------:|
| __Avantages__                                      | __Inconvénients__                                  | __Avantages__                                | __Inconvénients__                 |
| Garantit une solution stable                       | Ne prend pas en compte les contraintes complexes   | Peut gérer plusieurs critères d'optimisation | Plus complexe à implémenter       |
| Relativement simple à implémenter                  | Optimise pour un seul critère \(la stabilité\)     | Explorer un grand espace de solutions        | Résultats non déterministes       |
| Bien adapté aux préférences ordonnées              | Ne prend pas en compte les contraintes complexes   | S'adapter à des contraintes complexes        | Temps de convergence variable     |
| Complexité en O\(n²\) qui reste raisonnable        |                                                    | Peut trouver des solutions quasi\-optimales  | Ne garantit pas la stabilité      |

