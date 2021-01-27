<template>
  <div id="app" :class="{
    'font-size-xl' : $vuetify.breakpoint.xl,
    'font-size-lg-and-down' : $vuetify.breakpoint.lgAndDown
  }">
    <v-app>
      <v-navigation-drawer
          clipped
          v-model="drawer"
          enable-resize-watcher
          fixed
          app
          dense
          id="app-navigation"
      >
        <v-list avatar>
          <div v-for="phone in phoneNumbers" :key="phone.nom" :href="'tel:' + phone.telephone">
            <v-list-item :href="'tel:' + phone.telephone">
              <v-list-item-action>
                <v-icon>phone</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                {{ phone.nom }}
              </v-list-item-title>
              <v-list-item-avatar>
                <img :src="require('./assets/' + phone.avatar)">
              </v-list-item-avatar>
            </v-list-item>
            <v-divider class="mb-2 mt-2"></v-divider>
          </div>
          <v-list-item
              href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
            <v-list-item-action>
              <v-icon>location_on</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              193a Avenue Grand-Pré, Bonaventure, QC
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="Scroll.allerALaSection('paiement', '/paiement')">
            <v-list-item-action>
              <v-icon>attach_money</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Don et paiement
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="Scroll.allerALaSection('calendrier', '/calendrier')">
            <v-list-item-action>
              <v-icon>calendar_today</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Calendrier
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="Scroll.allerALaSection('calendrier', '/reservation')">
            <v-list-item-action>
              <v-icon>fa-clipboard</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Réservation
            </v-list-item-title>
          </v-list-item>
          <!--                <v-list-item-->
          <!--                        href="http://eepurl.com/c7iHkr">-->
          <!--                    <v-list-item-action>-->
          <!--                        <v-icon>email</v-icon>-->
          <!--                    </v-list-item-action>-->
          <!--                    <v-list-item-title>-->
          <!--                        Infolettre-->
          <!--                    </v-list-item-title>-->
          <!--                </v-list-item>-->
          <v-list-group
              prepend-icon="group"
              no-action
              expanded
              :value="true"
          >
            <v-list-item
                slot="activator">
              <v-list-item-title>
                Devenez membre
              </v-list-item-title>
            </v-list-item>
            <v-list>
              <v-list-item
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdQu47n0_bPKPO2kDAlWLdvg4JoJC-pasQWeBVQWVP2OI5tdw/viewform">
                <v-list-item-title>Première fois</v-list-item-title>
              </v-list-item>
              <v-list-item
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd8RP9Aaa1rZejOCZOTQRly5BaDa7OtpQIuxdFVW6wo8mE5Kw/viewform?usp=pp_url">
                <v-list-item-title>Renouvellement</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-list-group>
          <v-list-item
              @click="documentDialog = true">
            <v-list-item-action>
              <v-icon>fa-file</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Documents
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="presseDialog = true">
            <v-list-item-action>
              <v-icon>fa-newspaper</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Dossier de presse
            </v-list-item-title>
          </v-list-item>
          <v-list-group
              prepend-icon="group_work"
              no-action
              expanded
              :value="true"
          >
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>Comités</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="(cercle, clef) in cercles" :key="clef"
                         v-if="!cercle.desactive"
                         @click="Scroll.allerALaSection(clef, '/cercle/' + clef)">
              <v-list-item-content>
                <v-list-item-title>{{ cercle.nom }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <div id="nav" class="pa-0">
        <v-app-bar
            color="white"
            app
            :class="{
                        'no-padding' : $vuetify.breakpoint.smAndDown
                    }"
            style="z-index:4;"
        >
          <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
          <router-link to="/" class="mt-3" :class="{
             'pl-4' : $vuetify.breakpoint.smAndDown
          }">
            <!--<transition name="fade">-->
            <!--<img :src='require("./assets/" + currentLogo)'-->
            <!--:key="currentLogo"-->
            <!--style="position: absolute;left:10px;top:15px;"-->
            <!--class="pull-right"-->
            <!--:height="this.toolbarLogoHeight" @click="Scroll.allerALaSection('app')">-->
            <!--</transition>-->
            <img :src='require("./assets/logo-horizontal.png")'
                 :height="this.toolbarLogoHeight" v-if="true" @click="Scroll.allerALaSection('app')">
            <img :src='require("./assets/logo-loco-horizontal.png")'
                 :height="this.toolbarLogoHeight + 20" v-if="false">
          </router-link>
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn :small="$vuetify.breakpoint.lgAndDown" text
                   @click="Scroll.allerALaSection('paiement', '/paiement')">
              <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.xlOnly,
                        'mr-0' : $vuetify.breakpoint.mdAndDown
                    }">attach_money
              </v-icon>
              <span v-if="$vuetify.breakpoint.xlOnly">
                        Don et paiement
                    </span>
              <span v-if="$vuetify.breakpoint.lgAndDown">Don/paiement</span>
            </v-btn>
            <v-btn :small="$vuetify.breakpoint.lgAndDown" text
                   @click="Scroll.allerALaSection('calendrier', '/calendrier')">
              <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.xlOnly,
                        'mr-0' : $vuetify.breakpoint.lgAndDown
                    }">calendar_today
              </v-icon>
              Calendrier
            </v-btn>
            <v-btn :small="$vuetify.breakpoint.lgAndDown" text
                   @click="Scroll.allerALaSection('calendrier', '/reservation')">
              <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.lgAndUp,
                        'mr-0' : $vuetify.breakpoint.mdAndDown
                    }">
                fa-clipboard
              </v-icon>
              Réservation
            </v-btn>
            <v-menu offset-y v-if="$vuetify.breakpoint.lgAndUp">
              <template v-slot:activator="{ on }">
                <v-btn :small="$vuetify.breakpoint.lgAndDown"
                       v-on="on"
                       color="#ff3301"
                       dark
                >
                  <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.xlOnly,
                        'mr-0' : $vuetify.breakpoint.lgAndDown
                    }">group
                  </v-icon>
                  <span>Devenez membre</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdQu47n0_bPKPO2kDAlWLdvg4JoJC-pasQWeBVQWVP2OI5tdw/viewform">
                  <v-list-item-title>Première fois</v-list-item-title>
                </v-list-item>
                <v-list-item
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd8RP9Aaa1rZejOCZOTQRly5BaDa7OtpQIuxdFVW6wo8mE5Kw/viewform?usp=pp_url">
                  <v-list-item-title>Renouvellement</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-btn :small="$vuetify.breakpoint.lgAndDown" text
                   href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
            >
              <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.xlOnly,
                        'mr-0' : $vuetify.breakpoint.lgAndDown
                    }">location_on
              </v-icon>
              Adresse
            </v-btn>
            <v-btn :small="$vuetify.breakpoint.lgAndDown" text @click="$refs.phoneDialog.show()">
              <v-icon :class="{
                        'mr-3' : $vuetify.breakpoint.xlOnly,
                        'mr-0' : $vuetify.breakpoint.lgAndDown
                    }">phone
              </v-icon>
              <span v-if="$vuetify.breakpoint.xlOnly">Téléphones</span>
              <span v-if="$vuetify.breakpoint.lgAndDown">Tel</span>
            </v-btn>
            <!--                <v-btn :small="$vuetify.breakpoint.mdAndDown" text href="http://eepurl.com/c7iHkr">-->
            <!--                    <v-icon :class="{-->
            <!--                        'mr-3' : $vuetify.breakpoint.xlOnly,-->
            <!--                        'mr-0' : $vuetify.breakpoint.lgAndDown-->
            <!--                    }">email-->
            <!--                    </v-icon>-->
            <!--                    Infolettre-->
            <!--                </v-btn>-->
            <v-btn text href="https://www.facebook.com/locolocal1" :small="$vuetify.breakpoint.mdAndDown">
              <img src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30">
            </v-btn>
          </v-toolbar-items>
          <v-toolbar-title class="text-h6 text-uppercase special-font" style="font-weight:bold;">
          </v-toolbar-title>
        </v-app-bar>
      </div>
      <router-view class="mb-2"/>
      <p class="special-font headline mb-6" style="font-family: 'Pacifico', cursive !important;">
        Merci à tous les bénévoles, clients et organismes partenaires
      </p>
      <v-footer class="pa-4" dark>
        <v-spacer></v-spacer>
        <v-btn text @click="documentDialog = true" v-if="$vuetify.breakpoint.mdAndUp">
          <v-icon class="mr-4">fa-file</v-icon>
          Documents
        </v-btn>
        <v-btn text @click="presseDialog = true" v-if="$vuetify.breakpoint.mdAndUp">
          <v-icon class="mr-4">fa-newspaper</v-icon>
          Presse
        </v-btn>
        <v-btn text href="http://visagesregionaux.org/">
          Visages régionaux
        </v-btn>
        <v-spacer></v-spacer>
        <a href="https://github.com/VincentBlouin/horizons-gaspesiens">
          <img height="32" width="32" :src="require('@/assets/GitHub-Mark-Light-32px.png')" class="mt-1">
        </a>
      </v-footer>
      <PhoneDialog ref="phoneDialog"></PhoneDialog>
      <v-dialog v-model="presseDialog" width="900">
        <v-card>
          <v-card-title class="title">
            Dossier de presse
            <v-spacer></v-spacer>
            <v-icon @click="presseDialog=false">close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="presse in dossiersDePresse" :key="presse.lien" :href="presse.lien">
                <v-list-item-title>
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
          <v-card-title class="title">
            Documents
            <v-spacer></v-spacer>
            <v-icon @click="documentDialog=false">close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="document in documents" :key="document.nom" :href="document.lien">
                <v-list-item-action>
                  <v-icon>fa-file</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  {{ document.nom }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="visageDialog" width="900">
        <v-card>
          <v-card-title class="title">
            Visages régionaux
            <v-spacer></v-spacer>
            <v-icon @click="visageDialog = false">close</v-icon>
          </v-card-title>
          <v-card-text class="text-left">
            <a href="http://visagesregionaux.org/">
              Visages régionaux
            </a>
            <p>
              Visages régionaux a débuté en 2011, propulsé par un intérêt personnel d’aller vivre en campagne.
            </p>
            <p>
              La bourse Laure Waridel a permis à Marie-Eve Arbour et Simon Côté de sillonner le Québec à la
              découverte de cinquante initiatives rurales porteuses de changement.
            </p>
            <p>
              Cinq ans plus tard, Visages régionaux veut documenter les initiatives qui dessinent une ruralité
              en émergence. Démontrer qu'il y a une panoplie de projets originaux et mobilisateurs et que
              cette multiplication redéfinit la vie rurale. Avec ces données, Visages régionaux entend
              analyser et communiquer les tendances en émergence qui agissent de manière structurante sur les
              communautés et sur la société québécoise dans son ensemble.
            </p>
            <p>
              C'est avec plaisir et avec l'accord de Marie-Eve que nous vous partageons ici le lien vers le
              site web de Visages régionaux afin que vous y entriez votre projet ou un projet qui selon vous
              devrait s'y trouver.
            </p>
            <p>
              Merci de contribuer à dresser le portrait des artisans et artisannes du changement en Gaspésie
              et partout ailleurs au Québec.
            </p>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import PhoneDialog from '@/components/PhoneDialog'
import PhoneNumbers from '@/PhoneNumbers'
import VueScrollTo from 'vue-scrollto'
import Scroll from '@/Scroll'
import Cercles from '@/Cercles'

export default {
  name: 'App',
  components: {
    PhoneDialog
  },
  computed: {
    toolbarLogoHeight: function () {
      if (this.$vuetify.breakpoint.lgAndDown) {
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
    host: function () {
      return window.location.hostname;
    }
  },
  data() {
    return {
      currentLogo: "logo-horizontal.png",
      documentDialog: false,
      presseDialog: false,
      visageDialog: false,
      Scroll: Scroll,
      drawer: false,
      phoneNumbers: PhoneNumbers.data,
      cercles: Cercles,
      documents: [
        {
          lien: "https://drive.google.com/file/d/0B1PuZPF8fTD_aVNySGViM3RjLVdqdUxVSExiRG9LNnNDSnRF/view?usp=sharing",
          nom: "Règlements généraux de la coopérative"
        },
        {
          lien: "https://drive.google.com/file/d/0B1PuZPF8fTD_NWdPT09MYll3amVSTTFtbVFtSFZMWl96YlE4/view?usp=sharing",
          nom: "La petite histoire financière du Loco Local en date du 31 janvier 2016"
        },
        {
          lien: "https://drive.google.com/file/d/0B1PuZPF8fTD_c29XdlV2a3lpY0dNU2JtT0hwR0laR09aZ1Jv/view?usp=sharing",
          nom: "Plan d'action pour la pérennisation du Loco Local"
        },
        {
          lien: "https://drive.google.com/file/d/0B1PuZPF8fTD_Z09MQ1VaTzVIdHM/view?usp=sharing",
          nom: "Rencontre, 29 juin 2016, de réflexion, et d'information des intervenantEs communautaires afin d'aider Horizons à se positionner positivement régionalement."
        },
        {
          lien: "https://drive.google.com/drive/u/1/folders/1dvZaOz1Ib_vxg6IV-R7XBlQHqDnMZI4z",
          nom: "Procès verbal de la dernières assemblée populaire et extraordinaire de la coopérative du 4 décembre 2017."
        },
        {
          lien: "https://drive.google.com/drive/u/1/folders/1dvZaOz1Ib_vxg6IV-R7XBlQHqDnMZI4z",
          nom: "Bilan final du projet Béati 2017-2018"
        }
      ],
      dossiersDePresse: [
        {
          date: "Août 2015",
          text: "Mouton Noir",
          lien: "http://www.moutonnoir.com/2015/08/loco-local"
        },
        {
          date: "Mai 2015",
          text: "Revue Kaléidoscope",
          lien: "http://mediakaleidoscope.org/sur-le-terrain-limpact-de-lausterite/"
        },
        {
          date: "5 juin 2015",
          text: "Sécession à Radio Gaspésie",
          lien: "http://radiogaspesie.ca/la-gaspesie-libre/"
        },
        {
          date: "4 novembre 2015",
          text: "Terra Terre - solutions écologiques pour un développement durable dans l'Islet - petite note sur l'existence d'HG",
          lien: "http://www.terra-terre.ca/public/actualit%C3%A9-terra-terre/page/3/"
        },
        {
          date: "9 avril 2016",
          text: "Participation au panel de Sortir du capitalisme à l'université Concordia à Montréal",
          lien: "http://www.economiesdecommunaute.org/programme/"
        },
        {
          date: "9 avril 2016",
          text: " Une carte des économies de communauté a été construite pour l'occasion regroupant les groupes ayant participé à la réflexion",
          lien: "https://economiesdecommunaute.carto.com/viz/c6bdbc26-e74c-11e5-8d8a-0e5db1731f59/public_map"
        },
        {
          date: "14 juin 2016",
          text: "Atypic au Rendez-vous de l'innovation sociale - conférencier coup de coeur",
          lien: "http://www.atypic.ca/fr/nouvelles/atypic-au-rendez-vous-de-linnovation-sociale-2016/"
        },
        {
          date: "27 juillet 2016",
          text: "Ricochet Les utopistes en action",
          lien: "https://ricochet.media/fr/1294/les-utopistes-en-action"
        },
        {
          date: "27 juillet 2016",
          text: "Gaspésie: Forces vives, de la revue À Bâbord! et repris par Ricochet",
          lien: "https://www.ababord.org/-No-65-ete-2016-"
        },
        {
          date: "22 août 2016",
          text: "Un living lab en Gaspésie ?",
          lien: "http://ici.radio-canada.ca/regions/est-quebec/2016/08/22/009-gaspesie-living-lab-bsl-llio-riviere-du-loup-tourisme.shtml"
        },
        {
          date: "Septembre 2016",
          text: "Sur la page de Visages régionaux",
          lien: "http://visagesregionaux.org/les-initiatives/initiative/economie-sociale-solidaire/cooperative-de-transition-et-de-solidarite-horizons-gaspesiens/"
        }
      ]
    }
  },
  mounted: function () {
    // setInterval(function() {
    //     this.currentLogo = this.currentLogo === 'logo-horizontal.png' ? "logo-loco-horizontal.png" : 'logo-horizontal.png';
    // }.bind(this), 10000);
  }
}
</script>


<style>
* {
  line-height: 1.8;
}

.font-size-xl * {
  font-size: 1.1em;
}

.font-size-lg-and-down * {
  font-size: 1em;
}

#header-banner {
  /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
  /*background-image: linear-gradient(120deg, #667eea 0%, #764ba2 100%);*/
  width: 100 wh;
  height: 90vh;
  background: linear-gradient(-45deg, #007dc8, #ff1a1a, #007dc8);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  font-family: 'Pacifico', cursive !important;
  color: black;
}

.vh-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.grey-text {
  color: rgba(0, 0, 0, 0.54) !important;
}

a {
  text-decoration: none;
}

.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}

.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.bullet-like .v-breadcrumbs__divider {
  padding: 0 !important;
}

#app-navigation .v-btn--active::before {
  background-color: transparent !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
