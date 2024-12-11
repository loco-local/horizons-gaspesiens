<template>
  <div class="home mt-16">
    <v-row align-center column justify-center id="header-banner" class="vh-center text-center">
      <v-col cols="12">
        <v-card color="transparent" flat>
          <v-card-title class="vh-center text-white mb-4 text-h4 text-xl-h2 font-weight-thin"
          >
            Géré de façon
            <br v-if="$vuetify.display.smAndDown">
            horizontale
            <br>
            par ses membres
          </v-card-title>
          <v-card-subtitle class="font-weight-regular text-white text-h6 text-md-h5 text-center" style="line-height: 2">
            Pour partager <br v-if="$vuetify.display.smAndDown"> des ressources et des projets
            <br>
            qui enrichissent le lien social <br v-if="$vuetify.display.smAndDown">et environnemental.
            <!--            comme solutions <br v-if="$vuetify.display.smAndDown"> aux défis sociaux <br-->
            <!--              v-if="$vuetify.display.smAndDown">et environnementaux.-->
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <div id="about" class="mb-12"></div>
    <v-row class="mb-1">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-thin text">À propos</h1>
      </v-col>
    </v-row>
    <v-row class="mt-6 mb-6" :class="{
      'pl-5 pr-2 pb-0 pt-0': $vuetify.display.smAndDown,
    }">
      <v-col cols="0" sm="2" md="3" lg="4"
             class="hidden-sm-and-down"
      ></v-col>
      <v-col cols="12" sm="8" md="6" lg="4" class="text-left text-md-justify text-h6 text-lg-h5 font-weight-regular">
        <p class="text" style="font-weight: 300;">
          Horizons Gaspésiens est une coopérative de solidarité. L'organisme
          chapeaute différentes initiatives
          <a href="#" @click.prevent="$router.push('/comites')">
            présentes
          </a>
          et
          <a href="#" @click.prevent="comitesArchives = true">passées</a>
          portées par
          <a href="#" @click.prevent="$router.push('/membres-en-vedette')">
            ses membres.
          </a>
          Les initiatives doivent être alignées avec
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
          <a href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
             target="_blank" style="white-space: nowrap">
            <v-icon class="">location_on</v-icon>
            Bonaventure.
          </a>
        </p>
      </v-col>
      <v-col cols="0" sm="2" md="3" lg="4"></v-col>
    </v-row>
    <v-divider class="mt-6 mb-12"></v-divider>
    <v-row class="mb-12" id="membres">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-thin text">Membres</h1>
        <h4 class="text-h5 font-weight-thin">En vedette</h4>
      </v-col>
    </v-row>
    <v-row class="">
      <v-col cols="12" md="6" class="font-weight-bold"
             v-for="(member, index) in membersFeatured"
             :key="member.id"
      >
        <v-row class="mb-0" :class="{
          'align-content-center h-center': $vuetify.display.smAndDown
        }">
          <v-col cols="2" class="hidden-sm-and-down" v-if="index % 2 ===0"></v-col>
          <v-col cols="3" :class="{
              'mr-10 ml-4': $vuetify.display.smAndDown,
              'text-right': $vuetify.display.mdAndUp
          }">
            <v-avatar size="100">
              <v-img
                  :src="member.image.rendered"
                  :alt="member.title.rendered"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" md="7" class="" :class="{
            'mt-3': $vuetify.display.mdAndUp,
            'mt-0': $vuetify.display.smAndDown,
          }">
            <h3 class="text-h6 font-weight-medium text-center text-md-left">
              {{ member.title.rendered }}
            </h3>
            <p class="text-body-1 text-md-h6 font-weight-regular text-center text-md-left "
               style="white-space: pre-line;"
               :class="{
                  'ml-2 mr-2': $vuetify.display.smAndDown
               }"
            >
              {{ member.raison.value }}
            </p>
          </v-col>
          <v-col cols="2" class="hidden-sm-and-down" v-if="index % 2 !== 0"></v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-12">
      <v-col cols="12" class="vh-center">
        <v-card max-width="450">
          <v-card-text class="text-center text-h6 font-weight-regular text-black">
            Merci aussi à tous nos autres membres. Votre implication est très
            précieuse
            <span style="color: red">❤</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-parallax :height="parallaxSize" :src="require('../assets/peinture-rogner.jpg')"></v-parallax>
    <v-row class="mt-12" id="comites"
           :class="{
              'pb-16' : $vuetify.display.mdAndUp,
              'pb-4' : $vuetify.display.smAndDown
           }"
    >
      <v-col xs12 class="text-center">
        <h1 class="text-h3 font-weight-thin">Comités</h1>
      </v-col>
    </v-row>
    <v-row v-if="comitesStore.$state.list === null">
      <v-col cols="12" class="vh-center">
        <v-progress-circular
            :size="100"
            color="primary"
            indeterminate
            class="mt-6 mb-6"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <div v-if="comitesStore.$state.list !== null">
      <div v-for="comite in comitesStore.$state.list" :key="comite.id">
        <ComiteFromWordpress :comite="comite"></ComiteFromWordpress>
        <v-divider class="mt-6 mb-12"></v-divider>
      </div>
    </div>
    <div style="width: 100%" class="vh-center">
      <v-list>
        <v-list-item @click="comitesArchives = true">
          <template v-slot:prepend>
            <v-icon>list</v-icon>
          </template>
          <v-list-item-title class="text-h6">
            Comités archivés
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
    <v-divider class="mt-6 mb-12"></v-divider>
    <Calendrier class="mt-16" :class="{
      'mb-12': $vuetify.display.mdAndUp,
      'mb-4': $vuetify.display.smAndDown,
    }"></Calendrier>
    <v-divider class="mt-6 mb-12"></v-divider>
    <PaiementSection class="mb-1 mt-12"></PaiementSection>
    <ContactDialog ref="contactDialog"></ContactDialog>
    <v-dialog v-model="visionModal" width="300">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            Vision
          </div>
          <v-icon icon="close" @click="visionModal = false" variant="text"></v-icon>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>
        <v-card-text class="text-left text-h6 font-weight-regular text-black" style="line-height: 1.5">
          Une communauté autogérée ayant une empreinte écologique et sociale
          réduite sur son milieu. L’abondance s’y mesure par la multiplicité et
          la diversité du lien social, par l’épanouissement des individus, ainsi
          que par l’accès égalitaire et juste aux ressources.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="missionModal" width="300">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            Mission
          </div>
          <v-icon icon="close" @click="missionModal = false" variant="text"></v-icon>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>
        <v-card-text class="text-left text-h6 font-weight-regular text-black" style="line-height: 1.5">
          Soutenir le partage de ressources, de lieux et connaissances au service de la solidarité et de la résilience.
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="valeursModal" width="450">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            Valeurs
          </div>
          <div>
            <v-icon icon="close" @click="valeursModal = false" variant="text"></v-icon>
          </div>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>
        <v-list class="text-left">
          <v-list-item v-for="valeur in valeurs" :key="valeur">
            <v-list-item-title class="text-h6 font-weight-regular">
              {{ valeur }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    <v-dialog v-model="comitesArchives" width="600">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center text-h5 text-medium-emphasis ps-2">
          <div>
            Comités plus ou moins actifs
          </div>
          <div>
            <v-icon @click="comitesArchives = false">close</v-icon>
          </div>
        </v-card-title>
        <v-card-text class="text-body-1">
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

<script setup>

import Calendrier from "@/components/CalendrierSection.vue";

import ContactDialog from "@/components/ContactDialog";

import Shuffle from "@/Shuffle";
import PaiementSection from "@/components/PaiementSection.vue";
import WordpressService from "@/service/WordpressService";
import ComiteFromWordpress from "@/components/ComiteFromWordpress.vue";
import {computed, onMounted, ref, watch} from "vue";
import {useDisplay} from "vuetify";
import {useRoute} from "vue-router";
import Scroll from "@/Scroll";
import {useComiteStore} from "@/stores/ComiteStore";

const display = useDisplay();
const parallaxSize = computed(() => {
  if (display.mdAndDown) {
    return 200;
  }
  return 350;
})
const comitesArchives = ref(false);
const visionModal = ref(false);
const missionModal = ref(false)
const valeursModal = ref(false);
const membersFeatured = ref([]);
const valeurs = ref([
      "Respect",
      "Bienveillance",
      "Ouverture",
      "Solidarité",
      "Inclusion / Non-discrimination / Féminisme",
      "Partage",
      "Autonomie individuelle",
      "Égalité / Considération",
    ]
);

const comitesStore = useComiteStore();
onMounted(async () => {
  let response = await WordpressService.api().get(
      'membre_en_vedette'
  )
  membersFeatured.value = Shuffle.array(response.data);
  scrollToRightSection();
})


const route = useRoute();
watch(route, () => scrollToRightSection());

async function scrollToRightSection() {
  const sectionName = getSectionNameFromCurrentRoute();
  if (sectionName === null) {
    return;
  }
  return Scroll.allerALaSection(sectionName)
}

function getSectionNameFromCurrentRoute() {
  switch (route.name) {
    case "Comites":
      return "comites";
    case "MembresEnVedette" :
      return "membres"
  }
  return null;
}

</script>
<style>
#header-banner {
  /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
  /*background-image: linear-gradient(120deg, #667eea 0%, #764ba2 100%);*/
  width: 100 wh;
  height: auto;
  padding-top: 10%;
  padding-bottom: 10%;
  background: linear-gradient(-45deg, #007dc8, #ff1a1a, #007dc8);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
</style>
