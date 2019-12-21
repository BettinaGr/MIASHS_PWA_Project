<h1 align="center">
Rapport du projet
</h1>

## GUIDE D'INSTALLATION

1. Clônez le répertoire depuis github ou ouvrez le terminal et utilisez la commande "git clone https://github.com/BettinaGr/MIASHS_PWA_Project.git" dans le répertoire souhaité.
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

- Problème rencontré:
Pour rendre les boutons undo et redo cliquables, j'ai besoin de la classe "clear-completed" mais je ne comprend pas pourquoi. 
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

### Passage à une Progressive Web App (PWA) via les technologies standards

Pour réaliser cette fonctionnalité, j'ai voulu utiliser le tutoriel suivant : "https://blog.angular-university.io/angular-service-worker/".

- Pour la tester:
1. Exécuter la commande "ng build --prod"
2. Se placer dans le dossier dist grâce à la commande : cd dist
3. Exécuter la commande http-server
4. Un message de ce genre doit s'afficher <br/>
Available on: <br/>
  http://192.168.1.18:8080 <br/>
  http://127.0.0.1:8080 <br/>
5. Taper une de ces URLs sur votre téléphone (celui ci doit être sur le même réseau que l'ordinateur sur lequel vous lancer l'application)

- Résultat attendu: 
L'application est disponible sur votre téléphone.

- Problème rencontré:
Lorsque j'ai voulu construire l'application pour exploiter le service worker d'angular, j'ai eu des soucis au niveau de certaines propriétés qui n'étaient pas accessibles car elles étaient en privé. J'ai donc du les passer en public.

### Ajout de notes de types images / vidéos / sons / dessins ...

Dans un premier temps, j'ai voulu essayer d'implémenter cette fonctionnalité, pour l'ajout d'images cela me semblait réalisable mais pour les sons ... je ne savais pas comment faire. J'ai donc chercher pendant quelques heures des tutos mais je n'ai rien trouvé pour des fichiers autres que des images. J'ai donc abandonné cette fonctionnalité.

  
