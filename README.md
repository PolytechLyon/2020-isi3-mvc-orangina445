# ISI3 - MVP design pattern - "Game of Life"

> Le rapport est à fournir dans ce document sous chacune des questions. 
> **Ne restez pas bloqués bêtement, demander de l'aide**
> Ne copier pas le code de votre voisin, ça se voit.

Nom/Prénom: `CAZET Martin`

Lien du codesandbox: `https://codesandbox.io/s/github/PolytechLyon/2020-isi3-mvc-orangina445?file=/src/gameOfLife/view.js`

> Pour générer un codesandbox associé à votre code, [suiver cette doc](https://codesandbox.io/docs/importing#import-from-github)

## Game of Life

Le jeu de la vie est un automate cellulaire qui répond à des règles très simple.
Il est inventé par [John Horton Conway](https://fr.wikipedia.org/wiki/John_Horton_Conway)(1937-2020).

## Avant-propos

1. Expliquer le design pattern MVC à l'aide d'un schéma à insérer directement ici. 
Utiliser un outils commde Dia pour le représenter. Je veux **votre** schéma, pas un de ceux qu'on peut trouver sur le net.
![alt text](./image/diagrammeMVC2.PNG)
2. Expliquer ce pattern à l'aide en complétant ce texte.

Le pattern MVP, vise à découper le `modèle`, de la `vue` et du `controlleur` afin de rendre le code plus `claire`.
Les responsabilités ne sont alors plus `partager`.
On peut ainsi changer l'aspect visuel de sont application sans pour autant impacter le `code métier`.

3. Expliquer dans quels cas on doit privilégier le pattern MVC.  
*Le pattern MVC est très utilisé dans les applications "client lourd" et les applications web.*
## A faire (obligatoire)

- Render le jeu fonctionel tout en respectant le design pattern MVC.
- Le bouton `start` doit lancer le jeu.
- Le bouton `stop` doit arrêter le jeu en l'état, le `start` relance le jeu.
- le bouton `reset` arrête le jeu et vide remet à la grille à l'état initiale.

### Observer Observable

Afin de mettre à jour la vue à chaque nouvelle génération du jeu, la fonction `updated` doit notifier la view afin qu'elle se mette à jour. Après la création de la vue et du modèle, la vi=ue est ajouter au observeur avec la fonction addObserver de la classe modèle
En quoi cela relève du design pattern ObserverObservable.

1. Expliquer votre implémentation:  
J'ajoute une liste d'obervers au modèle. La fonction updated appelle la fonction update de chaque observers de la liste. la vue possède donc une fonction update qui redessine le jeu.  
L'usage d'une callback permet ici de `notifier` afin dire à la _View_ de se redessiner.
L'objet _Model_ n'a pas de lien avec `la vue` pourtant grâce à la `fonction updated` il peut notifier la `vue`.

2. Insérer ici un UML montrant le pattern Observer-Observable liés aux objects de ce TP.
![alt text](./image/diagrammeObs.PNG)
## Optionel

> Si vous voulez apprendre d'autres choses

- Faire sorte de pouvoir changer les dimensions de la grille par in `<input/>` HTML.
- Faire en sorte de pouvoir modifier l'état d'une cellule en cliquant dessus.

## :warning: À rendre

- Une URL de codesandox pointant sur votre projet github afin que je puisse voir et tester le code.
- Le rapport complet.
