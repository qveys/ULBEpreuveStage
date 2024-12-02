## Partie 2 : Attribution automatique de stages 

### Endpoints disponibles
* Les préférences et exclusions des étudiants (Classement)
  * typepref
    * 1 = Préférence 
    * 2 = Exclusion
* Le classement des étudiants (Classement)
* Liste des hôpitaux (Hopital)
* Liste des services (Service)
* Liste des places disponibles (Place)
* Resultat

### Consigne
Dans le langage informatique de votre choix (ou en pseudo-code en alternative), écrivez un programme pour attribuer des lieux de stages à chaque étudiant. L’usage d’un framework ou de librairies tierces est bien entendu autorisé.
Chaque étudiant doit se voir attribuer un stage et est identifié par un matricule unique.
Les préférences des étudiants doivent être respectées en priorité, en tenant compte du classement (champ rang dans Classment) et des places disponibles (champ places basé sur la combinaison des identifiants hopital et service dans Place).
La liste des hôpitaux et la liste des services sont à votre disposition mais elles ne sont pas indispensables pour la réalisation de cette partie d’exercice.
        
###### BONUS
Les exclusions doivent être évitées en fonction du classement, mais peuvent être attribuées s'il n'y a pas d'autres possibilités. 
Le résultat peut être soumis à l'API via l'endpoint adéquat.

##### Compétences évaluées
- Algorithmes d'appariement et d'optimisation. 
- Maîtrise d'un langage de programmation. 
- Capacité à interagir avec une API. 
- Qualité du code.
