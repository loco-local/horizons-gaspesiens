<template>
  <div
      id="app"
      :class="{
      'font-size-xl': $vuetify.breakpoint.xl,
      'font-size-lg-and-down': $vuetify.breakpoint.lgAndDown,
    }"
  >
    <v-app>
      <v-navigation-drawer
          v-model="desktopDrawer"
          fixed
          right
          app
          temporary
      >
        <v-list-item @click="Scroll.allerALaSection('about', '/');desktopDrawer=false;"
                     class="text-left body-2">
          <v-list-item-content>
            <v-list-item-title class="text">
              À propos
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/adhesion" class="text-left body-2">
          <v-list-item-content>
            <v-list-item-title>
              Vérifiez votre adhésion
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/tarification" class="text-left body-2">
          <v-list-item-content>
            <v-list-item-title>
              Tarification de la salle
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            v-for="(cercle, clef) in cercles"
            :key="clef"
            :to="cercle.lien"
            class="text-left body-2"
        >
          <v-list-item-content>
            <v-list-item-title>{{ cercle.nom }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.facebook.com/locolocal1" class="body-1">
          <v-list-item-title class="text-left">
            /locolocal1
          </v-list-item-title>
          <v-list-item-action>
            <img
                src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30"
            />
          </v-list-item-action>
        </v-list-item>
      </v-navigation-drawer>
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
          <div
              v-for="phone in phoneNumbers"
              :key="phone.nom"
              :href="'tel:' + phone.telephone"
          >
            <v-list-item :href="'tel:' + phone.telephone">
              <v-list-item-avatar>
                <img :src="require('./assets/' + phone.avatar)"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ phone.nom }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ phone.telephone }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>phone</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider class="mb-2 mt-2"></v-divider>
          </div>
          <v-list-item
              href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
          >
            <v-list-item-title class="text-left">
              193a Avenue Grand-Pré, Bonaventure, QC
            </v-list-item-title>
            <v-list-item-action>
              <v-icon>location_on</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item to="/paiement">
            <v-list-item-title class="text-left">Don et paiement</v-list-item-title>
            <v-list-item-action>
              <v-icon>attach_money</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
              to="/calendrier"
          >
            <v-list-item-title class="text-left">Calendrier</v-list-item-title>
            <v-list-item-action>
              <v-icon>calendar_month</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
              to="/reservation"
          >
            <v-list-item-title class="text-left">
              Réservation
            </v-list-item-title>
            <v-list-item-action>
              <v-icon>event</v-icon>
            </v-list-item-action>
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
          <v-list-item
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0Z1IH1lYZ8sL-4umROhOXSJ83NIAzIbIAWAlMvGaE7mM7eg/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
          >
            <v-list-item-title class="text-left">Devenez membre</v-list-item-title>
            <v-list-item-action>
              <v-icon>check</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
              to="/adhesion"
          >
            <v-list-item-title class="text-left">Vérifiez votre adhésion</v-list-item-title>
            <v-list-item-action>
              <v-icon>check</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
              to="/tarification"
          >
            <v-list-item-title class="text-left">Tarification de la salle</v-list-item-title>
            <v-list-item-action>
              <v-icon>attach_money</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item @click="Scroll.allerALaSection('about', '/');drawer=false;" class="text-left">
            <v-list-item-title>
              À propos
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="documentDialog = true">
            <v-list-item-title class="text-left">Documents</v-list-item-title>
            <v-list-item-action>
              <v-icon>articles</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item @click="presseDialog = true">
            <v-list-item-title class="text-left">Dossier de presse</v-list-item-title>
            <v-list-item-action>
              <v-icon>newspaper</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
              v-for="(cercle, clef) in cercles"
              :key="clef"
              :to="cercle.lien"
              class="text-left"
          >
            <v-list-item-content>
              <v-list-item-title>{{ cercle.nom }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div id="nav" class="pa-0">
        <v-app-bar
            color="white"
            app
            :class="{
            'no-padding': $vuetify.breakpoint.smAndDown,
          }"
            style="z-index: 4"
        >
          <v-app-bar-nav-icon
              @click="drawer = !drawer"
              v-if="$vuetify.breakpoint.smAndDown"
          ></v-app-bar-nav-icon>
          <router-link
              to="/"
              class="mt-3"
              :class="{
              'pl-4': $vuetify.breakpoint.smAndDown,
            }"
          >
            <!--<transition name="fade">-->
            <!--<img :src='require("./assets/" + currentLogo)'-->
            <!--:key="currentLogo"-->
            <!--style="position: absolute;left:10px;top:15px;"-->
            <!--class="pull-right"-->
            <!--:height="this.toolbarLogoHeight" @click="Scroll.allerALaSection('app')">-->
            <!--</transition>-->
            <img
                :src="require('./assets/logo-horizontal.png')"
                :height="this.toolbarLogoHeight"
                v-if="true"
                @click="Scroll.allerALaSection('app')"
            />
            <img
                :src="require('./assets/logo-loco-horizontal.png')"
                :height="this.toolbarLogoHeight + 20"
                v-if="false"
            />
          </router-link>
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                :small="$vuetify.breakpoint.lgAndDown"
                text
                to="/paiement"
            >
              <v-icon
                  :class="{
                  'mr-3': $vuetify.breakpoint.xlOnly,
                  'mr-0': $vuetify.breakpoint.mdAndDown,
                }"
              >attach_money
              </v-icon>
              <span v-if="$vuetify.breakpoint.xlOnly" class=""> Don et paiement </span>
              <span v-if="$vuetify.breakpoint.lgAndDown">Don/paiement</span>
            </v-btn>
            <v-btn
                :small="$vuetify.breakpoint.lgAndDown"
                text
                to="/calendrier"
            >
              <v-icon
                  :class="{
                  'mr-3': $vuetify.breakpoint.xlOnly,
                  'mr-0': $vuetify.breakpoint.lgAndDown,
                }"
              >
                calendar_month
              </v-icon>
              Calendrier
            </v-btn>
            <v-btn
                :small="$vuetify.breakpoint.lgAndDown"
                text
                to="/reservation"
            >
              <v-icon
                  :class="{
                  'mr-3': $vuetify.breakpoint.lgAndUp,
                  'mr-0': $vuetify.breakpoint.mdAndDown,
                }"
              >
                event
              </v-icon>
              Réservation
            </v-btn>
            <v-btn
                dark
                color="#ff3301"
                :small="$vuetify.breakpoint.lgAndDown"
                v-if="$vuetify.breakpoint.lgAndUp"
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0Z1IH1lYZ8sL-4umROhOXSJ83NIAzIbIAWAlMvGaE7mM7eg/viewform?vc=0&c=0&w=1&flr=0"
            >
              <v-icon left>check</v-icon>
              Devenez membre
            </v-btn>

            <v-btn
                :small="$vuetify.breakpoint.lgAndDown"
                text
                href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983"
            >
              <v-icon
                  :class="{
                  'mr-3': $vuetify.breakpoint.xlOnly,
                  'mr-0': $vuetify.breakpoint.lgAndDown,
                }"
              >location_on
              </v-icon>
              Adresse
            </v-btn>
            <v-btn
                :small="$vuetify.breakpoint.lgAndDown"
                text
                @click="$refs.phoneDialog.show()"
            >
              <v-icon
                  :class="{
                  'mr-3': $vuetify.breakpoint.xlOnly,
                  'mr-0': $vuetify.breakpoint.lgAndDown,
                }"
              >phone
              </v-icon>
              <span v-if="$vuetify.breakpoint.xlOnly">Téléphone</span>
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
          </v-toolbar-items>
          <v-toolbar-title
              class="text-h6 text-uppercase special-font"
              style="font-weight: bold"
          >
          </v-toolbar-title>
          <v-app-bar-nav-icon @click.stop="desktopDrawer = !desktopDrawer"
                              v-if="$vuetify.breakpoint.mdAndUp"></v-app-bar-nav-icon>
        </v-app-bar>
      </div>
      <router-view/>
      <v-divider class="mt-8 mb-8"></v-divider>
      <p
          class="special-font headline"
          style="font-family: 'Pacifico', cursive !important"
      >
        Merci à tous les bénévoles, clients et organismes partenaires
      </p>
      <v-divider class="mt-8 mb-8"></v-divider>
      <v-row class="pl-4 pr-4">
        <v-col cols="0" lg="2"></v-col>
        <v-col cols="12" md="4" :class="{
          'vh-center' : $vuetify.breakpoint.smAndDown
          }">
          <v-card flat href="https://mrcbonaventure.com/" width="300" :class="{
            'float-right': $vuetify.breakpoint.mdAndUp
          }">
            <v-card style="background-color: #002c51;" class="pa-4" flat outlined>
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
          'vh-center' : $vuetify.breakpoint.smAndDown
          }">
          <v-card flat href="https://www.urlsgim.com/" width="300" :class="{
            'float-right': $vuetify.breakpoint.mdAndUp
          }">
            <v-card class="pa-4" flat outlined>
              <v-img :src="require('@/assets/logo-loisir-et-sport-gim.png')"
                     alt="Loisir et Sport Gaspésie-Îles-de-la-Madeleine"></v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="align-self-center">
          <p class="text-left body-1 text-h6 font-weight-regular">
            Merci à Loisir et Sport Gaspésie-Îles-de-la-Madeleine pour les dons d'équipements pour bouger au
            Loco Local
            !
          </p>
        </v-col>
        <v-col cols="0" lg="2"></v-col>
      </v-row>
      <div class="mt-8 mb-8"></div>
      <v-footer class="pa-4" dark>
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="documentDialog = true"
            v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-icon left>
            articles
          </v-icon>
          Documents
        </v-btn>
        <v-btn
            text
            @click="presseDialog = true"
            v-if="$vuetify.breakpoint.mdAndUp"
        >
          <v-icon left>
            newspaper
          </v-icon>
          Presse
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            text
            href="https://www.facebook.com/locolocal1"
            class="mr-2 mb-1"
        >
          <img
              src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30"
          />
        </v-btn>
        <a href="https://github.com/VincentBlouin/horizons-gaspesiens">
          <img
              height="32"
              width="32"
              :src="require('@/assets/GitHub-Mark-Light-32px.png')"
              class="mt-1"
          />
        </a>
      </v-footer>
      <PhoneDialog ref="phoneDialog"></PhoneDialog>
      <v-dialog v-model="presseDialog" width="900">
        <v-card>
          <v-card-title class="title">
            Dossier de presse
            <v-spacer></v-spacer>
            <v-icon @click="presseDialog = false">close</v-icon>
          </v-card-title>
          <v-card-text class="body-1">
            <v-list>
              <v-list-item
                  v-for="presse in dossiersDePresse"
                  :key="presse.lien"
                  :href="presse.lien"
                  class="text-left"
              >
                <v-list-item-title class="body-1">
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
            <v-icon @click="documentDialog = false">close</v-icon>
          </v-card-title>
          <v-card-text class="body-1">
            <v-list>
              <v-list-item
                  v-for="document in documents"
                  :key="document.nom"
                  :href="document.lien"
                  target="_blank"
                  class="text-left"
              >
                <v-list-item-action>
                  <v-icon>articles</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  {{ document.nom }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-app>
    <v-bottom-sheet v-model="isMessagePandemie">
      <v-sheet
          class="text-center"
          height="200px"
      >
        <v-btn
            class="mt-6"
            text
            color="red"
            @click="isMessagePandemie = !isMessagePandemie"
        >
          Fermer
        </v-btn>
        <div class="py-3 text-h6 font-weight-regular">
          Pour savoir ce qui est possible de faire au Loco Local avec les mesures sanitaires, vous pouvez nous
          <a @click.prevent="$refs.phoneDialog.show()" class="text-h6 font-weight-regular">contacter par
            téléphone.</a>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import PhoneDialog from "@/components/PhoneDialog";
import PhoneNumbers from "@/PhoneNumbers";
import Scroll from "@/Scroll";
import Cercles from "@/Cercles";

export default {
  name: "App",
  components: {
    PhoneDialog,
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
    },
  },
  data() {
    return {
      isMessagePandemie: false,
      currentLogo: "logo-horizontal.png",
      documentDialog: false,
      presseDialog: false,
      Scroll: Scroll,
      drawer: false,
      desktopDrawer: false,
      phoneNumbers: PhoneNumbers.data,
      cercles: Cercles.actifs,
      documents: [
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
        // {
        //   lien:
        //       "https://drive.google.com/file/d/0B1PuZPF8fTD_NWdPT09MYll3amVSTTFtbVFtSFZMWl96YlE4/view?usp=sharing",
        //   nom:
        //       "La petite histoire financière du Loco Local en date du 31 janvier 2016",
        // },
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
        // {
        //   lien:
        //       "https://drive.google.com/file/d/0B1PuZPF8fTD_Z09MQ1VaTzVIdHM/view?usp=sharing",
        //   nom:
        //       "Rencontre, 29 juin 2016, de réflexion, et d'information des intervenantEs communautaires afin d'aider Horizons à se positionner positivement régionalement.",
        // },
        // {
        //   lien:
        //       "https://drive.google.com/drive/u/1/folders/1dvZaOz1Ib_vxg6IV-R7XBlQHqDnMZI4z",
        //   nom:
        //       "Procès verbal de la dernières assemblée populaire et extraordinaire de la coopérative du 4 décembre 2017.",
        // },
        // {
        //   lien:
        //       "https://drive.google.com/drive/u/1/folders/1dvZaOz1Ib_vxg6IV-R7XBlQHqDnMZI4z",
        //   nom: "Bilan final du projet Béati 2017-2018",
        // },
      ],
      dossiersDePresse: [
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
      ],
    };
  },
  mounted: function () {
    // setInterval(function() {
    //     this.currentLogo = this.currentLogo === 'logo-horizontal.png' ? "logo-loco-horizontal.png" : 'logo-horizontal.png';
    // }.bind(this), 10000);
  },
};
</script>


<style lang="scss">
.text {
  line-height: 1.8;
}

.text-smaller {
  line-height: 1.6;
}

.font-size-xl {
  .text {
    font-size: 1.4em;
  }

  .text-smaller {
    font-size: 1.3em;
  }

  .text-smaller-2 {
    font-size: 1em;
  }
}

.font-size-lg-and-down {
  .text {
    font-size: 1em;
  }

  .text-smaller {
    font-size: 0.9em;
  }

  .text-smaller-2 {
    font-size: 0.8em;
  }
}

.v-tab {
  font-size: 1em;
}

.v-tab * {
  font-size: 1em;
}

.v-tabs__slider {
  height: 3px;
}

.v-calendar-daily__interval-text {
  font-size: 14px !important
}

.v-calendar-daily_head-weekday {
  font-size: 14px !important
}

.v-time-picker-clock__item {
  font-size: 16px;
}

.v-input {
  font-size: 18px;
}

button {
  font-size: 18px !important;
}

.v-date-picker-table .v-btn {
  font-size: 12px !important;
}

#header-banner {
  /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
  /*background-image: linear-gradient(120deg, #667eea 0%, #764ba2 100%);*/
  width: 100 wh;
  height: auto;
  padding-top: 15%;
  padding-bottom: 15%;
  background: linear-gradient(-45deg, #007dc8, #ff1a1a, #007dc8);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.v-card__title {
  word-break: inherit !important;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>
