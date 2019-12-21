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
 1. Ajoutez des items à la todo-list
 2. Manipulez ces items, par exemple en les cochant, les supprimant ...
 3. Actualisez la page 
  
- Résultat attendu:
La liste d'item qui s'affiche est la même que celle avant actualisation de la page.
  
### Undo / Redo (Annuler / Refaire)

- Pour la tester:
1. Ajoutez des items à la todo-list
2. Manipulez ces items, par exemple en les cochant, les supprimant ...
3. Cliquez sur la flèche du undo (la plus à gauche) puis celle du redo  
  
- Résultat attendu:
En cliquant sur la flèche du undo, l'action précédemment réalisée est annulée. Avec redo, l'action du undo est annulée et l'action précédente restaurée.

- Problème rencontré:
Pour rendre les boutons undo et redo cliquables, j'ai besoin de la classe "clear-completed" mais je ne comprend pas pourquoi. 
### Édition du nom de la liste

- Pour la tester:
1. Double-cliquez sur le titre de la todo-list
2. Modifiez le titre
3. Cliquez à un autre endroit de la page

- Résultat attendu:
Le titre de la todo-list est modifié.

### Effacer Tout

- Pour la tester:
1. Ajoutez des items à la todo-list
2. Cliquez sur le bouton "Supprimer toute la todo list"

- Résultat attendu: 
Tous les items de la todo-list sont supprimés.

### Passage à une Progressive Web App (PWA) via les technologies standards

Pour réaliser cette fonctionnalité, j'ai voulu utilisé le tutoriel suivant : https://blog.angular-university.io/angular-service-worker/

- Pour la tester:
1. Exécutez la commande "ng build --prod". Un dossier dist va se créer, cela peut prendre un peu de temps.
2. Se placez dans le dossier dist grâce à la commande : "cd dist"
3. Exécutez la commande "http-server"
4. Un message de ce genre doit s'afficher <br/>
Available on: <br/>
  http://192.168.1.18:8080 <br/>
  http://127.0.0.1:8080 <br/>
5. Tapez la première de ces URLs sur votre téléphone. Celui ci doit être sur le même réseau que l'ordinateur sur lequel vous lancez l'application. <br/>
La seconde URL correspond au localhost et ne sera donc pas accessible sur votre téléphone.

- Résultat attendu: 
L'application est disponible sur votre téléphone.

- Problème rencontré:
Lorsque j'ai voulu construire l'application pour exploiter le service worker d'angular, j'ai eu des soucis au niveau de certaines propriétés qui n'étaient pas accessibles car elles étaient en privé. J'ai donc du les passer en public.

### Utilisation de reconnaissance vocale

Pour réaliser cette fonctionnalité, j'ai utilisé le tutoriel suivant : https://hassantariqblog.wordpress.com/2016/12/04/angular2-web-speech-api-speech-recognition-in-angular2/?fbclid=IwAR3_ZhyT6hiUfmIj2XSmEK9gT1-NQ0PSB6B_pdUn7qUeBSHNzeSBSnSQLqs

- Pour la tester:
1. Cliquez sur le micro pour activer la reconnaissance vocale (il faut accepter l'accès au micro)
2. Dîtes le nom de la tâche que vous voulez ajouter. Celle ci s'affiche dans le champs de saisie qui permet d'ajouter un item.
3. Placez vous dans le champs de saisie et cliquez sur Entrée pour ajouter l'item à la liste

- Problème rencontré:
Pour que la reconnaissance vocale fonctionne, il faut utiliser Google Chrome.

### Ajout de notes de types images / vidéos / sons / dessins ...

Dans un premier temps, j'ai voulu essayer d'implémenter cette fonctionnalité, pour l'ajout d'images cela me semblait réalisable mais pour les sons ... je ne savais pas comment faire. J'ai donc chercher pendant quelques heures des tutos mais je n'ai rien trouvé pour des fichiers autres que des images. J'ai donc abandonné cette fonctionnalité.
