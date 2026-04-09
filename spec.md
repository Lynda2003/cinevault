# 🚀 Guide de déploiement — CineVault

## Étapes complètes pour push + deploy

```bash
# 1. Initialiser git dans le dossier
cd cinevault
git init
git branch -M main

# 2. Ajouter tous les fichiers
git add .
git status

# 3. Premier commit
git commit -m "🎬 feat: initial commit — CineVault cinema explorer"

# 4. Créer un repo sur GitHub (sans README)
# Aller sur https://github.com/new
# Nom du repo : cinevault
# Visibilité : Public (requis pour GitHub Pages gratuit)

# 5. Connecter le repo distant
git remote add origin https://github.com/Lynda2003/cinevault.git
git push -u origin main

# 6. Activer GitHub Pages
# GitHub → repo → Settings → Pages
# Source: "GitHub Actions" (pour utiliser le workflow)
# OU
# Source: "Deploy from a branch" → Branch: main → / (root)
```

## Mettre à jour après modifications

```bash
git add .
git commit -m
git push
```

## URL finale

```
https://Lynda2003.github.io/cinevault
```

## Vérifier la clé API TMDB

Remplacer dans js/app.js ligne 8 :

```javascript
const API_KEY = "3d08292886cf723d13f42d557f300bc1";
```

Obtenir une clé gratuite : https://www.themoviedb.org/settings/api
