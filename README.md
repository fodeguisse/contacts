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

# build de l'application: 
ionic build --prod

# Pour le déploiement sur un serveur web: 

il faut Copier le contenu du dossier www généré dans le répertoire du serveur web (Apache, Nginx, etc.)

# Déploiement sur une plateforme mobile 
Android: 
    Installer les prérequis Android SDK.
    ajouter la plateforme Android: 
        - ionic capacitor add android
    ouvrir le projet dans Android Studio et compiler.

OS :

    Installez Xcode.
    Ajoutez la plateforme iOS :
        - ionic capacitor add ios
    Ouvrir le projet dans Xcode et compiler.