
interface Etudiant {
    matricule: string;
    rang: number;
    preferences: Array<{
        hopital: number;
        service: number;
        ordre: number;
        typepref: 1 | 2;  // 1 = préférence, 2 = exclusion
    }>;
    stageAssigne?: Stage;
}

/**
 * Implémentation de l'algorithme des mariages stables
 * avec adaptations pour le problème d'attribution des stages
 */
class StableMarriageStages {
    private stages: Stage[] = [];
    private etudiants: Etudiant[] = [];
    private nonAssignes: Etudiant[] = [];

    constructor(
        etudiants: Etudiant[],
        places: Array<{hopital: number; service: number; places: number}>
    ) {
        // Initialiser les stages avec leurs capacités
        this.stages = places.map(p => ({
            hopital: p.hopital,
            service: p.service,
            capacite: p.places,
            assignations: []
        }));

        // Trier les étudiants par rang croissant (meilleur rang en premier)
        this.etudiants = [...etudiants].sort((a, b) => a.rang - b.rang);
        this.nonAssignes = [...this.etudiants];
    }

    /**
     * Exécute l'algorithme des mariages stables
     */
    public executer(): Array<{matricule: string; hopital: number; service: number}> {
        while (this.nonAssignes.length > 0) {
            const etudiant = this.nonAssignes[0];

            // Trouver la prochaine préférence valide
            const prefsValides = etudiant.preferences
                .filter(p => p.typepref === 1)
                .sort((a, b) => a.ordre - b.ordre);

            for (const pref of prefsValides) {
                const stage = this.trouverStage(pref.hopital, pref.service);
                if (!stage) continue;

                // Si le stage a de la capacité
                if (this.stageACapacite(stage)) {
                    this.assignerEtudiantAuStage(etudiant, stage);
                    break;
                }
                // Si le stage est plein mais pourrait préférer cet étudiant
                else {
                    // Trouver l'étudiant avec le moins bon rang dans ce stage
                    const pireEtudiant = stage.assignations
                        .map(m => this.etudiants.find(e => e.matricule === m))
                        .filter((e): e is Etudiant => e !== undefined)
                        .sort((a, b) => b.rang - a.rang)[0];

                    if (this.stagePrefereEtudiant(stage, etudiant.matricule, pireEtudiant.matricule)) {
                        // Désassigner le pire étudiant
                        this.desassignerEtudiant(pireEtudiant);
                        // Assigner le nouvel étudiant
                        this.assignerEtudiantAuStage(etudiant, stage);
                        break;
                    }
                }
            }

            // Si l'étudiant n'a pas été assigné, le retirer temporairement de la liste
            // Il sera réinséré si un de ses stages préférés se libère
            if (!etudiant.stageAssigne) {
                this.nonAssignes = this.nonAssignes.filter(e => e !== etudiant);
            }
        }

        return this.getResultatFinal();
    }

    /**
     * Vérifie s'il existe une paire bloquante dans l'assignation actuelle
     * Une paire bloquante est un étudiant et un stage qui préféreraient
     * être ensemble plutôt qu'avec leurs partenaires actuels
     */
    public verifierStabilite(): boolean {
        for (const etudiant of this.etudiants) {
            for (const stage of this.stages) {
                // Si l'étudiant préfère ce stage à son assignation actuelle
                if (this.prefereLeStagePar(etudiant, stage)) {
                    // Et si le stage a de la capacité ou préfère cet étudiant à un de ses assignés
                    if (this.stageACapacite(stage) ||
                        stage.assignations.some(matricule =>
                            this.stagePrefereEtudiant(stage, etudiant.matricule, matricule))) {
                        return false; // Paire bloquante trouvée
                    }
                }
            }
        }
        return true; // Aucune paire bloquante
    }

    /**
     * Vérifie si un stage a encore de la capacité disponible
     */
    private stageACapacite(stage: Stage): boolean {
        return stage.assignations.length < stage.capacite;
    }

    /**
     * Cherche un stage par son identifiant
     */
    private trouverStage(hopital: number, service: number): Stage | undefined {
        return this.stages.find(s =>
            s.hopital === hopital && s.service === service
        );
    }

    /**
     * Détermine si un étudiant préfère un nouveau stage à son stage actuel
     */
    private prefereLeStagePar(
        etudiant: Etudiant,
        stage: Stage
    ): boolean {
        if (!etudiant.stageAssigne) return true;

        const prefActuelle = etudiant.preferences.find(p =>
            p.hopital === etudiant.stageAssigne!.hopital &&
            p.service === etudiant.stageAssigne!.service
        );

        const nouvellePref = etudiant.preferences.find(p =>
            p.hopital === stage.hopital &&
            p.service === stage.service
        );

        if (!prefActuelle) return true;
        if (!nouvellePref) return false;

        // Un ordre plus petit signifie une meilleure préférence
        return nouvellePref.ordre < prefActuelle.ordre;
    }

    /**
     * Détermine si un stage devrait préférer un nouvel étudiant
     * basé sur le rang de l'étudiant
     */
    private stagePrefereEtudiant(
        stage: Stage,
        nouveauMatricule: string,
        ancienMatricule: string
    ): boolean {
        const nouvelEtudiant = this.etudiants.find(e => e.matricule === nouveauMatricule);
        const ancienEtudiant = this.etudiants.find(e => e.matricule === ancienMatricule);

        if (!nouvelEtudiant || !ancienEtudiant) return false;

        // Un rang plus petit est meilleur
        return nouvelEtudiant.rang < ancienEtudiant.rang;
    }

    /**
     * Assigne un étudiant à un stage
     */
    private assignerEtudiantAuStage(etudiant: Etudiant, stage: Stage): void {
        // Retirer l'ancienne assignation si elle existe
        if (etudiant.stageAssigne) {
            this.desassignerEtudiant(etudiant);
        }

        // Nouvelle assignation
        etudiant.stageAssigne = stage;
        stage.assignations.push(etudiant.matricule);
        this.nonAssignes = this.nonAssignes.filter(e => e !== etudiant);
    }

    /**
     * Retire l'assignation d'un étudiant
     */
    private desassignerEtudiant(etudiant: Etudiant): void {
        if (etudiant.stageAssigne) {
            etudiant.stageAssigne.assignations =
                etudiant.stageAssigne.assignations.filter(m => m !== etudiant.matricule);
            etudiant.stageAssigne = undefined;
            if (!this.nonAssignes.includes(etudiant)) {
                this.nonAssignes.push(etudiant);
            }
        }
    }

    /**
     * Retourne le résultat final au format attendu par l'API
     */
    private getResultatFinal(): Array<{matricule: string; hopital: number; service: number}> {
        return this.etudiants
            .filter(e => e.stageAssigne)
            .map(e => ({
                matricule: e.matricule,
                hopital: e.stageAssigne!.hopital,
                service: e.stageAssigne!.service
            }));
    }
}

/**
 * Fonction utilitaire pour utiliser l'algorithme
 */
export function attribuerStagesStable(
    etudiants: Etudiant[],
    places: Array<{hopital: number; service: number; places: number}>
): Array<{matricule: string; hopital: number; service: number}> {
    const stageMatcher = new StableMarriageStages(etudiants, places);
    const resultat = stageMatcher.executer();

    // Vérifier la stabilité
    if (!stageMatcher.verifierStabilite()) {
        console.warn("ATTENTION: L'attribution n'est pas stable!");
    }

    return resultat;
}