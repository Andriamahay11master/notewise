# Application de notes avec reconnaissance de texte (OCR)

Cette application de notes est un projet open-source, développée avec **React.js**, **TypeScript**, **HTML**, **SCSS**, et **Firebase**, permet de capturer, sauvegarder et organiser des notes instantanément à partir de photos. Grâce à la reconnaissance optique de caractères (OCR), elle convertit les images en texte éditable, facilitant la prise de notes depuis des documents, des tableaux, des notes manuscrites, et plus encore.

Avec des fonctionnalités de tri et de recherche, l’application aide les utilisateurs à garder leurs notes bien organisées. Elle permet également l’ajout de tags pour une meilleure classification et un accès rapide aux informations. Idéale pour les étudiants, les professionnels, et toute personne cherchant à convertir des informations visuelles en contenu numérique prêt à l'emploi.

## Fonctionnalités principales

- **Capture de conversion de texte :** Utiliser la caméra pour prendre une photo de documents, de notes manuscrites ou d'autres supports visuels contenant du texte.
- **OCR :** Utilisez l'outil OCR pour extraire le texte d'une image.
- **Édition et personnalisation des Notes :** Modifiez le texte extrait et ajoutez des tags pour une meilleure organisation.
- **Sauvegarde et Organisation des Notes :** Organisation en dossiers ou sous-dossiers pour une meilleure gestion des informations.
- **Importation de Documents :** Permettre l'import de documents ou de photos directement depuis la galerie du téléphone ou un stockage externe. Appliquer l'OCR sur les images ou les PDF importés pour en extraire le texte.
- **Fonctionnalités Avancées de Partage et Export :** Partager les notes via email, réseaux sociaux, ou messageries. Exporter le contenu sous forme de fichiers texte, PDF ou Word pour les archiver ou les utiliser dans d’autres applications.
- **Interface Utilisateur Personnalisable :** Choix de thèmes sombres ou clairs pour le confort visuel. Options de mise en page et de vue pour s'adapter aux préférences de l’utilisateur (mode liste, mode grille, etc.).

## Technologies utilisées

- **React JS & TypeScript :** Pour une architecture modulaire et un typage strict.
- **SCSS :** Pour une gestion avancée des styles avec un design réactif.
- **Firebase Firestore :** Base de données utilisée pour stocker et gérer les données.

## Installation et démarrage

1. Clonez le dépôt :

```bash
git clone https://github.com/Andriamahay11master/notewise.git
cd notewise
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez l'application en mode développement :

```bash
npm run dev
```

4. Accédez à l'application sur `http://localhost:5173`.

## Structure du projet

- **src/** : Contient le code source de l'application.
  - **components/** : Composants réutilisables tels que les formulaires, alertes, tableaux, loader, breadcrumbs,etc.
  - **app/** : Pages principales de l'application et configuration firebase.
  - **assets/** : Fichiers SCSS pour la gestion des styles globaux et des composants.
  - **models/** : Pour le typage des données.
  - **data/** : Pour les données statiques utilisés par l'application.

## Commandes utiles

- **`npm run dev`** : Démarre l'application en mode développement.
- **`npm run build`** : Génère un build de production.
- **`npm run lint`** : Vérifie et corrige le code avec ESLint.

## Contribution

Les contributions sont les bienvenues. Si vous souhaitez contribuer, ouvrez un problème ou une pull request.
