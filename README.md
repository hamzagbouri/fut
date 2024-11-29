# FUT Team Builder

L'application **FUT Team Builder** permet aux utilisateurs de créer et gérer leur propre équipe FUT (Ultimate Team). Elle offre une expérience interactive pour ajouter, positionner et modifier les joueurs, tout en respectant les formations tactiques prédéfinies comme 4-4-2 ou 4-3-3. 

L'objectif est de fournir une interface intuitive, des formulaires dynamiques et une gestion efficace des données via `localStorage`.

---

## 🏆 **Fonctionnalités Principales**

### 1. **Création et Gestion des Joueurs**
- Formulaire dynamique pour ajouter des joueurs avec des détails comme :
  - Nom
  - Position
  - Note globale
  - Statistiques
- Limitation stricte à 11 joueurs sur le terrain, les autres étant réservistes.

### 2. **Positionnement et Formations**
- **Formations disponibles :**
  - *4-3-3*: GK, 2 CB, LB, RB, 3 CM, LW, RW, ST
- Adaptation automatique des positions selon la formation choisie.

### 3. **Chimie de l'équipe (Bonus)**
- Calcul automatique du score de chimie en fonction des relations entre joueurs :
  - Position correcte : +10 points.
  - Lien fort (même club) : +3 points.
  - Lien de ligue : +2 points par joueur adjacent.
  - Lien de nationalité : +1 point.
- Affichage visuel des liaisons fortes et faibles.
- Score total normalisé sur une échelle de 0 à 100.

### 4. **Sauvegarde et Reprise**
- Stockage des données de l’équipe et de la formation dans `localStorage`.
- Chargement automatique des données sauvegardées au démarrage de l’application.

### 5. **Interface Interactive**
- Interface utilisateur réactive (responsive) adaptée aux appareils mobiles, tablettes et desktops.
- Fonctionnalités de drag & drop pour repositionner les joueurs sur le terrain.

---

## 🛠️ **Technologies Utilisées**
- **HTML** pour la structure.
- **Tailwind CSS**
- **JavaScript (Vanilla)** pour les interactions dynamiques et la manipulation du DOM.

---

## 🚀 **Installation et Utilisation**

### **1. Cloner le repository**
```bash
git clone https://github.com/hamzagbouri/fut.git
cd fut
