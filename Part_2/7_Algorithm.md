# Explication du fonctionnement de l'algorithme

## **Qu'est-ce que c'est et à quoi ça sert ?**

Cet algorithme sert à **attribuer automatiquement des stages à des étudiants** en fonction de leurs préférences, des capacités disponibles des stages, et d'un critère de classement des étudiants. Il repose sur un principe d'équité et d'optimisation, tout en évitant des situations où un étudiant ou un stage pourrait vouloir "changer d'accord" parce qu'une meilleure solution existe pour eux (ce qu'on appelle une *paire bloquante*).  

Son but est donc d'attribuer les stages de manière stable et équitable.

---

## **Comment ça fonctionne ?**

### **1. Données d'entrée**
Pour que l'algorithme fonctionne, il a besoin de deux types de données :
- **Les étudiants**, avec :
  - Leur matricule (identifiant unique),
  - Leur rang (qui détermine leur priorité : un rang plus faible est meilleur),
  - Leur liste de préférences (les stages qu'ils veulent, dans un ordre précis).
- **Les stages**, avec :
  - Un identifiant de l'hôpital et du service,
  - Une capacité maximale (nombre de places disponibles),
  - Une liste des étudiants qui leur sont assignés.

---

### **2. Fonctionnement de l'algorithme**

L'algorithme suit les étapes suivantes : 

#### **Initialisation :**
1. Les stages sont créés à partir des données (capacités et services).
2. Les étudiants sont triés selon leur **rang** (le meilleur rang en premier).
3. Tous les étudiants sont placés dans une liste de non-assignés.

#### **Traitement principal :**
L'algorithme fonctionne en **itérations**. À chaque itération :  
1. On prend un étudiant non assigné (le premier de la liste triée).  
2. L'étudiant analyse ses **préférences** (par exemple, "Je veux le stage A avant le stage B").  
3. Pour chaque préférence, l'algorithme vérifie :
   - Si le stage a des **places disponibles**, alors l'étudiant est assigné à ce stage.
   - Si le stage est **plein**, mais préfère cet étudiant (selon son rang) à un étudiant déjà assigné, alors :
     - L'étudiant le moins bien classé dans ce stage est retiré.
     - Le nouvel étudiant est assigné à sa place.
4. Si aucun stage préféré n'est disponible, l'étudiant reste temporairement sans assignation et sera réévalué plus tard.

#### **Fin de l'algorithme :**
- L'algorithme s'arrête lorsque tous les étudiants sont soit assignés, soit sans possibilité d'assignation (aucun stage préféré ne peut les accueillir).

---

### **3. Résultat final**
À la fin, l'algorithme fournit une liste des **assignations finales** :  
- Pour chaque étudiant assigné, on obtient :
  - Son matricule,
  - L'hôpital et le service du stage auquel il a été attribué.

---

## **Les principes clés sur lesquels l'algorithme est basé**

1. **Équité** : Les étudiants ayant un meilleur rang sont prioritaires pour leurs préférences.  
2. **Stabilité** : Le résultat final est conçu pour éviter toute "paire bloquante", c'est-à-dire des situations où un étudiant et un stage non attribués l'un à l'autre préféreraient être ensemble.  
3. **Optimisation des préférences** : Les étudiants sont assignés au meilleur stage possible parmi leurs choix disponibles.  

---

## **Vision critique et pistes d'amélioration**

### **Forces :**
- Respecte les préférences des étudiants et la capacité des stages.
- Garantit une solution stable sans conflit.

### **Faiblesses possibles :**
1. **Flexibilité limitée** : Si un étudiant est mal classé, il peut ne pas avoir accès à ses préférences, même si un stage est libre ailleurs.
2. **Préférences rigides** : L'algorithme ne gère pas des critères secondaires (comme la distance ou les affinités personnelles).
3. **Complexité des cas réels** : Dans des cas très complexes (ex. : beaucoup d'étudiants avec des préférences similaires), le temps d'exécution pourrait augmenter.

---

### **Suggestions d'amélioration :**
1. **Ajouter des critères secondaires** : Par exemple, inclure une notion de proximité géographique ou de compatibilité des spécialités.
2. **Priorité pondérée** : Intégrer un système où les préférences d'un étudiant peuvent être pondérées selon d'autres facteurs que le rang.
3. **Rééquilibrage manuel** : Offrir une possibilité d'ajustement manuel après le calcul automatique pour résoudre les cas exceptionnels ou critiques.

Avec ces améliorations, l'algorithme pourrait mieux s'adapter aux situations réelles tout en restant efficace et équitable.
