<template>
  <v-app :class="{
      'font-size-xl': $vuetify.display.xl,
      'font-size-lg-and-down': $vuetify.display.lgAndDown,
    }">
    <v-app-bar
        color="white"
        :class="{
            'no-padding': $vuetify.display.smAndDown,
          }"
        style="z-index: 4"
    >
      <v-app-bar-nav-icon
          @click="drawer = !drawer"
          v-if="$vuetify.display.smAndDown"
      ></v-app-bar-nav-icon>
      <router-link
          to="/"
          class="mt-3"
          :class="{
              'pl-4': $vuetify.display.mdAndUp,
            }"
      >
        <img
            :src="require('./assets/logo-horizontal.png')"
            :height="toolbarLogoHeight"
            v-if="true"
            @click="Scroll.allerALaSection('app')"
        />
        <img
            :src="require('./assets/logo-loco-horizontal.png')"
            :height="toolbarLogoHeight + 20"
            v-if="false"
        />
      </router-link>
      <v-spacer v-if="$vuetify.display.mdAndUp"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            :size="$vuetify.display.lgAndDown ? 'small' : undefined"
            variant="text"
            to="/paiement"
        >
          <v-icon
              :class="{
                  'mr-3': $vuetify.display.xlAndUp,
                  'mr-0': $vuetify.display.mdAndDown,
                }"
          >attach_money
          </v-icon>
          <span v-if="$vuetify.display.xlAndUp" class=""> Don et paiement </span>
          <span v-if="$vuetify.display.lgAndDown">Don/paiement</span>
        </v-btn>
        <v-btn
            :size="$vuetify.display.lgAndDown ? 'small' : undefined"
            variant="text"
            to="/calendrier"
        >
          <v-icon
              :class="{
                  'mr-3': $vuetify.display.xlAndUp,
                  'mr-0': $vuetify.display.lgAndDown,
                }"
          >
            calendar_month
          </v-icon>
          Calendrier / Réservation
        </v-btn>
        <v-btn
            color="#ff3301"
            variant="flat"
            background-color="#ff3301"
            :size="$vuetify.display.lgAndDown ? 'small' : undefined"
            v-if="$vuetify.display.lgAndUp"
            target="_blank"
            href="https://horizonsgaspesiens.net/devenez-membre"
        >
          <v-icon start>check</v-icon>
          Devenez membre
        </v-btn>

        <v-btn
            :size="$vuetify.display.lgAndDown ? 'small' : undefined"
            variant="text"
            href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
        >
          <v-icon
              :class="{
                  'mr-3': $vuetify.display.xlAndUp,
                  'mr-0': $vuetify.display.lgAndDown,
                }"
          >location_on
          </v-icon>
          Adresse
        </v-btn>
        <v-btn
            :size="$vuetify.display.lgAndDown ? 'small' : undefined"
            variant="text"
            @click="$refs.contactDialog.show()"
        >
          <v-icon start>
            phone
          </v-icon>
          Contact
          <v-icon
              end
          >mail
          </v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title
          class="text-h6 text-uppercase special-font"
          style="font-weight: bold"
      >
      </v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="desktopDrawer = !desktopDrawer"
                          v-if="$vuetify.display.mdAndUp"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
        v-model="desktopDrawer"
        location="right"
        temporary
    >
      <v-list-item @click="Scroll.allerALaSection('about', '/');desktopDrawer=false;"
                   class="text-left">

        <v-list-item-title class="text">
          À propos
        </v-list-item-title>

      </v-list-item>
      <v-list-item to="/adhesion" class="text-left">

        <v-list-item-title>
          Vérifiez votre adhésion
        </v-list-item-title>

      </v-list-item>
      <v-list-item to="/tarification" class="text-left">

        <v-list-item-title>
          Tarification de la salle
        </v-list-item-title>

      </v-list-item>
      <v-skeleton-loader type="list-item" v-if="comites === null"></v-skeleton-loader>
      <div v-if="comites !== null">
        <v-list-item
            v-for="(comite) in comites"
            :key="comite.id"
            :to="comite.slug"
            class="text-left"
        >
          <v-list-item-title class="font-weight-regular">
            <span v-html="comite.title.rendered"></span>
          </v-list-item-title>
        </v-list-item>
      </div>
      <v-list-item href="https://www.facebook.com/locolocal1" class="text-body-1">
        <v-list-item-title class="text-left">
          /locolocal1
        </v-list-item-title>
        <template v-slot:append>
          <v-img
              :src="require('@/assets/f_logo_RGB-Blue_58.png')"
              min-height="32"
              min-width="32"
          ></v-img>
        </template>
      </v-list-item>
    </v-navigation-drawer>
    <v-navigation-drawer
        v-model="drawer"
        enable-resize-watcher
        dense
        id="app-navigation"
    >
      <v-list>
        <div
            v-for="phone in phoneNumbers"
            :key="phone.nom"
            :href="'tel:' + phone.telephone"
        >
          <v-list-item :href="'tel:' + phone.telephone">
            <v-list-item-title>
              {{ phone.telephone }}
            </v-list-item-title>
            <template v-slot:append>
              <v-icon>phone</v-icon>
            </template>
          </v-list-item>
          <v-divider class="mb-2 mt-2"></v-divider>
        </div>
        <div>
          <v-list-item href="mailto:admin@loco-local.net">
            <v-list-item-title>
              admin@loco-local.net
            </v-list-item-title>
            <template v-slot:append>
              <v-icon>mail</v-icon>
            </template>
          </v-list-item>
          <v-divider class="mb-2 mt-2"></v-divider>
        </div>
        <v-list-item
            href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
        >
          <v-list-item-title class="text-left">
            Adresse
          </v-list-item-title>
          <template v-slot:append>
            <v-icon>location_on</v-icon>
          </template>
        </v-list-item>
        <v-list-item to="/paiement">
          <v-list-item-title class="text-left">Don et paiement</v-list-item-title>
          <template v-slot:append>
            <v-icon>attach_money</v-icon>
          </template>
        </v-list-item>
        <v-list-item
            to="/calendrier"
        >
          <v-list-item-title class="text-left">Calendrier</v-list-item-title>
          <template v-slot:append>
            <v-icon>calendar_month</v-icon>
          </template>
        </v-list-item>
        <v-list-item
            to="/reservation"
        >
          <v-list-item-title class="text-left">
            Réservation
          </v-list-item-title>
          <template v-slot:append>
            <v-icon>event</v-icon>
          </template>
        </v-list-item>
        <v-list-item
            href="https://horizonsgaspesiens.net/devenez-membre"
            target="_blank"
        >
          <v-list-item-title class="text-left">Devenez membre</v-list-item-title>
          <template v-slot:append>
            <v-icon>check</v-icon>
          </template>
        </v-list-item>
        <v-list-item
            to="/adhesion"
        >
          <v-list-item-title class="text-left">Vérifiez votre adhésion</v-list-item-title>
          <template v-slot:append>
            <v-icon>check</v-icon>
          </template>
        </v-list-item>
        <v-list-item
            to="/tarification"
        >
          <v-list-item-title class="text-left">Tarification de la salle</v-list-item-title>
          <template v-slot:append>
            <v-icon>attach_money</v-icon>
          </template>
        </v-list-item>
        <v-list-item @click="Scroll.allerALaSection('about', '/');drawer=false;" class="text-left">
          <v-list-item-title>
            À propos
          </v-list-item-title>
        </v-list-item>
        <v-skeleton-loader type="list-item" v-if="comites === null"></v-skeleton-loader>
        <div v-if="comites !== null">
          <v-list-item
              v-for="(comite) in comites"
              :key="comite.id"
              :to="comite.slug"
              class="text-left"
          >
            <v-list-item-title class="font-weight-regular">
              <span v-html="comite.title.rendered"></span>
            </v-list-item-title>
          </v-list-item>
        </div>
        <v-list-item @click="documentDialog = true">
          <v-list-item-title class="text-left">Documents</v-list-item-title>
          <template v-slot:append>
            <v-icon>articles</v-icon>
          </template>
        </v-list-item>
        <v-list-item @click="presseDialog = true">
          <v-list-item-title class="text-left">Dossier de presse</v-list-item-title>
          <template v-slot:append>
            <v-icon>newspaper</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
    <v-divider class="mt-8 mb-8"></v-divider>
    <p
        class="special-font text-h5"
        style="font-family: 'Pacifico', cursive !important"
    >
      Merci à tous les bénévoles, clients et organismes partenaires
    </p>
    <v-divider class="mt-8 mb-8"></v-divider>
    <v-row class="pl-4 pr-4">
      <v-col cols="0" lg="2"></v-col>
      <v-col cols="12" md="4" :class="{
          'vh-center' : $vuetify.display.smAndDown
          }">
        <v-card flat href="https://mrcbonaventure.com/" width="300" :class="{
            'float-right': $vuetify.display.mdAndUp
          }">
          <v-card style="background-color: #002c51;" class="pa-4" flat border>
            <v-img :src="require('@/assets/logo_mrcbona.png')" alt="MRC de Bonaventure"></v-img>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="align-self-center">
        <p class="text-left text-h6 font-weight-regular">
          Merci à la MRC de Bonaventure pour la subvention dans le cadre du plan de communauté en
          développement
          social.
        </p>
      </v-col>
      <v-col cols="0" lg="2"></v-col>
    </v-row>
    <v-row class="pl-4 pr-4">
      <v-col cols="0" lg="2"></v-col>
      <v-col cols="12" md="4" :class="{
          'vh-center' : $vuetify.display.smAndDown
          }">
        <v-card flat href="https://www.urlsgim.com/" width="300" :class="{
            'float-right': $vuetify.display.mdAndUp
          }">
          <v-card class="pa-4" flat border>
            <v-img :src="require('@/assets/logo-loisir-et-sport-gim.png')"
                   alt="Loisir et Sport Gaspésie-Îles-de-la-Madeleine"></v-img>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="align-self-center">
        <p class="text-left text-body-1 text-h6 font-weight-regular">
          Merci à Loisir et Sport Gaspésie-Îles-de-la-Madeleine pour les dons d'équipements pour bouger au
          Loco Local
          !
        </p>
      </v-col>
      <v-col cols="0" lg="2"></v-col>
    </v-row>
    <div class="mt-8 mb-8"></div>
    <v-footer class="pa-4">
      <v-spacer></v-spacer>
      <v-btn
          variant="text"
          @click="documentDialog = true"
          v-if="$vuetify.display.mdAndUp"
      >
        <v-icon start>
          articles
        </v-icon>
        Documents
      </v-btn>
      <v-btn
          variant="text"
          @click="presseDialog = true"
          v-if="$vuetify.display.mdAndUp"
      >
        <v-icon start>
          newspaper
        </v-icon>
        Presse
      </v-btn>
      <v-spacer></v-spacer>
      <a
          href="https://www.facebook.com/locolocal1"
          class="mr-4"
      >
        <v-img :src="require('@/assets/f_logo_RGB-Blue_58.png')"
               min-height="45"
               min-width="45"
        ></v-img>
      </a>
      <a href="https://github.com/VincentBlouin/horizons-gaspesiens">
        <v-img
            :src="require('@/assets/GitHub-Mark-32px.png')"
            min-height="45"
            min-width="45"
        ></v-img>
      </a>
    </v-footer>
    <ContactDialog ref="contactDialog"></ContactDialog>
    <v-dialog v-model="presseDialog" width="900">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center text-h5 text-medium-emphasis ps-2">
          <div>
            Dossier de presse
          </div>
          <div>
            <v-icon @click="presseDialog = false">close</v-icon>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-body-1">
          <v-list>
            <v-list-item
                v-for="presse in dossiersDePresse"
                :key="presse.lien"
                :href="presse.lien"
                class="text-left"
            >
              <v-list-item-title class="text-body-1">
                  <span class="grey-text">
                    {{ presse.date }}
                  </span>
                {{ presse.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="documentDialog" width="900">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center text-h5 text-medium-emphasis ps-2">
          <div>
            Documents
          </div>
          <div>
            <v-icon @click="documentDialog = false">close</v-icon>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-body-1">
          <v-list>
            <v-list-item
                v-for="document in documents"
                :key="document.nom"
                :href="document.lien"
                target="_blank"
                class="text-left"
            >
              <template v-slot:prepend>
                <v-icon>articles</v-icon>
              </template>
              <v-list-item-title>
                {{ document.nom }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import ContactDialog from "@/components/ContactDialog";
import PhoneNumbers from "@/PhoneNumbers";
import ScrollHelper from "@/Scroll";
import {useComiteStore} from '@/stores/ComiteStore'
import {useDisplay} from "vuetify";
import {computed, onMounted, ref} from "vue";
import WordpressService from "@/service/WordpressService";

const display = useDisplay();

const toolbarLogoHeight = computed(() => {
  if (display.lgAndDown) {
    return 25;
  }
  return 30;
})

const documentDialog = ref(false)
const presseDialog = ref(false)
const Scroll = ref(ScrollHelper)
const drawer = ref(false)
const desktopDrawer = ref(false)
const phoneNumbers = ref(PhoneNumbers.data)
const documents = ref([
  {
    lien: "https://docs.google.com/document/d/1gyu009DBOyYRGeO5n9melzBl26IO04v9KzOVYIeR9lI",
    nom: "Un p'tit tour du Loco, document d'intégration en cours de rédaction"
  },
  {
    lien: "https://docs.google.com/document/d/1GbJSM-szWptTxLtF--VWmFrnX9f9S61l8KqXDed50gk",
    nom: "Orientations 2021-2022"
  },
  {
    lien: "https://drive.google.com/file/d/1NbibEbKB8MCw7XI-bsxJuBnRX0vDUFIv/view",
    nom: "Rapport annuel 2020-21"
  },
  {
    lien:
        "https://drive.google.com/file/d/0B1PuZPF8fTD_c29XdlV2a3lpY0dNU2JtT0hwR0laR09aZ1Jv/view?usp=sharing",
    nom: "Plan d'action pour la pérennisation du Loco Local",
  },
  {
    lien:
        "https://drive.google.com/file/d/0B1PuZPF8fTD_aVNySGViM3RjLVdqdUxVSExiRG9LNnNDSnRF/view?usp=sharing",
    nom: "Règlements généraux de la coopérative",
  }

])
const dossiersDePresse = ref([
  {
    date: "Août 2015",
    text: "Mouton Noir",
    lien: "http://www.moutonnoir.com/2015/08/loco-local",
  },
  {
    date: "Mai 2015",
    text: "Revue Kaléidoscope",
    lien:
        "http://mediakaleidoscope.org/sur-le-terrain-limpact-de-lausterite/",
  },
  {
    date: "5 juin 2015",
    text: "Sécession à Radio Gaspésie",
    lien: "http://radiogaspesie.ca/la-gaspesie-libre/",
  },
  {
    date: "4 novembre 2015",
    text:
        "Terra Terre - solutions écologiques pour un développement durable dans l'Islet - petite note sur l'existence d'HG",
    lien:
        "http://www.terra-terre.ca/public/actualit%C3%A9-terra-terre/page/3/",
  },
  {
    date: "9 avril 2016",
    text:
        "Participation au panel de Sortir du capitalisme à l'université Concordia à Montréal",
    lien: "http://www.economiesdecommunaute.org/programme/",
  },
  {
    date: "9 avril 2016",
    text:
        " Une carte des économies de communauté a été construite pour l'occasion regroupant les groupes ayant participé à la réflexion",
    lien:
        "https://economiesdecommunaute.carto.com/viz/c6bdbc26-e74c-11e5-8d8a-0e5db1731f59/public_map",
  },
  {
    date: "14 juin 2016",
    text:
        "Atypic au Rendez-vous de l'innovation sociale - conférencier coup de coeur",
    lien:
        "http://www.atypic.ca/fr/nouvelles/atypic-au-rendez-vous-de-linnovation-sociale-2016/",
  },
  {
    date: "27 juillet 2016",
    text: "Ricochet Les utopistes en action",
    lien: "https://ricochet.media/fr/1294/les-utopistes-en-action",
  },
  {
    date: "27 juillet 2016",
    text:
        "Gaspésie: Forces vives, de la revue À Bâbord! et repris par Ricochet",
    lien: "https://www.ababord.org/-No-65-ete-2016-",
  },
  {
    date: "22 août 2016",
    text: "Un living lab en Gaspésie ?",
    lien:
        "http://ici.radio-canada.ca/regions/est-quebec/2016/08/22/009-gaspesie-living-lab-bsl-llio-riviere-du-loup-tourisme.shtml",
  }
])
const comitesStore = useComiteStore()
const comites = ref(null);
onMounted(async () => {
  let response = await WordpressService.api().get(
      'comite_page?_embed'
  )
  comitesStore.$patch({
    list: response.data
  })
  comites.value = comitesStore.$state.list
})
</script>


<style lang="scss">
.text {
  line-height: 1.8;
}

.text-smaller {
  line-height: 1.6;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 0;
}

/*.application--wrap a {*/
/*color: white !important;*/
/*}*/
.special-font {
  font-family: "Pacifico", cursive !important;
  color: black;
}

.vh-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.h-center {
  display: flex;
  justify-content: center;
}

.grey-text {
  color: rgba(0, 0, 0, 0.54) !important;
}

a {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>
