<template>
  <Cercle
      title="Bibliothèque d'outils"
      anchor="biblio-outils"
      image="gardening-tools-1478547_1280.jpg"
      id="biblio-outils"
  >
    <div slot="subtitle">
      Marteaux, pinceaux, truelles, échelles, perceuses, ponceuses: plutôt que
      d'acheter un outil dont vous ne vous servirez qu'une fois dans votre
      vie, empruntez-le!
    </div>
    <div slot="content">
      <v-tabs grow class="" slider-color="#ff3301">
        <v-tab class=""> C'est quoi</v-tab>
        <v-tab class=""> Participer</v-tab>
        <v-tab-item class="pt-4">
          <v-tabs grow v-model="biblioOutilsCestQuoi" slider-color="#ff3301">
            <v-tab class=""> Quoi</v-tab>
            <v-tab class=""> Pourquoi</v-tab>
            <v-tab class=""> Comment</v-tab>
            <v-tabs-items v-model="biblioOutilsCestQuoi" class="mt-3 pb-4">
              <v-tab-item class="">
                <h3>C'est quoi</h3>
                <p>
                  1) La bibliothèque d’outils entrepose des outils d’usage
                  commun (cuisine, menuiserie, artisanat, mécanique,
                  jardinage, électricité, etc.) qui sont mis à la disposition
                  de ses abonné-e-s sous forme de prêts.
                </p>
                <p>
                  2) Des activités pratiques peuvent être organisées dans
                  l’année qui permettent aux abonné-e-s et à la population de
                  développer leurs savoirs faire et leurs habiletés manuelles,
                  en plus d’y faire des rencontres intergénérationnelles et
                  interculturelles.
                </p>
                <p>
                  Des modèles ailleurs :
                  <a href="https://laremise.ca/">La Remise</a> à Montréal,
                  <a href="https://atelierlapatente.org/">La Patente</a> à
                  Québec.
                </p>
                <v-layout row class="pr-8">
                  <v-flex xs12 class="text-right">
                    <v-btn @click="biblioOutilsQuoiNextTab()">
                      Prochaine page
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-tab-item>
              <v-tab-item class="">
                <h3>Pourquoi une bibliothèque d’outils?</h3>
                <v-list>
                  <v-subheader class="text-subtitle-1"> pour</v-subheader>
                  <v-list-item>
                    <v-list-item-title class="">
                      renforcer les liens sociaux
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="">
                      lutter contre le gaspillage des ressources
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="">
                      augmenter la capacité d’agir de la communauté et de ses
                      membres.
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title class="">
                      BRICOLAGE – VOISINAGE – PARTAGE!
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-layout row class="pr-8">
                  <v-flex xs12 class="text-right">
                    <v-btn @click="biblioOutilsQuoiNextTab()">
                      Prochaine page
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-tab-item>
              <v-tab-item class="">
                <h3 class="">Comment ça marche</h3>
                <p>
                  Les abonnés ont accès à tous les outils de la bibliothèque.
                </p>
                <p>
                  C’est en libre-service, ça veut dire qu’ils remplissent
                  eux-mêmes la fiche d’emprunt.
                </p>
                <p>
                  Ils peuvent emprunter l’outil pour 3 jours à 1 semaine, à
                  moins qu’il ait été réservé par un autre abonné.
                </p>
                <p>
                  Pour les consommables (lame, papier sablé, etc.) qui
                  permettent aux outils de fonctionner, mais ont une durée de
                  vie limitée, il sera possible d’en acheter sur place ou de
                  payer une contribution à l’utilisation.
                </p>
                <p>
                  Aussi, en lien avec le service du Partage’heure, des
                  activités pourraient être organisées afin de se familiariser
                  avec des outils, découvrir de nouveaux projets, et s’amuser
                  à créer des objets avec d’autre monde!
                </p>
                <p>
                  Note : le fonctionnement exact est encore à établir. Détails
                  à venir.
                </p>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-tab-item>
        <v-tab-item class="pt-4 ">
          <v-tabs
              v-model="participerBiblioOutilsTab"
              slider-color="#ff3301"
              grow
          >
            <v-tab class=""> Don d'outils</v-tab>
            <v-tab class=""> Comité</v-tab>
            <v-tab class=""> Abonnement</v-tab>
          </v-tabs>
          <v-tabs-items class="mt-3 pb-4" v-model="participerBiblioOutilsTab">
            <v-tab-item class="">
              <h3>Don d'outils</h3>
              <p>Nous reçevons les dons d'outils !</p>
              <p>
                Nous espérons constituer la base de la bibliothèque grâce à
                vos dons.
              </p>
              <p>
                Critère #1: l'outil doit être en état de fonctionner de
                manière sécuritaire
              </p>
              <p>
                Si nous avons trop d'outils du même type, nous pourrions
                décider de les vendre, et les sous servirons à financer les
                dépenses du projet
              </p>
              <v-layout row class="pr-8">
                <v-flex xs12 class="text-right">
                  <v-btn @click="biblioOutilsParticiperNextTab()">
                    Prochaine page
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-tab-item>
            <v-tab-item class="">
              <h3>Comité de la Bibliothèque d'outils</h3>
              <p>
                Un comité sera mis en place pour assurer le bon fonctionnement
                du projet.
              </p>
              <p>
                Nous cherchons des gens qui auraient envie d’être responsable
                d’un volet des outils (gestion de la qualité, assurer une
                offre intéressante, etc.)
              </p>
              <p class="mb-0">Voici les postes à combler :</p>
              <v-list class="pt-0">
                <v-list-item>
                  <v-list-item-title class="">
                    Cuisine
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Production alimentaire
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Couture et/ou artisanat
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Mécanique vélo
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Rénovation (menuiserie, électricité, plomberie)
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Électronique
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Programmation
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title class="">
                    Coordination (membership, $, lien avec HG, communications)
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-layout row class="pr-8">
                <v-flex xs12 class="text-right">
                  <v-btn @click="biblioOutilsParticiperNextTab()">
                    Prochaine page
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-tab-item>
            <v-tab-item class="">
              <h3>Abonnement</h3>
              <p>Vous devez d’abord être membre de la coop HG.</p>
              <p>Puis, payer un abonnement annuel.</p>
            </v-tab-item>
          </v-tabs-items>
        </v-tab-item>
      </v-tabs>
      <v-card class="mt-4">
        <v-card-text class="text-center text-smaller-2">
          Pour toute question, ou pour manifester votre intérêt à soutenir ou
          à participer à la bibliothèque d'outils, contactez
          <a href="mailto:arielle.paiement@gmail.com">
            <v-icon class="mr-2">mail</v-icon>
            arielle.paiement@gmail.com
          </a>
        </v-card-text>
      </v-card>
    </div>
  </Cercle>
</template>

<script>
import Scroll from "@/Scroll";

export default {
  name: "BibliothequeOutilsCercle",
  components: {
    Cercle: () => import("@/components/CercleWrap.vue")
  },
  data: function () {
    return {
      biblioOutilsCestQuoi: 0,
      participerBiblioOutilsTab: 0,
    }
  },
  methods: {
    biblioOutilsQuoiNextTab: function () {
      this.biblioOutilsCestQuoi = parseInt(this.biblioOutilsCestQuoi) + 1;
      Scroll.allerALaSection("biblio-outils");
    },
    biblioOutilsParticiperNextTab: function () {
      this.participerBiblioOutilsTab =
          parseInt(this.participerBiblioOutilsTab) + 1;
      Scroll.allerALaSection("biblio-outils");
    },
  }
}
</script>

<style scoped>

</style>
