<template>
    <div class="home">
        <v-layout
                align-center
                column
                justify-center
                id="header-banner"
                class="vh-center text-xs-center"
        >
            <v-card color="transparent" flat>
                <v-card-title class="vh-center">
                    <h1 class="display-3 font-weight-thin mb-3 white--text">
                        Géré de façon horizontale par ses membres
                    </h1>
                    <h4 class="font-weight-thin white--text" style="font-size:19px;">
                        Pour partager des ressources et des projets afin de s'adresser aux inégalités sociales et
                        environnementales
                    </h4>
                </v-card-title>
            </v-card>
            <!--<h4 class="subheading font-weight-thin">-->
            <!--Adresser les inégalités sociales et environnementales-->
            <!--</h4>-->
        </v-layout>
        <v-layout row wrap class="mb-5 mt-5" id="benevole">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Membres
                </h1>
                <h4 class="subheading font-weight-thin">
                    de comités actifs
                </h4>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mb-5">
            <!--<v-flex xs0 lg3></v-flex>-->
            <v-flex xs12 md6 v-for="(membre, index) in membresDeCerclesTries" :key="membre.nom">
                <v-layout row class="mb-5" :class="{
                    'ml-5 pl-5': $vuetify.breakpoint.mdAndUp
                }">
                    <v-flex xs2 v-if="index % 2 === 0 && $vuetify.breakpoint.mdAndUp"></v-flex>
                    <v-flex xs2 class="" :class="{
                            'mr-4 ml-4': $vuetify.breakpoint.smAndDown
                        }">
                        <v-avatar :size="avatarSize">
                            <img :src='require("../assets/" + membre.avatar)' :alt="membre.nom">
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10 lg8 class="text-xs-left ml-4 mr-4" :class="{
                        'mt-3': $vuetify.breakpoint.mdAndUp,
                        'mt-0': $vuetify.breakpoint.smAndDown
                    }">
                        <h3 class="heading font-weight-regular">
                            {{membre.nom}}
                        </h3>
                        <p class="grey-text mb-0">
                            {{membre.cv}}
                        </p>
                        <!--<v-icon small color="black">panorama_fish_eye</v-icon>-->
                        <v-breadcrumbs :items="membre.cercles"
                                       class="d-inline pa-0 subheading bullet-like" small>
                            <template slot="item" slot-scope="props" class="">
                                <a href="#"
                                   @click.prevent="Scroll.allerALaSection(cercle(props.item).containerId, cercle(props.item).lien)"
                                   v-if="!cercleEstDesactive(props.item)">
                                    {{nomDeCercle(props.item)}}
                                </a>
                                <span v-if="cercleEstDesactive(props.item)" class="pl-1 pr-1">{{nomDeCercle(props.item)}}</span>
                            </template>
                            <v-icon slot="divider" class="pa-0 ma-0 caption">lens</v-icon>
                        </v-breadcrumbs>

                        <!--<div class="d-inline" >-->

                        <!--<v-icon v-if="index < membre.cercles.length - 1" small class="mb-1">panorama_fish_eye</v-icon>-->
                        <!--</div>-->
                        <!--<v-card flat style="background-color: transparent;">-->
                        <!--<v-card-title class="subheading">-->
                        <!--{{membre.nom}}-->
                        <!--</v-card-title>-->
                        <!--<v-card-text>-->

                        <!--</v-card-text>-->
                        <!--</v-card>-->
                    </v-flex>
                </v-layout>
            </v-flex>
            <!--<v-flex xs0 lg2></v-flex>-->
        </v-layout>
        <!--<v-layout row>-->
        <!--<v-flex xs12>-->
        <!--<img :src='require("../assets/2015-06-05 16.20.45.jpg")' width="50%">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <v-parallax
                :height="parallaxSize"
                :src="require('../assets/peinture-rogner.jpg')"
        ></v-parallax>
        <v-layout row wrap class="mb-1 mt-5" id="cercle">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Comités actifs
                </h1>
            </v-flex>
        </v-layout>
        <Cercle title="Collaborium et espace de vie" anchor="collaborium" image="travailler au LL.jpg">
            <div slot="subtitle">
                Central, flexible, collectif, le Collaborium est l'espace-temps de collaboration, terme francisé pour
                "Coworking space".
            </div>
            <div slot="content">
                <p class="">
                    Accès à un espace de travail avec internet
                    <v-icon>wifi</v-icon>
                    , machine à café
                    <v-icon>fa-coffee</v-icon>
                    , cuisine pour vous faire à manger
                    <v-icon>fastfood</v-icon>
                    , divans
                    <v-icon>fa-couch</v-icon>
                    pour
                    relaxer, autres travailleurs et travailleuses autonomes avec qui échanger (ou vous pouvez
                    apporter vos écouteurs pour créer votre espace perso), table de ping pong
                    <v-icon>fa-table-tennis</v-icon>
                    et babyfoot pour
                    se changer les
                    idées: le Collaborium au Loco Local c'est tout ça et bien plus encore!
                </p>
                <p>
                    Venez l'essayer!
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Groupe d'achat" anchor="groupe-achat" image="groupe-achat.jpg">
            <!--https://pixabay.com/fr/haricots-assortiment-agriculture-3861864/-->
            <div slot="subtitle">
                Commander des produits biologiques, locaux, en grand format pour limiter la quantité d'emballage, et
                acheter ensemble pour réduire le coût d'achat et augmenter la diversité et l'accessibilité d'une
                nourriture saine et responsable.
            </div>
            <div slot="content">
                <p>
                    Manger devient alors un moyen de constuire une communauté durable et autonome, saine et solidaire.
                </p>
                <v-card class="mt-4">
                    <v-list>
                        <v-list-tile href="mailto:groupe.achat.hg@gmail.com,she_know@hotmail.com">
                            <v-list-tile-action>
                                <v-icon>mail</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Demande d'adhésion à groupe.achat.hg@gmail.com
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile href="https://foodclub.org/bonaventure">
                            <v-list-tile-action>
                                <v-icon>fa-clipboard-list</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Logiciel de commande
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                href="http://horizonsgaspesiens.net/sites/default/files/Compte-rendu_2018-01-17_0.pdf">
                            <v-list-tile-action>
                                <v-icon>picture_as_pdf</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Compte rendu de réunion
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Page Pourpre" anchor="page-pourpre" :image="pagePourpreImages">
            <div slot="subtitle">
                Bibliothèque féministe, trans, queer et inclusive
            </div>
            <div slot="content">
                <p class="">
                    La bibliothèque la Page Pourpre, c'est un espace de rencontre et un centre de référence permettant
                    d'emprunter gratuitement des livres sur diverses questions féministes, queer, intersectionelles, ou
                    autrement connexe, ainsi que des ouvrages de fiction et de poésie touchant à notre thématique. Sera
                    éventuellement disponible une sélection de livres pour enfants qui vont à l'encontre des stéréotypes
                    de genre et parlent de transsexualité, d'homoparentalité et d'éducation non-binaire, mais également
                    des ressources sur l'éducation et la parentalité à l'extérieur de la binarité des genres.
                </p>
            </div>
        </Cercle>
        <Cercle title="POP DOC" anchor="pop-doc" :image="popDocImages">
            <div slot="subtitle"></div>
            <div slot="content">
                <p class="">
                    Les Soirées Pop Doc du Loco Local ont pour objectif d'offrir aux gens de la Baie-des-Chaleurs la
                    possibilité de s'exposer à des réalités culturelles différentes à travers le documentaire et
                    d'échanger sur des sujets sociaux et politiques qui traversent difficilement le filtre des médias
                    conventionnels dans les régions éloignées du Québec, comme la Gaspésie.
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <Cercle title="Produits Lemieux" anchor="produits-lemieux">
            <div slot="image">
                <div id="fb-root"></div>
                <div class="fb-video" data-href="https://www.facebook.com/locolocal1/videos/2443361492361573/"
                     data-width="500" data-show-text="false">
                    <div class="fb-xfbml-parse-ignore">
                        <blockquote cite="https://www.facebook.com/locolocal1/videos/2443361492361573/">
                            <a href="https://www.facebook.com/locolocal1/videos/2443361492361573/">How to Share With
                                Just Friends</a>
                            <p>How to share with just friends.</p>
                            Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5,
                            2014
                        </blockquote>
                    </div>
                </div>
            </div>
            <div slot="subtitle">
                En plus de sentir bon, d'utiliser des produits nettoyants qui ne sont pas nocifs pour votre santé et
                celle de vos enfants, de protéger l'environnement en utilisant des produits biodégradables, choisissez
                le vrac pour favoriser la réutilisation des contenants!
            </div>
            <div slot="content">
                <p class="">
                    Achetez les produits Lemieux au Loco Local. Si vous avez des questions, écrivez-nous à
                    <a href="mailto:horizonsgaspesiens@gmail.com">
                        horizonsgaspesiens@gmail.com
                    </a>
                    ou
                    <v-btn @click="$refs.phoneDialog.show()">téléphonez nous</v-btn>
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Comptabilité" anchor="comptable" class="pa-0" v-if="false">
            <div slot="image" class="pa-0">
                <v-card
                        class="text-xs-center pa-0"
                        dark
                        width="100%"
                >
                    <v-card-text id="dessin-comptable" style="min-height:400px;" class="" width="100%"></v-card-text>
                    <v-card-text>
                        <div class="display-1 font-weight-thin">Balance Revenus/Dépenses 2018-2019</div>
                    </v-card-text>
                    <v-card-title class="pt-1">
                        <v-spacer></v-spacer>
                        Balance totale: {{balanceTotale}}$
                        <v-spacer></v-spacer>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center pa-0">
                        <v-btn block flat
                               href="https://www.dropbox.com/s/4410d7cmwhgnurm/Comptabilit%C3%A9%202018-2019.ods?dl=0">
                            <!--<v-icon class="mr-2">fa-dropbox</v-icon>-->
                            Détails sur fichier Dropbox. Faites télécharger.
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div slot="subtitle">
                La transparence est vitale à l'autogestion. L'argent est un composant important du pouvoir. Faut donc
                que ça soit clair !
            </div>
            <div slot="content">
                <p>
                    Il n'y a pas encore d'expert en comptabilité dans notre comité. Par contre, on s'améliore tout le
                    temps.
                </p>
                <p>
                    On manque d'argent par contre mais ça, c'est la responsabilité de tous les membres et du
                    <router-link to="/cercle/financement">comité financement !</router-link>
                </p>
                <p>
                    De plus, en date de janvier 2019, nous avons une dette sans intérêts de 11955.89$ sur laquelle nous
                    payons 100$ / mois.
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
<!--        <Cercle title="Ping Pong" anchor="ping-pong" class="pa-0" image="ping-pong.jpg">-->
<!--            &lt;!&ndash;https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/&ndash;&gt;-->
<!--            <div slot="subtitle">-->
<!--                Sport de raquette dans un espace ouvert 24/24, été comme hiver-->
<!--            </div>-->
<!--            <div slot="content">-->
<!--                <p>-->
<!--                    Consultez le-->
<!--                    <a href="#" @click.prevent="Scroll.allerALaSection('calendrier')">-->
<!--                        calendrier de réservation-->
<!--                    </a>-->
<!--                    et-->
<!--                    <v-btn @click="$refs.phoneDialog.show()">-->
<!--                        téléphonez nous-->
<!--                    </v-btn>-->
<!--                    pour savoir comment réserver la première fois.-->
<!--                </p>-->
<!--                <p>-->
<!--                    Prix suggéré de 5$/personne par heure. Pour réserver, il faut-->
<!--                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQu47n0_bPKPO2kDAlWLdvg4JoJC-pasQWeBVQWVP2OI5tdw/viewform">-->
<!--                        être membre.-->
<!--                    </a>-->
<!--                </p>-->
<!--            </div>-->
<!--        </Cercle>-->
        <v-divider></v-divider>
        <Cercle title="Financement" anchor="financement" class="pa-0" image="sourie.jpg">
            <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
            <div slot="subtitle">
                La créativité, la débrouille et la persévérence sont au rendez-vous pour ceux qui veulent développer
                leur sens de l'entreprenariat social.
            </div>
            <div slot="content">
                <p>
                    Et continuer à rendre la merveilleuse expérience du Loco Local possible pour plus longtemps encore.
                </p>
                <p>
                    La location de salle, la vente de produits nettoyants, le chocolat, les serviettes sanitaires etc,
                    le groupe d'achat, le reconditionnement d'ordinateur sont tous des moyens actuels de payer le local.
                </p>
                <p>
                    Venez donc y ajouter votre touche personnelle.
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Notre structure de gouvernance: l'Holacracy!" anchor="gouvernance" class="pa-0"
                :image="gouvernanceImages">
            <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
            <div slot="subtitle">
                L'Holacracy est une méthode de gestion horizontale qui fonctionne avec des cercles (comités) de travail
                et nous demandons à chacun des cercles
                de définir sa raison d'être au sein d'Horizons Gaspésiens, ses rôles et redevabilités.
            </div>
            <div slot="content">
                <v-card class="mb-4">
                    <v-card-title class="title">
                        À propos de l'Holacracy
                    </v-card-title>
                    <v-list>
                        <v-list-tile href="https://labdsurlholacracy.com/bande-dessinee-holacracy">
                            <v-list-tile-action>
                                <v-icon>fa-book-reader</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Bande dessinée
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                href="https://www.holacracy.org/webinar-recording">
                            <v-list-tile-action>
                                <v-icon>movie</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Vidéo
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                href="https://igipartners.com/constitution-holacracy">
                            <v-list-tile-action>
                                <v-icon>account_balance</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Principes
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-card>
                <p>
                    Les cercles et leurs membres sont énumérés sur ce site.
                </p>
                <p>
                    La raison d'être du cercle "Gouvernance" est d'installer la gestion participative dans Horizons
                    Gaspésiens.
                </p>
                <p>
                    <v-card>
                        <v-card-title class="title">
                            Cercles d'Horizons Gapésiens
                        </v-card-title>
                        <v-list>
                            <v-list-tile
                                    href="https://docs.google.com/document/d/1XQFmsfxNzZA4oryQ1IvUjf0otLuk0TjkVTEEglNEqE8">
                                <v-list-tile-action>
                                    <v-icon>fa-file</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-title>
                                    Octobre 2018
                                </v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <div style="width:100%" class="vh-center">
            <v-list>
                <v-list-tile
                        @click="comitesArchives = true">
                    <v-list-tile-action>
                        <v-icon>list</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Comités archivés
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </div>
        <v-divider></v-divider>
        <Calendrier :class="{
                'mt-5 mb-5': $vuetify.breakpoint.mdAndUp,
                'mt-5 mb-3': $vuetify.breakpoint.smAndDown
            }"></Calendrier>
        <v-divider></v-divider>
        <v-layout row wrap class="mb-1 mt-5" id="paiement">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Dons et paiements
                </h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="vh-center font-weight-thin">
            <v-flex xs12>
                <v-card flat :class="{
                'mt-5 mb-5': $vuetify.breakpoint.mdAndUp,
                'mt-5 mb-3': $vuetify.breakpoint.smAndDown
            }">
                    <v-layout row wrap fill-height>
                        <v-flex xs12 md6 class="text-xs-center">
                            <div class="mb-3 title">
                                Transferts par AccèsD Desjardins
                            </div>
                            <div class="mb-3 body-1">
                                <span class="font-weight-bold">Transit caisse</span> 40001
                                <span class="font-weight-bold">No Institution</span> 815
                                <span class="font-weight-bold">Folio</span> 0451286
                            </div>
                            <v-stepper non-linear v-model="desjardinsStepper" class="ml-4">
                                <v-stepper-header>
                                    <v-stepper-step editable :complete="desjardinsStepper > 2" step="1" color="black">
                                        Virement
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step editable :complete="desjardinsStepper > 2" step="2" color="black">
                                        Folio et Transit
                                    </v-stepper-step>

                                    <v-divider></v-divider>

                                    <v-stepper-step editable step="3" color="black">
                                        Fréquence
                                    </v-stepper-step>
                                </v-stepper-header>

                                <v-stepper-items>
                                    <v-stepper-content step="1">
                                        <v-card>
                                            <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                                <v-img :src="require('../assets/virement entre personnes.jpg')"></v-img>
                                            </v-card-text>
                                            <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                                Dans votre AccèsD, choisissez "Virez" puis "Virements entre personnes
                                                Desjardins"
                                            </v-card-text>
                                        </v-card>
                                    </v-stepper-content>

                                    <v-stepper-content step="2">
                                        <v-card
                                        >
                                            <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                                Cliquez sur l'onglet "Ajouter un bénéficiaire"
                                            </v-card-text>
                                            <v-card-title class="subheading pb-0">
                                                <span>
                                                <span class="font-weight-bold">Transit caisse</span>
                                                40001
                                                    </span>
                                                <v-divider
                                                        class="mx-3"
                                                        inset
                                                        vertical
                                                ></v-divider>
                                                <span>
                                                    <span class="font-weight-bold">
                                                        No Institution
                                                    </span>
                                                        815
                                                </span>
                                                <v-divider
                                                        class="mx-3"
                                                        inset
                                                        vertical
                                                ></v-divider>
                                                <span>
                                                    <span class="font-weight-bold">
                                                        Folio
                                                    </span>
                                                        0451286
                                                </span>
                                            </v-card-title>
                                            <!--<v-card-text v-if="$vuetify.breakpoint.mdAndUp">-->
                                            <!--<v-img :src="require('../assets/ajouter un bénéficiaire.png')"></v-img>-->
                                            <!--</v-card-text>-->
                                        </v-card>
                                    </v-stepper-content>

                                    <v-stepper-content step="3">
                                        <v-card
                                        >
                                            <v-card-title>
                                                Choisisez "Une fois le" pour un transfert ponctuel ou "Mensuelle" pour
                                                un don récurrent
                                            </v-card-title>
                                            <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                                <v-img :src="require('../assets/virement mensuel.png')"></v-img>
                                            </v-card-text>
                                        </v-card>
                                    </v-stepper-content>
                                </v-stepper-items>
                            </v-stepper>
                        </v-flex>
                        <v-flex xs12 md6 left>
                            <v-card-text class="text-xs-left">
                                <p>
                                    Vous voulez soutenir l'établissement durable de ce projet "pour et par" la
                                    communauté?
                                </p>
                                <ul>
                                    <li>
                                        Devenez membre utilisateurs-consommateurs de la Coopérative Horizons Gaspésiens,
                                        dont le Loco Local est un des projets.

                                    </li>
                                    <li>
                                        Devenez membre de soutien du Loco Local en faisant une donation mensuelle
                                        régulière
                                    </li>
                                    <li>
                                        Ouvrez un compte-client de Produits Lemieux pour 150$
                                    </li>
                                </ul>
                                <p>
                                    Un grand merci à toutes celles et ceux qui ont donné, en argent, temps, objets,
                                    idées,
                                    etc!
                                </p>
                                <h3>
                                    Modes de paiement
                                </h3>
                                <p>
                                    Argent comptant ou chèque: passez au Loco Local pour y déposer votre don dans une
                                    boîte
                                    de contribution volontaire à l'entrée, en argent comptant ou par chèque, en
                                    inscrivant
                                    que vous êtes passé-e!
                                </p>
                                <p>
                                    Virement entre personnes Desjardins par AccèsD, c'est la manière la plus simple et
                                    efficace pour nous.
                                </p>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
        <v-dialog v-model="comitesArchives" width="600">
            <v-card>
                <v-card-title class="title">
                    Comités plus ou moins actifs
                    <v-spacer></v-spacer>
                    <v-icon @click="comitesArchives = false">close</v-icon>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-tile
                                to="/le-demi">
                            <v-list-tile-title>
                                Le demi
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/loco-linux">
                            <v-list-tile-title>
                                Loco Linux
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/sel-de-mer">
                            <v-list-tile-title>
                                Sel De Mer
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/sécession">
                            <v-list-tile-title>
                                Sécession
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/bibliothèque">
                            <v-list-tile-title>
                                Bibliothèque collective
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/café-philo">
                            <v-list-tile-title>
                                Cafés philo
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile
                                to="/fablab">
                            <v-list-tile-title>
                                Fablab
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

    const profitRatioOnLemieux = 0.45;

    const revenus = [
        1524.13,
        927.81,
        1067.04,
        3662.73,
        967.12,
        1456.65,
        4150.01,
        1382.45,
        1013.02
    ];

    const depenses = [
        1227.8,
        1132.26,
        1310.23,
        1844.59,
        1057.76,
        1411.56,
        4969.86,
        1955.22,
        1337.11
    ];

    const lemieuxDepenses = [
        126.8,
        0,
        166.8,
        410.6,
        0,
        268.13,
        0,
        706.89,
        236.8
    ];

    const lemieuxRevenus = [
        588.74,
        276.72,
        465.69,
        446.07,
        559.58,
        172.9,
        348.75,
        696.35,
        376.2
    ];

    const dette = [
        8355.89,
        8255.89,
        8155.89,
        8055.89,
        7955.89,
        7855.89,
        7755.89,
        7655.89,
        7555.89
    ];

    const mois = [
        'avril',
        'mai',
        'juin',
        'juil',
        'août',
        'sept',
        'oct',
        'nov',
        'dec'
    ];

    import Cercle from '@/components/Cercle'
    import {GoogleCharts} from 'google-charts';
    import Calendrier from '@/components/Calendrier.vue'

    import PhoneDialog from '@/components/PhoneDialog'
    import Cercles from '@/Cercles'

    import Scroll from '@/Scroll'
    import Shuffle from '@/Shuffle'

    export default {
        name: 'home',
        components: {
            Cercle,
            PhoneDialog,
            Calendrier
        },
        computed: {
            toolbarLogoHeight: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 25;
                }
                return 30;
            },
            avatarSize: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 70;
                }
                return 100;
            },
            parallaxSize: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 200;
                }
                return 350;
            },
            host: function () {
                return window.location.hostname;
            }
        },
        methods: {
            trierCercles: function (cercles) {
                return cercles.sort(function (aClef, bClef) {
                    let aDesactive = this.cercle(aClef).desactive;
                    let bDesactive = this.cercle(bClef).desactive;
                    return (aDesactive === bDesactive) ? (
                            aClef.localeCompare(bClef)
                        ) :
                        aDesactive ? 1 : -1;
                }.bind(this));
            },
            nomDeCercle: function (clefDeCercle) {
                return this.cercles[clefDeCercle].nom;
            },
            cercle: function (clefDeCercle) {
                return this.cercles[clefDeCercle];
            },
            lienDeCercle: function (clefDeCercle) {
                let lien = this.cercles[clefDeCercle].lien;
                return lien ? lien : '/cercle/' + clefDeCercle;
            },
            cercleEstDesactive: function (clefDeCercle) {
                return this.cercles[clefDeCercle].desactive;
            },
            balanceCalculate: function () {
                let balance = [];
                for (let i = 0; i < revenus.length; i++) {
                    let balanceAbsolue = revenus[i] - depenses[i];
                    let balanceSansLemieux = balanceAbsolue - lemieuxRevenus[i] + lemieuxDepenses[i];
                    let balanceAvecProfitsLemieux = balanceSansLemieux + lemieuxRevenus[i] * profitRatioOnLemieux
                    this.balanceTotale += balanceAvecProfitsLemieux;
                    balance[i] = Math.floor(balanceAvecProfitsLemieux);
                }
                this.balanceTotale = Math.floor(this.balanceTotale);
                return balance;
            },
            dessinComptable() {
                let monthIndex = -1;
                let data = new GoogleCharts.api.visualization.arrayToDataTable([
                    ['Mois', 'Balance']
                ].concat(
                    this.balance.map(function (amount) {
                        monthIndex++;
                        return [
                            mois[monthIndex],
                            amount
                        ];
                    })
                ));
                let options = {
                    chart: {
                        title: '',
                        subtitle: '',
                    },
                    height: 400,
                    legend: {position: 'none'}
                };

                let chart = new GoogleCharts.api.charts.Line(document.getElementById('dessin-comptable'));

                chart.draw(data, GoogleCharts.api.charts.Line.convertOptions(options));

                GoogleCharts.api.visualization.events.addListener(chart, 'ready', function () {
                }.bind(this));

            },
            goToRightSection: function () {
                let section = "app";
                if (this.$route.params.comite) {
                    section = this.$route.params.comite;
                } else if (this.$route.name !== 'home') {
                    section = this.$route.name;
                }
                if (this.$route.path === "/paiement") {
                    section = "paiement";
                }
                if (["/calendrier", "/réservation"].indexOf(this.$route.path) > -1) {
                    section = "calendrier";
                }
                if (this.$route.path === "/benevole") {
                    section = "benevole";
                }
                Scroll.allerALaSection(section)
            }
        },
        data() {
            let membresDeCercles = [
                {
                    nom: "Hug Arsenault",
                    cv: "Cayen, artiste de murale et de la débrouille, danseur alternatif, aubergiste.",
                    avatar: "hug1-petit-carre.png",
                    cercles: ['ca', 'financement', 'gouvernance']
                },
                {
                    nom: "Gabrielle Margineanu",
                    cv: "Graphiste, Bédéiste, mère, humaniste",
                    avatar: "gaby-petit-carre.jpg",
                    cercles: ['ca', 'comptable']
                },
                {
                    nom: "Marie-Claire Larocque",
                    cv: "Herboriste, musicienne, graphiste, grimaceuse sympathique.",
                    avatar: "msea-petit-cube.jpg",
                    cercles: ['ca', 'espace', 'communication']
                },
                {
                    nom: "Bruno Mainville",
                    cv: "Peintre, Enseignant, Philosophe",
                    avatar: "bruno-petit-carre.jpg",
                    cercles: ['espace']
                },
                // {
                //     nom: "Roy Poirier",
                //     cv: "Électronicien, lauréat de la meilleure tarte de Maria",
                //     avatar: "roy-petit-carre.jpg",
                //     cercles: []
                // },
                {
                    nom: "Vincent Blouin",
                    cv: "Programmeur, architecte de carte mentale, sportif",
                    avatar: "chenzo2-petit-carre.jpg",
                    cercles: ['siteWeb']
                },
                // {
                //     nom: "Fred Guilbault",
                //     cv: "Programmeur, sécurité informatique, marin",
                //     avatar: "fred-guilbault-petit-carre.jpg",
                //     cercles: []
                // },
                {
                    nom: "Francine Larocque",
                    cv: "Enseignante alternative retraitée, jardinière, démocratie participative, chant",
                    avatar: "francine-petit-carre.png",
                    cercles: ['groupe']
                },
                {
                    nom: "Arielle Paiement",
                    cv: "Animation de groupe, Communication non violente, charpentière",
                    avatar: "arielle-petit-carre.jpg",
                    cercles: ['gouvernance']
                },
                {
                    nom: "Martin Zibeau",
                    cv: "Comédien, Philosophe, Expérimenteur social",
                    avatar: "martin-zibeau-petit-carre.jpg",
                    cercles: ['lemieux']
                },
                {
                    nom: "Solange Lecot",
                    cv: "Défend les droits des oppriméEs, Gestion bois et forêt",
                    avatar: "solange-petit-carre.jpeg",
                    cercles: ['ca', 'pagePourpre', 'popDoc']
                },
                {
                    nom: "Dominique Landry",
                    cv: "Organisatrice d'événements, Artiste de scène, Jardinère engagée",
                    avatar: "dô-petit-carre.jpg",
                    cercles: ['ca', 'pagePourpre', 'popDoc']
                }
            ];
            return {
                balanceTotale: 0,
                comitesArchives: false,
                Scroll: Scroll,
                desjardinsStepper: 1,
                dataLoaded: false,
                balance: 0,
                membresDeCerclesTries: Shuffle.array(membresDeCercles),
                membresDeCercles: membresDeCercles,
                cercles: Cercles,
                gouvernanceImages: [
                    "reunion-debout.jpg",
                    "gouvernance-2.jpg"
                ],
                pagePourpreImages: [
                    "page-pourpre.jpg",
                    "livres-pourpre.jpg"
                ],
                popDocImages: [
                    "popdoc/popdoc.jpg",
                    "popdoc/inuk-en-colere.jpg",
                    "popdoc/etats-unis-afrique.jpg",
                    "popdoc/chez-le-barbier.jpg",
                ]
            }
        },
        mounted() {
            this.membresDeCercles.forEach(function (membre) {
                membre.cercles = this.trierCercles(membre.cercles)
            }.bind(this));
            this.balance = this.balanceCalculate();
            GoogleCharts.load(this.dessinComptable, {'packages': ['line']});
            this.goToRightSection();
        }
    }
</script>
<style>

</style>
