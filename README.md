# Angular Todo List 📝

Une application de gestion de tâches simple développée avec **Angular 19.2.5** et **NgRx**.  
Elle permet de créer, visualiser et organiser des listes de tâches.

## 🚀 Fonctionnalités

- Ajouter une liste de tâches
- Ajouter et supprimer des tâches
- Marquer des tâches comme complètes
- Navigation entre les listes
- Architecture modulaire avec **NgRx Store**

## 🛠️ Technologies

- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)
- TypeScript
- SCSS
- Tailwind V4 (https://tailwindcss.com/)

## 📦 Installation

1. Clone le dépôt ou télécharge ce projet :
    ```bash
    git clone <repository-url>
    ```

2. Installe les dépendances :
    ```bash
    npm install
    ```

3. Lance le serveur de développement :
    ```bash
    ng serve
    ```

4. Accède à l'application sur `http://localhost:4200/`.


## 🔁 Gestion d'état avec NgRx

L'application utilise **NgRx** pour :

- Centraliser l’état de l’application
- Gérer les effets secondaires (async, appels API...)
- Suivre les actions utilisateur via des événements bien définis

## ✅ Bonnes pratiques

- Utilisation de composants bien isolés
- Structure modulaire claire
- Logique métier via NgRx
- Utilisation d’interfaces pour typer les données

