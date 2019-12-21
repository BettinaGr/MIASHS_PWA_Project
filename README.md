<h1 align="center">
Rapport du projet
</h1>

## GUIDE D'INSTALLATION

1. Clônez le répertoire depuis github ou ouvrez le terminal utilisez la commande "git clone https://github.com/BettinaGr/MIASHS_PWA_Project.git" dans le répertoire souhaité.
2. Décompressez le fichier si nécessaire.
3. Ouvrez le terminal et placez vous dans le répertoire MIASHS_PWA_Project du projet.
4. Exécutez la commande "npm install".
5. Lancez l'application avec la commande "ng serve".
6. Cliquez sur le lien suivant "http://localhost:4200/".


## FONCTIONNALITES IMPLEMENTEES

 ### Sérialisation / désérialisation des données localement (Local Storage) - Pour sauvegarder les données localement

- Pour la tester:
 1. Ajouter des items à la todo-list
 2. Manipuler ces items, par exemple en les cochant, les supprimant ...
 3. Actualiser la page 
  
- Résultat attendu:
La liste d'item qui s'affiche est la même que celle avant actualisation de la page.
  
### Undo / Redo (Annuler / Refaire)

- Pour la tester:
1. Ajouter des items à la todo-list
2. Manipuler ces items, par exemple en les cochant, les supprimant ...
3. Cliquer sur la flèche du undo (la plus à gauche) puis celle du redo  
  
- Résultat attendu:
En cliquant sur la flèche du undo, l'action précédemment réalisée est annulée. Avec redo, l'action du undo est annulée et l'action précédente restaurée.

### Édition du nom de la liste

- Pour la tester:
1. Double-cliquer sur le titre de la todo-list
2. Modifier le titre
3. Cliquer à un autre endroit de la page

- Résultat attendu:
Le titre de la todo-list est modifié.

### Effacer Tout

- Pour la tester:
1. Ajouter des items à la todo-list
2. Cliquer sur le bouton "Supprimer toute la todo list"

- Résultat attendu: 
Tous les items de la todo-list sont supprimés.
  
