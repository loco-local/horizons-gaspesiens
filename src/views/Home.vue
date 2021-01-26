<template>
  <div class="home">
    <v-layout
        align-center
        column
        justify-center
        id="header-banner"
        class="vh-center text-center"
    >
      <v-card color="transparent" flat>
        <v-card-title class="vh-center display-3 font-weight-thin mb-4 white--text" :class="{
          'display-2' : $vuetify.breakpoint.smAndDown
        }">
          <p>
            Géré de façon horizontale par ses membres
          </p>
        </v-card-title>
        <v-card-subtitle class="font-weight-thin white--text" style="font-size:19px;">
          Pour partager des ressources et des projets afin de s'adresser aux inégalités sociales et
          environnementales
        </v-card-subtitle>
      </v-card>
    </v-layout>
    <v-layout row wrap class="mb-1 mt-12" id="about">
      <v-flex xs12 class="text-center">
        <h1 class="display-2 font-weight-thin">
          À propos
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-6 mb-6" :class="{
      'pl-5 pr-2' : $vuetify.breakpoint.smAndDown
    }">
      <v-flex xs0 sm2 md3 lg4></v-flex>
      <v-flex xs12 sm8 md6 lg4 class="text-left text-md-justify">
        <p class="subtitle-1" style="font-size: 1.2em !important;font-weight: 300;line-height: 1.5;">
          Horizons Gaspésiens est une coopérative de solidarité.
          L'organisme chapeaute différentes initiatives
          <a href="#" @click.prevent="Scroll.allerALaSection('cercle')">
            présentes
          </a>
          et
          <a href="#" @click.prevent="comitesArchives=true">passées</a>
          portées par
          <a href="#" @click.prevent="Scroll.allerALaSection('benevole')">
            ses membres.
          </a>
          Les initiatives doivent être enlignées avec
          <a href="#" @click.prevent="visionModal=true">
            la vision,
          </a>
          <a href="#" @click.prevent="valeursModal=true">
            les valeurs
          </a>
          et
          <a href="#" @click.prevent="missionModal=true">
            la mission
          </a>
          et les décisions, soumises à
          <a href="#" @click.prevent="Scroll.allerALaSection('gouvernance')">
            notre gouvernance.
          </a>
          L'initiative principale est le Loco Local, un espace communautaire autogéré à
          <a href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
             target="_blank" style="white-space: nowrap;">
            <v-icon class="">location_on</v-icon>
            Bonaventure.
          </a>
        </p>
      </v-flex>
      <v-flex xs0 sm2 md3 lg4></v-flex>
    </v-layout>
    <v-divider class="mt-6 mb-12"></v-divider>
    <v-layout row wrap class="mb-12" id="benevole">
      <v-flex xs12 class="text-center">
        <h1 class="display-2 font-weight-thin">
          Membres
        </h1>
        <h4 class="subtitle-1 ">
          de comités actifs
        </h4>
      </v-flex>
    </v-layout>
    <v-row wrap class="">
      <!--<v-flex xs0 lg3></v-flex>-->
      <v-col cols="12" class="col-md-6" v-for="(membre, index) in membresDeCerclesTries" :key="membre.nom">
        <v-row class="mb-0" :class="{
                    'ml-5 pl-12': $vuetify.breakpoint.mdAndUp
              }">
          <v-col cols="2" v-if="index % 2 === 0 && $vuetify.breakpoint.mdAndUp"></v-col>
          <v-col cols="2" :class="{
                            'mr-10 ml-4': $vuetify.breakpoint.smAndDown
                        }">
            <v-avatar :size="avatarSize">
              <img :src='require("../assets/" + membre.avatar)' :alt="membre.nom">
            </v-avatar>
          </v-col>
          <v-col cols="8" class="text-left" :class="{
                        'mt-3': $vuetify.breakpoint.mdAndUp,
                        'mt-0': $vuetify.breakpoint.smAndDown
                    }">
            <h3 class="heading font-weight-regular">
              {{ membre.nom }}
            </h3>
            <p class="grey-text mb-0">
              {{ membre.cv }}
            </p>
            <!--<v-icon small color="black">panorama_fish_eye</v-icon>-->
            <v-breadcrumbs :items="membre.cercles"
                           class="d-inline pa-0 subtitle-1 bullet-like" small>
              <template slot="item" slot-scope="props" class="">
                <a href="#"
                   @click.prevent="Scroll.allerALaSection(cercle(props.item).containerId, cercle(props.item).lien)"
                   v-if="!cercleEstDesactive(props.item)">
                  {{ nomDeCercle(props.item) }}
                </a>
                <span v-if="cercleEstDesactive(props.item)" class="pl-1 pr-1">{{ nomDeCercle(props.item) }}</span>
              </template>
            </v-breadcrumbs>

            <!--<div class="d-inline" >-->

            <!--<v-icon v-if="index < membre.cercles.length - 1" small class="mb-1">panorama_fish_eye</v-icon>-->
            <!--</div>-->
            <!--<v-card flat style="background-color: transparent;">-->
            <!--<v-card-title class="subtitle-1">-->
            <!--{{membre.nom}}-->
            <!--</v-card-title>-->
            <!--<v-card-text>-->

            <!--</v-card-text>-->
            <!--</v-card>-->
          </v-col>
        </v-row>
      </v-col>
      <!--<v-flex xs0 lg2></v-flex>-->
    </v-row>
    <v-layout row wrap class="mb-12">
      <v-flex xs12 class="vh-center">
        <v-card max-width="450">
          <v-card-text class="text-center title font-weight-regular black--text">
            Merci aussi à tous nos autres membres. Votre implication est très précieuse
            <span style="color:red">❤</span>
          </v-card-text>
        </v-card>
      </v-flex>
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
    <v-layout row wrap class="pb-16 mt-12" id="cercle">
      <v-flex xs12 class="text-center">
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
    <v-divider class="mt-6 mb-12"></v-divider>
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
        <v-card class="mt-6">
          <v-list>
            <v-list-item href="mailto:groupe.achat.hg@gmail.com,she_know@hotmail.com">
              <v-list-item-action>
                <v-icon>mail</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Demande d'adhésion à groupe.achat.hg@gmail.com
              </v-list-item-title>
            </v-list-item>
            <v-list-item href="https://foodclub.org/bonaventure">
              <v-list-item-action>
                <v-icon>fa-clipboard-list</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Logiciel de commande
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                href="http://horizonsgaspesiens.net/sites/default/files/Compte-rendu_2018-01-17_0.pdf">
              <v-list-item-action>
                <v-icon>picture_as_pdf</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Compte rendu de réunion
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </Cercle>
    <!--    <v-divider class="mt-6 mb-12"></v-divider>-->
    <!--    <Cercle title="Bibliothèque d'outils" anchor="bibliothèque-outils" image="gardening-tools-1478547_1280.jpg"-->
    <!--            id="bibliothèque-outils">-->
    <!--      <div slot="subtitle">-->
    <!--        Marteaux, pinceaux, truelles, échelles, perceuses, ponceuses: plutôt que d'acheter un outil dont vous ne vous-->
    <!--        servirez qu'une fois dans votre vie, empruntez-le!-->
    <!--      </div>-->
    <!--      <div slot="content">-->
    <!--        <p>-->
    <!--          1) La bibliothèque d’outils entrepose des outils d’usage commun (cuisine, menuiserie, artisanat, mécanique,-->
    <!--          jardinage, électricité, etc.) qui sont mis à la disposition de ses abonné-e-s sous forme de prêts.-->

    <!--          2) Des activités pratiques peuvent être organisées dans l’année qui permettent aux abonné-e-s et à la-->
    <!--          population de développer leurs savoirs faire et leurs habiletés manuelles, en plus d’y faire des rencontres-->
    <!--          intergénérationnelles et interculturelles.-->
    <!--        </p>-->


    <!--        Des modèles ailleurs : La Remise à Montréal, La Patente à Québec.-->

    <!--        Pourquoi une bibliothèque d’outils?-->
    <!--        Pour :-->

    <!--        renforcer les liens sociaux;-->

    <!--        lutter contre le gaspillage des ressources;-->

    <!--        et augmenter la capacité d’agir de la communauté et de ses membres.-->

    <!--        BRICOLAGE – VOISINAGE – PARTAGE!-->

    <!--        Comment ça marche?-->
    <!--        Les abonnés ont accès à tous les outils de la bibliothèque.-->

    <!--        C’est en libre-service, ça veut dire qu’ils remplissent eux-mêmes la fiche d’emprunt.-->

    <!--        Ils peuvent emprunter l’outil pour 3 jours à 1 semaine, à moins qu’il ait été réservé par un autre abonné.-->

    <!--        Pour les consommables (lame, papier sablé, etc.) qui permettent aux outils de fonctionner, mais ont une durée de-->
    <!--        vie limitée, il sera possible d’en acheter sur place ou de payer une contribution à l’utilisation.-->


    <!--        Aussi, en lien avec le service du Partage’heure, des activités pourraient être organisées afin de se-->
    <!--        familiariser avec des outils, découvrir de nouveaux projets, et s’amuser à créer des objets avec d’autre monde!-->


    <!--        Note : le fonctionnement exact est encore à établir. Détails à venir.-->

    <!--        Comment je fais pour m’inscrire!-->
    <!--        Vous devez d’abord être membre de la coop HG.-->

    <!--        Puis, payer un abonnement annuel.-->

    <!--        Suivez le lien!-->

    <!--        Comment puis-je aider?-->
    <!--        Un comité sera mis en place pour assurer le bon fonctionnement du projet.-->

    <!--        Nous cherchons des gens qui auraient envie d’être responsable d’un volet des outils (gestion de la qualité,-->
    <!--        assurer une offre intéressante, etc.)-->

    <!--        Voici les postes à combler :-->

    <!--        Cuisine-->

    <!--        Production alimentaire-->

    <!--        Couture et/ou artisanat-->

    <!--        Mécanique vélo-->

    <!--        Rénovation (menuiserie, électricité, plomberie)-->

    <!--        Électronique-->

    <!--        Programmation-->

    <!--        Coordination (membership, $, lien avec HG, communications)-->


    <!--        Pour toute question, ou pour manifester votre intérêt à soutenir ou à participer au projet, contactez-->
    <!--        arielle.paiement@gmail.com-->
    <!--      </div>-->
    <!--    </Cercle>-->
    <v-divider class="mt-6 mb-12"></v-divider>
    <Cercle title="Bouger Ensemble" anchor="bouger-ensemble" image="bouger-ensemble-marche.jpg" id="bouger-ensemble">
      <div slot="subtitle">
        Ces deux choses, bouger et socialiser, qui manquent cruellement en temps de pandémie
      </div>
      <div slot="content">
        <v-tabs vertical>
          <v-tab>
            <v-icon left>
              nordic_walking
            </v-icon>
            <span v-if="$vuetify.breakpoint.mdAndUp">
          Club de marche
        </span>
          </v-tab>
          <v-tab>
            <v-icon left>
              self_improvement
            </v-icon>
            <span v-if="$vuetify.breakpoint.mdAndUp">
          Cours de Yoga
        </span>
          </v-tab>
          <v-tab>
            <v-icon left>
              emoji_emotions
            </v-icon>
            <span v-if="$vuetify.breakpoint.mdAndUp">
          Cours d'expression corporelle
        </span>
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-title>
                <v-icon class="mr-2">nordic_walking</v-icon>
                Club de marche
              </v-card-title>
              <v-card-subtitle class="pt-4 subtitle-1">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScqfFFdkCp0P4d0WpEPzogwVtkCgsluYXTUtmjIJwNN7mc3UA/viewform?fbclid=IwAR3kDF4pCFT8sDJG7w6m0sLVY3ePW5q3ZdFb8vn2V3fzNZc7MnHVY39GdRM"
                   target="_blank">
                  <v-icon class="mr-2">assignment</v-icon>
                  Formulaire d'inscription à remplir
                </a>
              </v-card-subtitle>
              <v-card-text class="text-h6 font-weight-regular">
                <p>
                  Vous souhaitez vous remettre en mouvement et vous ressentez l'envie et le besoin de partager des
                  moments de groupe ? Venez rejoindre notre club de marche !!! Cette activité sera animée par
                  plusieurs
                  animateurs : Céline Martin, psychomotricienne, Dominique Landry, animatrice culturelle, ...
                </p>
                <p>
                  Quand ? : Les activités se dérouleront le mercredi soir à partir de19h pour le mois de janvier. Pour
                  les prochains mois, possibilité de modification du jour et de l'heure de marche.
                </p>
                <p>
                  Où ? : départ au garage municipal de Saint-Siméon le mercredi 6 et 13 janvier. Possibilité d'autres
                  points de rendez-vous en fonction du choix du lieu de marche. N'hésitez pas à nous proposer les
                  places
                  où vous voulez marcher. Les marches pourront être dans le secteur autour de Bonaventure.
                </p>
                <p>
                  C'est une activité gratuite !!
                </p>
                <p>
                  Les lieux de marche et les heures ne sont pas fixes alors si vous voulez venir marcher avec nous
                  cette
                  année, inscrivez-vous !! Nous essayerons de nous adapter à vos demandes et vos propositions !!
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title>
                <v-icon class="mr-2">self_improvement</v-icon>
                Cours de Yoga
              </v-card-title>
              <v-card-subtitle class="subtitle-1 pt-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGH6o1WhMQI4lkCyeEX2a7lyTZQWAFiHEd1rphUrhSpEqIXQ/viewform?fbclid=IwAR2AYwXZ7feqFmdOztRY7qQLqfC1o9iO0GPoILQaH533bWVvwnY7Xfm2IB4"
                   target="_blank">
                  <v-icon class="mr-2">assignment</v-icon>
                  Formulaire d'inscription à remplir
                </a>
              </v-card-subtitle>
              <v-card-text class="text-h6 font-weight-regular">
                <p>
                  Envie de vous délier le corps et d'apaiser votre esprit? Venez faire du yoga avec Simon Carrothers!
                  Les cours ont lieu les mardi soir au Loco Local de Bonaventure (193A, avenue Grand-Pré).
                </p>
                <p>
                  Attention : cette activité se déroulera si nous repassons en zone orange ou jaune !!!
                </p>
                <p>
                  Coût: On demande une participation suggérée de 30$ à 100$ pour une session de 8 cours, selon vos
                  capacités financières.* Le paiement se réalisera par virement bancaire ou virement interact (voir
                  plus
                  loin dans la rubrique inscription).
                  Si les cours doivent cesser à cause de la COVID, les cours restants vous seront remboursés.
                  Les absences ne peuvent pas être remboursées.
                </p>
                <p>
                  *Contactez-nous en privé si vous avez des limites financières à participer au cours, c’est dans
                  l’esprit du Loco Local de permettre l’accès aux activités peu importe votre revenu!
                </p>
                <p>
                  Les places sont limitées !
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title>
                <v-icon class="mr-2">emoji_emotions</v-icon>
                Cours d'expression corporelle
              </v-card-title>
              <v-card-subtitle class="subtitle-1 pt-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJY6cc5vNe9nIIr2I73pf1HeCQB8x_Xid8PQ58G_X6i4xR1w/viewform?fbclid=IwAR1vYwLCoJElOwUygM2-XWy2aX5Mq4qfFn7VzQEaKm0blguYZSxqNSN7crw"
                   target="_blank">
                  <v-icon class="mr-2">assignment</v-icon>
                  Formulaire d'inscription à remplir
                </a>
              </v-card-subtitle>
              <v-card-text class="text-h6 font-weight-regular">
                <p>
                  Vous souhaitez explorer les possibilités de votre corps, votre créativité dans le mouvement,
                  développer votre conscience corporelle et le lâcher prise. Venez participer aux cours d’expression
                  corporelle et de danse libre avec Céline Martin, psychomotricienne, pour prendre plaisir à être en
                  mouvement ensemble et se faire du bien !
                </p>
                <p>
                  Quand ? : Les cours se dérouleront les samedis 9 et 16 janvier de 10h à 11h.
                </p>
                <p>
                  Où ? : Départ du Loco Local de Bonaventure (193A, avenue Grand-Pré). L'activité se déroulera à
                  l'extérieur (possibilité d'annulation et de remboursement si la météo n'est pas favorable). Dès que
                  possible les activités seront à l'intérieur du Loco Local.
                </p>
                <p>
                  Coût:
                  - Pour les 2 cours : de 10$ à 30$, selon vos capacités financières.* Le paiement se réalisera par
                  virement bancaire ou virement interact (voir plus loin dans la rubrique inscription).
                  - Au cours : contribution volontaire suggérée entre 5$ et 10$.
                </p>
                <p>
                  *Contactez-nous en privé si vous avez des limites financières à participer au cours, c’est dans
                  l’esprit du Loco Local de permettre l’accès aux activités peu importe votre revenu!
                </p>
                <p>
                  Les places sont limitées !
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <v-row>
          <v-col cols="12" class="vh-center">
            <v-card max-width="500" class="align-self-center">
              <v-card-actions class="text-h6 font-weight-regular">
                <v-spacer></v-spacer>
                <v-icon class="mr-8" large>6_ft_apart</v-icon>
                <v-icon class="mr-8" large>sanitizer</v-icon>
                <v-icon class="mr-8" large>masks</v-icon>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-card-actions class="text-h6 font-weight-regular">
                <v-spacer></v-spacer>
                Nous respectons les mesures sanitaires.
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </Cercle>
    <v-divider class="mt-6 mb-12"></v-divider>
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
    <v-divider class="mt-6 mb-12"></v-divider>
    <Cercle title="Imaginez demain" anchor="imaginez-demain" image="imagine-demain.jpg">
      <div slot="subtitle">
        C’est une tempête d’idées, une place pour exprimer nos visions les plus idéalistes, réalistes ou
        fantaisistes
      </div>
      <div slot="content">
        <p class="">
          Pour rêver collectivement d'un demain résilient, aligné à nos valeurs.
        </p>
        <p>
          Un espace aussi de débat d'idées, de liens et d’actions concrètes, d'humour.
          <br>
          <v-icon class="mr-2" color="orange">wb_sunny</v-icon>
          Que du positif S.V.P.
        </p>
        <v-list>
          <v-list-item href="https://www.facebook.com/groups/2573860966056660/">
            <v-list-item-action>
              <img
                  src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30">
            </v-list-item-action>
            <v-list-item-title>
              Notre page Facebook
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              href="https://docs.google.com/document/d/172_fsomZRI60H8MAF-V-sunT82BHllKV05htQLDBOKo/edit?fbclid=IwAR0gC3NsLbV1NCksk5LyRX0FjhLjV4r6C_0Gix7T5ls2E7JaO3fgDSAk9M8#">
            <v-list-item-action>
              <v-icon>fa-file</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Notre document Google Doc
              </v-list-item-title>
              <v-list-item-subtitle class="subtitle-1">
                Fable de la perdrix et la poule
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <p>
          À surveiller : discussions
          <v-icon class="mr-2">videocam</v-icon>
          zoom et
          rencontres physiques sur une
          <v-icon class="mr-2">beach_access</v-icon>
          plage.
        </p>
        <p>
          On câle la shot sur Facebook et on réinvente le monde !
        </p>
      </div>
    </Cercle>
    <!--    <v-divider></v-divider>-->
    <!--    <Cercle title="POP DOC" anchor="pop-doc" :image="popDocImages">-->
    <!--      <div slot="subtitle"></div>-->
    <!--      <div slot="content">-->
    <!--        <p class="">-->
    <!--          Les Soirées Pop Doc du Loco Local ont pour objectif d'offrir aux gens de la Baie-des-Chaleurs la-->
    <!--          possibilité de s'exposer à des réalités culturelles différentes à travers le documentaire et-->
    <!--          d'échanger sur des sujets sociaux et politiques qui traversent difficilement le filtre des médias-->
    <!--          conventionnels dans les régions éloignées du Québec, comme la Gaspésie.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--    </Cercle>-->
    <v-divider class="mt-6 mb-12"></v-divider>
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
    <v-divider class="mt-6 mb-12"></v-divider>
    <Cercle title="Comptabilité" anchor="comptable" class="pa-0" v-if="false">
      <div slot="image" class="pa-0">
        <v-card
            class="text-center pa-0"
            dark
            width="100%"
        >
          <v-card-text id="dessin-comptable" style="min-height:400px;" class="" width="100%"></v-card-text>
          <v-card-text>
            <div class="display-1 font-weight-thin">Balance Revenus/Dépenses 2018-2019</div>
          </v-card-text>
          <v-card-title class="pt-1">
            <v-spacer></v-spacer>
            Balance totale: {{ balanceTotale }}$
            <v-spacer></v-spacer>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-actions class="justify-center pa-0">
            <v-btn block text
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
    <v-divider class="mt-6 mb-12"></v-divider>
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
    <v-divider class="mt-6 mb-12"></v-divider>
    <Cercle title="Notre structure de gouvernance: l'Holacracy!" anchor="gouvernance" class="pa-0"
            :image="gouvernanceImages">
      <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
      <div slot="subtitle">
        L'Holacracy est une méthode de gestion horizontale qui fonctionne avec des cercles (comités) de travail
        et nous demandons à chacun des cercles
        de définir sa raison d'être au sein d'Horizons Gaspésiens, ses rôles et redevabilités.
      </div>
      <div slot="content">
        <v-card class="mb-6">
          <v-card-title class="title">
            À propos de l'Holacracy
          </v-card-title>
          <v-list>
            <v-list-item href="https://labdsurlholacracy.com/bande-dessinee-holacracy">
              <v-list-item-action>
                <v-icon>fa-book-reader</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Bande dessinée
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                href="https://www.holacracy.org/webinar-recording">
              <v-list-item-action>
                <v-icon>movie</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Vidéo
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                href="https://igipartners.com/constitution-holacracy">
              <v-list-item-action>
                <v-icon>account_balance</v-icon>
              </v-list-item-action>
              <v-list-item-title class="text-h6 font-weight-regular">
                Principes
              </v-list-item-title>
            </v-list-item>
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
              <v-list-item
                  href="https://docs.google.com/document/d/1XQFmsfxNzZA4oryQ1IvUjf0otLuk0TjkVTEEglNEqE8">
                <v-list-item-action>
                  <v-icon>fa-file</v-icon>
                </v-list-item-action>
                <v-list-item-title class="text-h6 font-weight-regular">
                  Octobre 2018
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </p>
      </div>
    </Cercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <div style="width:100%" class="vh-center">
      <v-list>
        <v-list-item
            @click="comitesArchives = true">
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            Comités archivés
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <v-divider class="mt-6 mb-12"></v-divider>
    <Calendrier :class="{
                'mt-5 mb-12': $vuetify.breakpoint.mdAndUp,
                'mt-5 mb-4': $vuetify.breakpoint.smAndDown
            }"></Calendrier>
    <v-divider class="mt-6 mb-12"></v-divider>
    <v-layout row wrap class="mb-1 mt-12" id="paiement">
      <v-flex xs12 class="text-center">
        <h1 class="display-2 font-weight-thin">
          Dons et paiements
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="font-weight-thin">
      <v-flex xs12>
        <v-card flat :class="{
                'mt-5 mb-12': $vuetify.breakpoint.mdAndUp,
                'mt-5 mb-4': $vuetify.breakpoint.smAndDown
            }">
          <v-layout row wrap fill-height>
            <v-flex xs12 md6 class="">
              <div class="text-h4  mb-8">
                Comment payer
              </div>
              <v-layout row wrap class="pb-2">
                <v-flex xs0 md2></v-flex>
                <v-flex xs12 md8 class="text-md-left text-center">
                  <v-icon class="mr-2">email</v-icon>
                  <span class="font-weight-bold">Par courriel</span>
                  à horizonsgaspesiens@gmail.com
                  <v-btn text v-clipboard:copy="'horizonsgaspesiens@gmail.com'" small>copier</v-btn>
                </v-flex>
              </v-layout>
              <v-divider class="mt-8 mb-8"></v-divider>
              <v-layout row wrap>
                <v-flex xs0 md2 xl2></v-flex>
                <v-flex xs12 md4 xl3 class="text-md-left text-center" :class="{
                                    'pb-2':  $vuetify.breakpoint.smAndDown
                                }">
                  <span class="font-weight-bold">Par transit desjardins</span>
                </v-flex>
                <v-flex xs12 md6 xl7 class="text-md-left text-center pl-6 pb-6" style="margin-top:-7px;">
                  <div>
                    <span class="font-weight-bold">Transit caisse:</span> 40001
                    <v-btn text v-clipboard:copy="'40001'" small>copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold">No Institution:</span> 815
                    <v-btn text v-clipboard:copy="'815'" small>copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold">Folio:</span> 0451286
                    <v-btn text v-clipboard:copy="'0451286'" small>copier</v-btn>
                  </div>
                </v-flex>
              </v-layout>
              <v-card>
                <v-card-title class="font-weight-bold text-center vh-center">
                  Instructions de paiement détaillées
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-tabs
                      color="black"
                      slider-color="#ff3301"
                      grow
                      class="pa-0 ma-0"
                      v-model="paiementTab"
                  >
                    <v-tab @click.prevent="paiementTab=0" href="#">
                      <v-icon class="mr-6">email</v-icon>
                      Par courriel
                    </v-tab>
                    <v-tab @click.prevent="paiementTab=1" href="#">
                      Par transit Desjardins
                    </v-tab>
                    <v-tab-item>
                      <v-stepper non-linear v-model="paiementCourrielStepper" class="ml-6">
                        <v-stepper-header>
                          <v-stepper-step editable :complete="paiementCourrielStepper > 1"
                                          step="1"
                                          color="black">
                            Virement
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step editable :complete="paiementCourrielStepper > 2"
                                          step="2"
                                          color="black">
                            Destinataire
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                          <v-stepper-content step="1">
                            <v-card>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img :src="require('../assets/virement interact.jpg')"></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                Dans votre AccèsD, choisissez "Virez" puis "Virements
                                Interact"
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>

                          <v-stepper-content step="2">
                            <v-card
                            >
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img :src="require('../assets/faire virement.png')"></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                Comme question de sécurité, vous pouvez inscrire:
                                Q:Dans quelle ville est le Loco Local?
                                R:Bonaventure
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>
                    </v-tab-item>
                    <v-tab-item>
                      <v-stepper non-linear v-model="desjardinsStepper" class="ml-6">
                        <v-stepper-header>
                          <v-stepper-step editable :complete="desjardinsStepper > 1" step="1"
                                          color="black">
                            Virement
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step editable :complete="desjardinsStepper > 2" step="2"
                                          color="black">
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
                                Dans votre AccèsD, choisissez "Virez" puis "Virements
                                entre
                                personnes
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
                              <v-card-title class="subtitle-1 pb-0">
                                                <span>
                                                <span class="font-weight-bold">Transit caisse</span>
                                                40001
                                                    </span>
                                <v-divider
                                    class="mx-4"
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
                                    class="mx-4"
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
                                Choisisez "Une fois le" pour un transfert ponctuel ou
                                "Mensuelle" pour
                                un don récurrent
                              </v-card-title>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img :src="require('../assets/virement mensuel.png')"></v-img>
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>
                    </v-tab-item>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 left>
              <v-card-text class="text-left text-h6 font-weight-regular">
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
    <v-dialog v-model="visionModal" width="300">
      <v-card>
        <v-card-title class="title">
          Vision
          <v-spacer></v-spacer>
          <v-icon @click="visionModal = false">close</v-icon>
        </v-card-title>
        <v-card-text class="text-left text-h6 font-weight-regular black--text" style="line-height: 1.5;">
          Une communauté autogérée ayant une empreinte écologique et sociale réduite sur son milieu. L’abondance s’y
          mesure par la multiplicité et la diversité du lien social, par l’épanouissement des individus, ainsi que par
          l’accès égalitaire et juste aux ressources.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="missionModal" width="300">
      <v-card>
        <v-card-title class="title">
          Mission
          <v-spacer></v-spacer>
          <v-icon @click="missionModal = false">close</v-icon>
        </v-card-title>
        <v-card-text class="text-left text-h6 font-weight-regular black--text" style="line-height: 1.5">
          Stimuler et soutenir la mise en commun et le partage de ressources, de lieux, de connaissances comme forme
          concrète de solidarité pour augmenter l’autonomie et la résilience des individus et des collectivités.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="valeursModal" width="375">
      <v-card>
        <v-card-title class="title">
          Valeurs
          <v-spacer></v-spacer>
          <v-icon @click="valeursModal = false">close</v-icon>
        </v-card-title>
        <v-list class="text-left">
          <v-list-item v-for="valeur in valeurs" :key="valeur">
            <v-list-item-content>
              <v-list-item-title>
                {{ valeur }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    <v-dialog v-model="comitesArchives" width="600">
      <v-card>
        <v-card-title class="title">
          Comités plus ou moins actifs
          <v-spacer></v-spacer>
          <v-icon @click="comitesArchives = false">close</v-icon>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
                to="/le-demi">
              <v-list-item-title>
                Le demi
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/loco-linux">
              <v-list-item-title>
                Loco Linux
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/sel-de-mer">
              <v-list-item-title>
                Sel De Mer
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/sécession">
              <v-list-item-title>
                Sécession
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/bibliothèque">
              <v-list-item-title>
                Bibliothèque collective
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/café-philo">
              <v-list-item-title>
                Cafés philo
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/fablab">
              <v-list-item-title>
                Fablab
              </v-list-item-title>
            </v-list-item>
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
      return;
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
      if (["/calendrier", "/reservation"].indexOf(this.$route.path) > -1) {
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
        avatar: "hug_petit_carre.jpg",
        cercles: ['ca', 'financement', 'gouvernance', 'imaginezDemain']
      },
      {
        nom: "Gabrielle Margineanu",
        cv: "Graphiste, Bédéiste, mère, humaniste",
        avatar: "gaby-petit-carre.jpg",
        cercles: ['ca', 'comptable']
      },
      // {
      //   nom: "Marie-Claire Larocque",
      //   cv: "Herboriste, musicienne, graphiste, grimaceuse sympathique.",
      //   avatar: "msea-petit-cube.jpg",
      //   cercles: ['ca', 'espace', 'communication']
      // },
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
        cercles: ['ca', 'pagePourpre']
      },
      {
        nom: "Dominique Landry",
        cv: "Organisatrice d'événements, Artiste de scène, Jardinère engagée",
        avatar: "dô-petit-carre.jpg",
        cercles: ['ca', 'pagePourpre', 'bougerEnsemble']
      },
      {
        nom: "Ann Guilbault",
        cv: "Citoyenne terrestre naturalisée, Va-nu-pieds estivale, Descendante de la rivière",
        avatar: "AnnGuilbault-petit-carre.jpg",
        cercles: ['ca']
      }
    ];
    return {
      balanceTotale: 0,
      comitesArchives: false,
      Scroll: Scroll,
      paiementTab: 0,
      desjardinsStepper: 1,
      paiementCourrielStepper: 1,
      dataLoaded: false,
      balance: 0,
      membresDeCerclesTries: Shuffle.array(membresDeCercles),
      membresDeCercles: membresDeCercles,
      cercles: Cercles,
      bougerEnsembleTab: 0,
      visionModal: false,
      missionModal: false,
      valeursModal: false,
      valeurs: [
        'Respect',
        'Bienveillance',
        'Ouverture',
        'Solidarité',
        'Inclusion / Non-discrimination / Féminisme',
        'Partage',
        'Autonomie individuelle',
        'Égalité / Considération'
      ],
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
