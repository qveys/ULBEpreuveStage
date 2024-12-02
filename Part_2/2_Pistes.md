# Recherches de pistes de solutions

La majorité des recherches m'ont amenés à converger en grande majorité vers le principe de résolution du problème des mariages stables. Cet algorithme, appelé aussi algorithme d'acceptation différée, ou encore algorithme de Gale-Shapley semble être le plus optimisé dans le cas de la répartition des stages.
1. Il prend en compte les préférences ordonnées (ce que nous avons via le champ 'ordre' dans les préférences)
2. Il peut gérer les contraintes de capacité multiple (les places disponibles par service/hôpital)
3. Il peut être modifié pour prendre en compte les exclusions
4. Il garantit une solution stable où aucun étudiant ne peut être plus satisfait sans désavantager un autre étudiant mieux classé

---

### Principes suivis par cet algorithme

1. Les étudiants sont triés selon leur classement (meilleur rang en premier)
2. Pour chaque étudiant :
    * On considère ses préférences dans l'ordre indiqué
    * On vérifie la disponibilité des places
    * On prend en compte les exclusions (avec une flexibilité basée sur le classement)
    * On attribue la meilleure place disponible possible
3. Gestion de cas de conflit en favorisant les meileurs classements
4. Si aucune préférence n'est satisfaisable, on attribue une place restante
Une validation est effectuée pour s'assurer que :
    * Chaque étudiant a une place
    * Les capacités des services ne sont pas dépassées

### Points forts
- Respect de la priorité donnée aux meilleurs classements
- Satisfaction au maximum des préférences
- Gestion des exclusions de manière flexible
- Attribution complète (si suffisamment de places sont disponibles)

### Vision d'implémentation
1. Récupérer les données via les endpoints de l'API
2. Transformer les données dans le format attendu
3. Mise en place et exécution de l'algorithme
4. Vérification de la stabilité des solutions
5. Soummission des résultats via l'endpoint "Resultat"