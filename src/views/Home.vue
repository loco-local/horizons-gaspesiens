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
        <v-card-title
            class="vh-center font-weight-thin mb-4 white--text"
            :class="{
            'display-2': $vuetify.breakpoint.lgAndDown,
            'display-3': $vuetify.breakpoint.xl,
          }"
        >
          <p>
            Géré de façon
            horizontale
            par ses membres
          </p>
        </v-card-title>
        <v-card-subtitle
            class="font-weight-thin white--text"
            style="font-size: 19px; line-height: 2"
        >
          Pour partager des ressources et des projets afin de s'adresser aux
          inégalités sociales et environnementales
        </v-card-subtitle>
      </v-card>
    </v-layout>
    <v-layout row wrap class="mb-1 mt-12" id="about">
      <v-flex xs12 class="text-center">
        <h1 class="display-2 font-weight-thin">À propos</h1>
      </v-flex>
    </v-layout>
    <v-layout
        row
        wrap
        class="mt-6 mb-6"
        :class="{
        'pl-5 pr-2': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-flex xs0 sm2 md3 lg4></v-flex>
      <v-flex xs12 sm8 md6 lg4 class="text-left text-md-justify body-1">
        <p
            class="body-1"
            style="
            font-size: 1.2em !important;
            font-weight: 300;
            line-height: 1.5;
          "
        >
          Horizons Gaspésiens est une coopérative de solidarité. L'organisme
          chapeaute différentes initiatives
          <a href="#" @click.prevent="Scroll.allerALaSection('cercle')">
            présentes
          </a>
          et
          <a href="#" @click.prevent="comitesArchives = true">passées</a>
          portées par
          <a href="#" @click.prevent="Scroll.allerALaSection('benevole')">
            ses membres.
          </a>
          Les initiatives doivent être enlignées avec
          <a href="#" @click.prevent="visionModal = true"> la vision, </a>
          <a href="#" @click.prevent="valeursModal = true"> les valeurs </a>
          et
          <a href="#" @click.prevent="missionModal = true"> la mission </a>
          et les décisions, soumises à
          <router-link to="/gouvernance">
            notre gouvernance.
          </router-link>
          L'initiative principale est le Loco Local, un espace communautaire
          autogéré à
          <a
              href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
              target="_blank"
              style="white-space: nowrap"
          >
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
        <h1 class="display-2 font-weight-thin">Membres</h1>
        <h4 class="subtitle-1">de comités actifs</h4>
      </v-flex>
    </v-layout>
    <v-row wrap class="body-2">
      <!--<v-flex xs0 lg3></v-flex>-->
      <v-col
          cols="12"
          class="col-md-6"
          v-for="(membre, index) in membresDeCerclesTries"
          :key="membre.nom"
      >
        <v-row
            class="mb-0"
            :class="{
            'ml-5 pl-12': $vuetify.breakpoint.mdAndUp,
          }"
        >
          <v-col
              cols="2"
              v-if="index % 2 === 0 && $vuetify.breakpoint.mdAndUp"
          ></v-col>
          <v-col
              cols="2"
              :class="{
              'mr-10 ml-4': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-avatar :size="avatarSize">
              <img
                  :src="require('../assets/' + membre.avatar)"
                  :alt="membre.nom"
              />
            </v-avatar>
          </v-col>
          <v-col
              cols="8"
              class="text-left"
              :class="{
              'mt-3': $vuetify.breakpoint.mdAndUp,
              'mt-0': $vuetify.breakpoint.smAndDown,
            }"
          >
            <h3 class="heading font-weight-regular">
              {{ membre.nom }}
            </h3>
            <p class="grey-text mb-0">
              {{ membre.cv }}
            </p>
            <!--<v-icon small color="black">panorama_fish_eye</v-icon>-->
            <v-breadcrumbs
                :items="membre.cercles"
                class="d-inline pa-0 subtitle-1 bullet-like"
                small
            >
              <template slot="item" slot-scope="props" class="">
                <router-link
                    :to="cercle(props.item).lien"
                    v-if="!cercleEstDesactive(props.item)"
                >
                  {{ nomDeCercle(props.item) }}
                </router-link>
                <span v-if="cercleEstDesactive(props.item)" class="pl-1 pr-1">{{
                    nomDeCercle(props.item)
                  }}</span>
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
          <v-card-text
              class="text-center title font-weight-regular black--text"
          >
            Merci aussi à tous nos autres membres. Votre implication est très
            précieuse
            <span style="color: red">❤</span>
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
        <h1 class="display-2 font-weight-thin">Comités actifs</h1>
      </v-flex>
    </v-layout>
    <CollaboriumCercle></CollaboriumCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <GroupeAchatCercle></GroupeAchatCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <BibliothequeOutilsCercle></BibliothequeOutilsCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <BougerEnsembleCercle></BougerEnsembleCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <PagePourpreCercle></PagePourpreCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
<!--    <Cercle-->
<!--        title="Imaginez demain"-->
<!--        anchor="imaginez-demain"-->
<!--        image="imagine-demain.jpg"-->
<!--    >-->
<!--      <div slot="subtitle">-->
<!--        C’est une tempête d’idées, une place pour exprimer nos visions les plus-->
<!--        idéalistes, réalistes ou fantaisistes-->
<!--      </div>-->
<!--      <div slot="content">-->
<!--        <p class="">-->
<!--          Pour rêver collectivement d'un demain résilient, aligné à nos valeurs.-->
<!--        </p>-->
<!--        <p>-->
<!--          Un espace aussi de débat d'idées, de liens et d’actions concrètes,-->
<!--          d'humour.-->
<!--          <br/>-->
<!--          <v-icon class="mr-2" color="orange">wb_sunny</v-icon>-->
<!--          Que du positif S.V.P.-->
<!--        </p>-->
<!--        <v-list>-->
<!--          <v-list-item href="https://www.facebook.com/groups/2573860966056660/">-->
<!--            <v-list-item-action>-->
<!--              <img-->
<!--                  src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30"-->
<!--              />-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-title> Notre page Facebook</v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item-->
<!--              href="https://docs.google.com/document/d/172_fsomZRI60H8MAF-V-sunT82BHllKV05htQLDBOKo/edit?fbclid=IwAR0gC3NsLbV1NCksk5LyRX0FjhLjV4r6C_0Gix7T5ls2E7JaO3fgDSAk9M8#"-->
<!--          >-->
<!--            <v-list-item-action>-->
<!--              <v-icon>fa-file</v-icon>-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title> Notre document Google Doc</v-list-item-title>-->
<!--              <v-list-item-subtitle class="subtitle-1">-->
<!--                Fable de la perdrix et la poule-->
<!--              </v-list-item-subtitle>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--        <p>-->
<!--          À surveiller : discussions-->
<!--          <v-icon class="mr-2">videocam</v-icon>-->
<!--          zoom et rencontres physiques sur une-->
<!--          <v-icon class="mr-2">beach_access</v-icon>-->
<!--          plage.-->
<!--        </p>-->
<!--        <p>On câle la shot sur Facebook et on réinvente le monde !</p>-->
<!--      </div>-->
<!--    </Cercle>-->
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
    <ProduitsNettoyantCercle></ProduitsNettoyantCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
<!--    <Cercle title="Comptabilité" anchor="comptable" class="pa-0">-->
<!--      <div slot="image" class="pa-0">-->
<!--        <v-card class="text-center pa-0" dark width="100%">-->
<!--          <v-card-text-->
<!--              id="dessin-comptable"-->
<!--              style="min-height: 400px"-->
<!--              class=""-->
<!--              width="100%"-->
<!--          ></v-card-text>-->
<!--          <v-card-text>-->
<!--            <div class="display-1 font-weight-thin">-->
<!--              Balance Revenus/Dépenses 2018-2019-->
<!--            </div>-->
<!--          </v-card-text>-->
<!--          <v-card-title class="pt-1">-->
<!--            <v-spacer></v-spacer>-->
<!--            Balance totale: {{ balanceTotale }}$-->
<!--            <v-spacer></v-spacer>-->
<!--          </v-card-title>-->

<!--          <v-divider></v-divider>-->

<!--          <v-card-actions class="justify-center pa-0">-->
<!--            <v-btn-->
<!--                block-->
<!--                text-->
<!--                href="https://www.dropbox.com/s/4410d7cmwhgnurm/Comptabilit%C3%A9%202018-2019.ods?dl=0"-->
<!--            >-->
<!--              &lt;!&ndash;<v-icon class="mr-2">fa-dropbox</v-icon>&ndash;&gt;-->
<!--              Détails sur fichier Dropbox. Faites télécharger.-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </div>-->
<!--      <div slot="subtitle">-->
<!--        La transparence est vitale à l'autogestion. L'argent est un composant-->
<!--        important du pouvoir. Faut donc que ça soit clair !-->
<!--      </div>-->
<!--      <div slot="content">-->
<!--        <p>-->
<!--          Il n'y a pas encore d'expert en comptabilité dans notre comité. Par-->
<!--          contre, on s'améliore tout le temps.-->
<!--        </p>-->
<!--        <p>-->
<!--          On manque d'argent par contre mais ça, c'est la responsabilité de tous-->
<!--          les membres et du-->
<!--          <router-link to="/cercle/financement"-->
<!--          >comité financement !-->
<!--          </router-link-->
<!--          >-->
<!--        </p>-->
<!--        <p>-->
<!--          De plus, en date de janvier 2019, nous avons une dette sans intérêts-->
<!--          de 11955.89$ sur laquelle nous payons 100$ / mois.-->
<!--        </p>-->
<!--      </div>-->
<!--    </Cercle>-->
    <v-divider class="mt-6 mb-12"></v-divider>
    <FinancementCercle></FinancementCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <GouvernanceCercle></GouvernanceCercle>
    <v-divider class="mt-6 mb-12"></v-divider>
    <div style="width: 100%" class="vh-center">
      <v-list>
        <v-list-item @click="comitesArchives = true">
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>
          <v-list-item-title class="text-h6">
            Comités archivés
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <v-divider class="mt-6 mb-12"></v-divider>
    <Calendrier
        class="mt-16"
        :class="{
        'mb-12': $vuetify.breakpoint.mdAndUp,
        'mb-4': $vuetify.breakpoint.smAndDown,
      }"
    ></Calendrier>
    <v-divider class="mt-6 mb-12"></v-divider>
    <Paiement class="mb-1 mt-12"></Paiement>
    <PhoneDialog ref="phoneDialog"></PhoneDialog>
    <v-dialog v-model="visionModal" width="300">
      <v-card>
        <v-card-title class="title">
          Vision
          <v-spacer></v-spacer>
          <v-icon @click="visionModal = false">close</v-icon>
        </v-card-title>
        <v-card-text
            class="text-left body-1 black--text"
            style="line-height: 1.5"
        >
          Une communauté autogérée ayant une empreinte écologique et sociale
          réduite sur son milieu. L’abondance s’y mesure par la multiplicité et
          la diversité du lien social, par l’épanouissement des individus, ainsi
          que par l’accès égalitaire et juste aux ressources.
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
        <v-card-text
            class="text-left body-1 black--text"
            style="line-height: 1.5"
        >
          Stimuler et soutenir la mise en commun et le partage de ressources, de
          lieux, de connaissances comme forme concrète de solidarité pour
          augmenter l’autonomie et la résilience des individus et des
          collectivités.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="valeursModal" width="450">
      <v-card>
        <v-card-title class="title">
          Valeurs
          <v-spacer></v-spacer>
          <v-icon @click="valeursModal = false">close</v-icon>
        </v-card-title>
        <v-list class="text-left">
          <v-list-item v-for="valeur in valeurs" :key="valeur" class="body-1">
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
        <v-card-text class="body-1">
          <v-list>
            <v-list-item to="/le-demi">
              <v-list-item-title> Le demi</v-list-item-title>
            </v-list-item>
            <v-list-item to="/loco-linux">
              <v-list-item-title> Loco Linux</v-list-item-title>
            </v-list-item>
            <v-list-item to="/sel-de-mer">
              <v-list-item-title> Sel De Mer</v-list-item-title>
            </v-list-item>
            <v-list-item to="/secession">
              <v-list-item-title> Sécession</v-list-item-title>
            </v-list-item>
            <v-list-item to="/bibliotheque">
              <v-list-item-title> Bibliothèque collective</v-list-item-title>
            </v-list-item>
            <v-list-item to="/cafe-philo">
              <v-list-item-title> Cafés philo</v-list-item-title>
            </v-list-item>
            <v-list-item to="/fablab">
              <v-list-item-title> Fablab</v-list-item-title>
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
  1013.02,
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
  1337.11,
];

const lemieuxDepenses = [126.8, 0, 166.8, 410.6, 0, 268.13, 0, 706.89, 236.8];

const lemieuxRevenus = [
  588.74,
  276.72,
  465.69,
  446.07,
  559.58,
  172.9,
  348.75,
  696.35,
  376.2,
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
  7555.89,
];

const mois = [
  "avril",
  "mai",
  "juin",
  "juil",
  "août",
  "sept",
  "oct",
  "nov",
  "dec",
];

import Cercle from "@/components/Cercle";
import {GoogleCharts} from "google-charts";
import Calendrier from "@/components/Calendrier.vue";

import PhoneDialog from "@/components/PhoneDialog";
import Cercles from "@/Cercles";

import Scroll from "@/Scroll";
import Shuffle from "@/Shuffle";

export default {
  name: "home",
  components: {
    GroupeAchatCercle: () => import("@/components/GroupeAchatCercle"),
    CollaboriumCercle: () => import("@/components/CollaboriumCercle"),
    GouvernanceCercle: () => import("@/components/GouvernanceCercle"),
    FinancementCercle: () => import("@/components/FinancementCercle"),
    ProduitsNettoyantCercle: () => import("@/components/ProduitsNettoyantCercle"),
    BougerEnsembleCercle: () => import("@/components/BougerEnsembleCercle"),
    PagePourpreCercle: () => import("@/components/PagePourpreCercle"),
    BibliothequeOutilsCercle : () => import("@/components/BibliothequeOutilsCercle"),
    Paiement : () => import("@/components/Paiement"),
    Cercle,
    PhoneDialog,
    Calendrier,
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
      if (this.$vuetify.breakpoint.lg) {
        return 80;
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
    },
  },
  methods: {
    trierCercles: function (cercles) {
      return cercles.sort(
          function (aClef, bClef) {
            let aDesactive = this.cercle(aClef).desactive;
            let bDesactive = this.cercle(bClef).desactive;
            return aDesactive === bDesactive
                ? aClef.localeCompare(bClef)
                : aDesactive
                    ? 1
                    : -1;
          }.bind(this)
      );
    },
    nomDeCercle: function (clefDeCercle) {
      return this.cercles[clefDeCercle].nom;
    },
    cercle: function (clefDeCercle) {
      return this.cercles[clefDeCercle];
    },
    lienDeCercle: function (clefDeCercle) {
      let lien = this.cercles[clefDeCercle].lien;
      return lien ? lien : "/cercle/" + clefDeCercle;
    },
    cercleEstDesactive: function (clefDeCercle) {
      return this.cercles[clefDeCercle].desactive;
    },
    balanceCalculate: function () {
      let balance = [];
      for (let i = 0; i < revenus.length; i++) {
        let balanceAbsolue = revenus[i] - depenses[i];
        let balanceSansLemieux =
            balanceAbsolue - lemieuxRevenus[i] + lemieuxDepenses[i];
        let balanceAvecProfitsLemieux =
            balanceSansLemieux + lemieuxRevenus[i] * profitRatioOnLemieux;
        this.balanceTotale += balanceAvecProfitsLemieux;
        balance[i] = Math.floor(balanceAvecProfitsLemieux);
      }
      this.balanceTotale = Math.floor(this.balanceTotale);
      return balance;
    },
    dessinComptable() {
      return;
      let monthIndex = -1;
      let data = new GoogleCharts.api.visualization.arrayToDataTable(
          [["Mois", "Balance"]].concat(
              this.balance.map(function (amount) {
                monthIndex++;
                return [mois[monthIndex], amount];
              })
          )
      );
      let options = {
        chart: {
          title: "",
          subtitle: "",
        },
        height: 400,
        legend: {position: "none"},
      };

      let chart = new GoogleCharts.api.charts.Line(
          document.getElementById("dessin-comptable")
      );

      chart.draw(data, GoogleCharts.api.charts.Line.convertOptions(options));

      GoogleCharts.api.visualization.events.addListener(
          chart,
          "ready",
          function () {
          }.bind(this)
      );
    },
    goToRightSection: async function () {
      let section = "app";
      if (this.$route.params.comite) {
        section = this.$route.params.comite;
      } else if (this.$route.name !== "home") {
        section = this.$route.name;
      }
      if (["/calendrier", "/reservation"].indexOf(this.$route.path) > -1) {
        section = "calendrier";
      }
      if (this.$route.path === "/benevole") {
        section = "benevole";
      }
      await this.$nextTick();
      setTimeout(() => {
        Scroll.allerALaSection(section, undefined, 0);
      }, 400);
    },
  },
  data() {
    let membresDeCercles = [
      // {
      //   nom: "Hug Arsenault",
      //   cv:
      //       "Cayen, artiste de murale et de la débrouille, danseur alternatif, aubergiste.",
      //   avatar: "hug_petit_carre.jpg",
      //   cercles: ["ca", "financement", "gouvernance", "imaginezDemain"],
      // },
      {
        nom: "Gabrielle Margineanu",
        cv: "Graphiste, Bédéiste, mère, humaniste",
        avatar: "gaby-petit-carre.jpg",
        cercles: ["ca", "comptable"],
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
        cercles: ["espace"],
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
        cercles: ["siteWeb"],
      },
      // {
      //     nom: "Fred Guilbault",
      //     cv: "Programmeur, sécurité informatique, marin",
      //     avatar: "fred-guilbault-petit-carre.jpg",
      //     cercles: []
      // },
      {
        nom: "Francine Larocque",
        cv:
            "Enseignante alternative retraitée, jardinière, démocratie participative, chant",
        avatar: "francine-petit-carre.png",
        cercles: ["groupe"],
      },
      {
        nom: "Arielle Paiement",
        cv: "Animation de groupe, Communication non violente, charpentière",
        avatar: "arielle-petit-carre.jpg",
        cercles: ["gouvernance", "biblioOutils"],
      },
      {
        nom: "Martin Zibeau",
        cv: "Comédien, Philosophe, Expérimenteur social",
        avatar: "martin-zibeau-petit-carre.jpg",
        cercles: ["lemieux"],
      },
      {
        nom: "Solange Lecot",
        cv: "Défend les droits des oppriméEs, Gestion bois et forêt",
        avatar: "solange-petit-carre.jpeg",
        cercles: ["pagePourpre"],
      },
      {
        nom: "Dominique Landry",
        cv: "Organisatrice d'événements, Artiste de scène, Jardinère engagée",
        avatar: "dô-petit-carre.jpg",
        cercles: ["ca", "pagePourpre", "bougerEnsemble"],
      },
      {
        nom: "Ann Guilbault",
        cv:
            "Citoyenne terrestre naturalisée, Va-nu-pieds estivale, Descendante de la rivière",
        avatar: "AnnGuilbault-petit-carre.jpg",
        cercles: ["ca", "adhesion"],
      },
      {
        nom: "Carole Gagnon",
        cv: "Coach de vie et énergéticienne. Prof de yoga et de méditation",
        avatar: "carole-gagnon-petit.jpg",
        cercles: ["ca"],
      },
      {
        nom: "Claude Demers",
        cv: "Thérapeute de l'âme et du corps, polyvalente en tout genre et libre.",
        avatar: "claude-demers.jpg",
        cercles: ["adhesion"],
      },
    ];
    return {
      balanceTotale: 0,
      comitesArchives: false,
      Scroll: Scroll,
      dataLoaded: false,
      balance: 0,
      membresDeCerclesTries: Shuffle.array(membresDeCercles),
      membresDeCercles: membresDeCercles,
      cercles: Cercles,
      visionModal: false,
      missionModal: false,
      valeursModal: false,
      valeurs: [
        "Respect",
        "Bienveillance",
        "Ouverture",
        "Solidarité",
        "Inclusion / Non-discrimination / Féminisme",
        "Partage",
        "Autonomie individuelle",
        "Égalité / Considération",
      ],
      popDocImages: [
        "popdoc/popdoc.jpg",
        "popdoc/inuk-en-colere.jpg",
        "popdoc/etats-unis-afrique.jpg",
        "popdoc/chez-le-barbier.jpg",
      ],
    };
  },
  mounted() {
    this.membresDeCercles.forEach(
        function (membre) {
          membre.cercles = this.trierCercles(membre.cercles);
        }.bind(this)
    );
    this.balance = this.balanceCalculate();
    GoogleCharts.load(this.dessinComptable, {packages: ["line"]});
  },
};
</script>
<style>
</style>
