# 🎬 CineVault — Explorateur de Films

> Une application web cinéma élégante et moderne, construite en HTML/CSS/JS vanilla, consommant l'API TMDB.

![CineVault Preview](https://image.tmdb.org/t/p/w780/placeholder.jpg)

---

## 🚀 Demo

👉 **[Voir l'application déployée](https://Lynda2003.github.io/cinevault)**

---

## 📋 Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| 🎥 **Hero dynamique** | Affichage cinématographique du film vedette avec backdrop |
| 🔍 **Recherche temps réel** | Recherche instantanée avec debounce (400ms) |
| 🏷️ **Filtres par genre** | Pills interactives pour filtrer par genre |
| 📂 **4 catégories** | Populaires, Top Rated, À venir, En salle |
| 🗂️ **Tri avancé** | Par note, titre ou année |
| 🪟 **Modal détaillé** | Fiche complète : budget, recettes, genres, tagline |
| ♥️ **Ma Liste** | Watchlist persistante via `localStorage` |
| 📊 **Stats** | Compteurs dynamiques (films, genres, liste) |
| 📱 **Responsive** | Adapté mobile, tablette et desktop |

---

## 🛠️ Stack technique

- **HTML5** — Structure sémantique
- **CSS3** — Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** — `async/await`, modules, `localStorage`
- **TMDB API** — [The Movie Database](https://www.themoviedb.org/documentation/api)
- **Google Fonts** — Playfair Display + DM Sans
- **GitHub Pages** — Déploiement statique gratuit

---

## 📁 Structure du projet

```
cinevault/
├── index.html        ← Page principale
├── css/
│   └── style.css     ← Styles complets (700+ lignes)
├── js/
│   └── app.js        ← Logique applicative
└── README.md         ← Documentation
```

---

## ⚙️ Installation & Déploiement

### 1. Cloner le repo

```bash
git clone https://github.com/Lynda2003/cinevault.git
cd cinevault
```

### 2. Obtenir une clé API TMDB (gratuit)

1. Créez un compte sur [themoviedb.org](https://www.themoviedb.org/)
2. Allez dans **Paramètres → API**
3. Copiez votre clé API v3

### 3. Configurer la clé

Dans `js/app.js`, ligne 8 :

```javascript
const API_KEY = "3d08292886cf723d13f42d557f300bc1";
```

### 4. Tester en local

```bash
# Option 1 : extension Live Server (VS Code)
# Option 2 : Python simple server
python3 -m http.server 8080
# Ouvrir http://localhost:8080
```

### 5. Déployer sur GitHub Pages

```bash
git add .
git commit -m "🎬 Initial commit — CineVault"
git push origin main
```

Ensuite dans GitHub : **Settings → Pages → Branch: main → Save**

✅ Votre app sera disponible sur `https://Lynda2003.github.io/cinevault`

---

## 📄 Spécification du projet

### Objectif pédagogique

Démontrer la maîtrise de :
- Consommation d'une **API REST publique** avec `fetch`
- Gestion de l'**état applicatif** sans framework
- **Persistance locale** avec `localStorage`
- **UX/UI avancée** : animations, modals, toast, FAB
- **Déploiement** sur GitHub Pages

### Décisions techniques

| Choix | Justification |
|---|---|
| Vanilla JS | Zéro dépendance, bundle = 0kb |
| CSS Variables | Thème cohérent, maintenance facile |
| Debounce search | Limite les appels API inutiles |
| Lazy loading images | Performance sur mobile |
| localStorage | Persistance watchlist sans backend |

---

## 👤 Auteur

**Prénom NOM** — Étudiant en Software Engineering  
📧 bedhiafilynda4@gmail.com  
🔗 [LinkedIn](https://linkedin.com) · [GitHub](https://github.com/Lynda2003)

---

## 📜 Licence

MIT — Libre d'utilisation et de modification.

---

*Données fournies par [The Movie Database (TMDB)](https://www.themoviedb.org/). Ce produit utilise l'API TMDB mais n'est pas approuvé ou certifié par TMDB.*