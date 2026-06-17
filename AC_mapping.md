# Mapping AC / CE — Projets Portfolio — Sami OURRAD

> **Légende :**
> - A1 = 1ère année BUT (S1/S2)
> - A2 = 2ème année BUT (S3/S4)
> - A3 = 3ème année BUT (S5/S6) — C1, C2, C6 uniquement (Parcours A)

---

## 1. Plateforme Anki multilingues

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A1 | AC1 — Implémenter des conceptions simples | Séparation logique métier (Python) / interface statique (HTML/CSS/JS) |
| C1 | A1 | AC4 — Développer des interfaces utilisateurs | Interface web de distribution des packs |
| C1 | A2 | AC1 — Élaborer et implémenter les spécifications | Spécifications fonctionnelles : 50+ combinaisons de langues gérées sans duplication |
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Modules de génération indépendants, découplage du cœur de l'application |
| C2 | A1 | AC1 — Analyser un problème avec méthode | Choix architectural justifié par la diversité des combinaisons à couvrir |

**CE couvertes :** C1-CE3 (qualité du code et documentation), C1-CE4 (ressources techniques adaptées), C2-CE1 (formaliser des situations complexes)

---

## 2. Gateway IAM multi-provisionnement — MidPoint

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A2 | AC1 — Élaborer et implémenter les spécifications | Spécifications du workflow d'approbation multi-niveaux |
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Architecture de connecteurs MidPoint, configuration XML structurée |
| C3 | A2 | AC1 — Concevoir des applications communicantes | Gateway intégrée à plusieurs applications métier du SI |
| C3 | A2 | AC2 — Serveurs et services réseaux virtualisés | Déploiement MidPoint en environnement serveur de production |
| C3 | A2 | AC3 — Sécuriser les services | IAM, RBAC, workflow d'approbation, traçabilité des droits |
| C5 | A2 | AC1 — Identifier les processus | Modélisation du processus de provisionnement dans l'organisation |
| C5 | A2 | AC4 — Mettre en œuvre une démarche de suivi | Coordination des intégrations applicatives, suivi par niveaux d'approbation |
| C6 | A2 | AC1 — Comprendre la diversité et la structure du SI | Compréhension de l'architecture globale du SI d'EISGE |
| C6 | A2 | AC2 — Intégrer une équipe informatique | Coordination avec les équipes responsables de chaque application cible |
| C6 | A2 | AC4 — Rendre compte de son activité | Documentation, traçabilité des demandes, workflow de validation formalisé |

**CE couvertes :** C3-CE1 (sécuriser le SI), C3-CE2 (normes architecturales et de sécurité), C6-CE1 (équipe pluridisciplinaire), C6-CE4 (communication collaborative)

---

## 3. Site Météorologique avec API Synop

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A1 | AC1 — Implémenter des conceptions simples | Architecture PHP/MySQL justifiée par la nature des données |
| C1 | A1 | AC3 — Faire des essais et évaluer | Métriques calculées et validées (températures, pressions, humidités) |
| C1 | A1 | AC4 — Développer des interfaces utilisateurs | Interface web avec visualisation Chart.js |
| C1 | A2 | AC1 — Élaborer et implémenter les spécifications | Collecte cyclique API, rendu serveur, fenêtres glissantes |
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Séparation collecte / stockage / rendu |
| C2 | A1 | AC1 — Analyser un problème avec méthode | Choix du stockage relationnel justifié par les requêtes historiques |
| C3 | A2 | AC1 — Concevoir des applications communicantes | Intégration de l'API REST Synop |
| C4 | A1 | AC1 — Mettre à jour et interroger une BDD relationnelle | Requêtes MySQL pour données météo historiques |
| C4 | A1 | AC2 — Visualiser des données | Chart.js : courbes températures, pressions, humidités |
| C4 | A1 | AC3 — Concevoir une BDD relationnelle à partir d'un cahier des charges | Conception du schéma relationnel adapté aux données Synop |
| C4 | A2 | AC1 — Optimiser les modèles de données | Requêtes efficaces sur fenêtres glissantes, indexation |
| C4 | A2 | AC3 — Organiser la restitution de données | Métriques agrégées calculées côté serveur |
| C4 | A2 | AC4 — Manipuler des données hétérogènes | Pipeline : JSON Synop → MySQL → Chart.js |

**CE couvertes :** C4-CE2 (enjeux économiques et infrastructure de stockage), C4-CE4 (cohérence et qualité des données)

---

## 4. Interface de suivi biomécanique — KAIST ExoLab

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A2 | AC1 — Élaborer et implémenter les spécifications | Spécifications issues des contraintes laboratoire (latence, fréquence capteurs) |
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Architecture threading PyQt5 justifiée et documentée |
| C1 | A2 | AC4 — Vérifier et valider par les tests | Validation de la latence d'affichage dans les seuils requis |
| C2 | A2 | AC1 — Choisir des structures de données complexes | Files de traitement et buffers pour flux EMG/IMU haute fréquence |
| C2 | A2 | AC2 — Techniques algorithmiques adaptées | Threading dédié pour découpler acquisition et rendu graphique |
| C3 | A2 | AC1 — Concevoir des applications communicantes | Socket TCP pour réception des flux capteurs |
| C5 | A2 | AC1 — Identifier les processus | Modélisation du flux : capteur → interface → stockage HDF5 → analyse offline |
| C5 | A2 | AC4 — Mettre en œuvre une démarche de suivi | Répartition des tâches avec le responsable du laboratoire |
| C6 | A2 | AC2 — Intégrer une équipe informatique | Équipe internationale de 4, coordination avec le laboratoire KAIST |
| C6 | A2 | AC3 — Mobiliser les compétences interpersonnelles | Travail en contexte international (Corée du Sud), communication en anglais |
| C6 | A2 | AC4 — Rendre compte de son activité | Suivi d'avancement collectif, sessions exportées pour analyses post-traitement |

**CE couvertes :** C2-CE1 (formaliser situations complexes), C6-CE1 (équipe pluridisciplinaire), C6-CE4 (communication efficace et collaborative)

---

## 5. Infrastructure Réseau Multi-Services

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A1 | AC1 — Implémenter des conceptions simples | Scripts Bash/Batch d'automatisation |
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Validation avant application, rollback automatique, rotation des sauvegardes |
| C3 | A1 | AC3 — Installer et configurer un système | Installation Apache, SSH, FTP/SFTP, DHCP depuis une machine Debian vierge |
| C3 | A1 | AC4 — Configurer un poste dans un réseau d'entreprise | Configuration DHCP et réseau local multi-services |
| C3 | A2 | AC2 — Serveurs et services réseaux virtualisés | Services réseaux sur Debian : Web, FTP, SSH, DHCP |
| C3 | A2 | AC3 — Sécuriser les services | Accès SSH/SFTP, contrôle des accès par service |
| C6 | A1 | AC3 — Identifier les statuts et rôles | Attribution des rôles entre membres du binôme pour chaque service |
| C6 | A2 | AC2 — Intégrer une équipe | Binôme coordonné, livraison complète et testée |

**CE couvertes :** C3-CE1 (sécuriser le système d'information), C3-CE2 (normes architecturales et de sécurité), C3-CE4 (continuité d'activité — rollback automatique), C6-CE1 (équipe pluridisciplinaire)

---

## 6. Hébergement statique — AWS S3 + CloudFront

| Compétence | Année | AC | Justification |
|---|---|---|---|
| C1 | A2 | AC3 — Adopter de bonnes pratiques | Déploiement cloud structuré, HTTPS imposé |
| C3 | A2 | AC2 — Serveurs et services réseaux virtualisés | AWS S3 (stockage) + CloudFront (CDN mondial) |
| C3 | A2 | AC3 — Sécuriser les services | HTTPS via CloudFront, accès public contrôlé |
| C2 | A2 | AC4 — Évaluer l'impact environnemental et sociétal | Hébergement serverless (pas d'infrastructure physique permanente) |

**CE couvertes :** C3-CE1 (sécuriser le SI), C3-CE2 (normes architecturales cloud), C3-CE3 (qualité de service — réduction de latence CDN)

---

## Récapitulatif par compétence

| Compétence | Projets |
|---|---|
| **C1** A1 + A2 | Anki, Site Météo, Infrastructure Réseau, KAIST, Gateway IAM, S3/CloudFront |
| **C2** A1 + A2 | Anki (A1), Site Météo (A1), KAIST (A2), S3/CloudFront (A2) |
| **C3** A1 + A2 | Infrastructure Réseau (A1+A2), Site Météo (A2), KAIST (A2), Gateway IAM (A2), S3/CloudFront (A2) |
| **C4** A1 + A2 | Site Météo (A1+A2) |
| **C5** A2 | Gateway IAM, KAIST |
| **C6** A1 + A2 | Infrastructure Réseau (A1+A2), KAIST (A2), Gateway IAM (A2) |
