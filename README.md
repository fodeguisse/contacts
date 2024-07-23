# Installation de Angular version 17
npm install -g @angular/cli

# Installation de Ionic
npm install -g @ionic/cli

# créer le projet
ionic start contacts blank --type=angular


l'option "Standalone".

# cd contacts : se placer dans le projet

# lancer le serveur
ionic serve

# créer la page contacts : affichage la liste des contacts
ionic generate page contacts

# créer la page contact-detail : affichage les détails du contact
ionic generate page contact-detail

# créér un model contact : contact.model.ts
mkdir src/app/models

# créér le service contact : contact.service.ts
mkdir src/app/services

# créer une nouvelle page:  ajout d'un nouveau contact
ionic generate page add-contact
