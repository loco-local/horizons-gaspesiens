<template>
  <div>
    <v-layout row wrap class="" id="paiement">
      <v-flex xs12 class="text-center">
        <h1 class="display-2 font-weight-thin">Dons et paiements</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="font-weight-thin">
      <v-flex xs12>
        <v-card
            flat
            class="body-1"
            :class="{
            'mt-5 mb-12': $vuetify.breakpoint.mdAndUp,
            'mt-5 mb-4': $vuetify.breakpoint.smAndDown,
          }"
        >
          <v-layout row wrap fill-height>
            <v-flex xs12 md6 class="">
              <div class="text-h5 mb-8">Comment payer</div>
              <v-layout row wrap class="pb-2">
                <v-flex xs0 md2></v-flex>
                <v-flex xs12 md8 class="text-md-left text-center body-1">
                  <v-icon class="mr-2">email</v-icon>
                  <span class="font-weight-bold body-1">Par courriel</span>
                  à horizonsgaspesiens@gmail.com
                  <v-btn
                      text
                      v-clipboard:copy="'horizonsgaspesiens@gmail.com'"
                      small
                  >copier
                  </v-btn
                  >
                </v-flex>
              </v-layout>
              <v-divider class="mt-8 mb-8"></v-divider>
              <v-layout row wrap>
                <v-flex xs0 md2 xl2></v-flex>
                <v-flex
                    xs12
                    md4
                    xl3
                    class="text-md-left text-center"
                    :class="{
                    'pb-2': $vuetify.breakpoint.smAndDown,
                  }"
                >
                  <span class="font-weight-bold body-1"
                  >Par transit desjardins</span
                  >
                </v-flex>
                <v-flex
                    xs12
                    md6
                    xl7
                    class="text-md-left text-center pl-6 pb-6 body-1"
                    style="margin-top: -7px"
                >
                  <div>
                    <span class="font-weight-bold body-1">Transit caisse:</span>
                    40001
                    <v-btn text v-clipboard:copy="'40001'" small>copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold body-1">No Institution:</span>
                    815
                    <v-btn text v-clipboard:copy="'815'" small>copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold body-1">Folio:</span> 0451286
                    <v-btn text v-clipboard:copy="'0451286'" small
                    >copier
                    </v-btn
                    >
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
                    <v-tab
                        @click.prevent="paiementTab = 0"
                        href="#"
                        class="body-1"
                    >
                      <v-icon class="mr-6">email</v-icon>
                      Par courriel
                    </v-tab>
                    <v-tab
                        @click.prevent="paiementTab = 1"
                        href="#"
                        class="body-1"
                    >
                      Par transit Desjardins
                    </v-tab>
                    <v-tab-item>
                      <v-stepper
                          non-linear
                          v-model="paiementCourrielStepper"
                          class="ml-6"
                      >
                        <v-stepper-header>
                          <v-stepper-step
                              editable
                              :complete="paiementCourrielStepper > 1"
                              step="1"
                              color="black"
                              class="body-1"
                          >
                            Virement
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step
                              editable
                              :complete="paiementCourrielStepper > 2"
                              step="2"
                              color="black"
                              class="body-1"
                          >
                            Destinataire
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                          <v-stepper-content step="1">
                            <v-card>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement interact.jpg')
                                  "
                                ></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                Dans votre AccèsD, choisissez "Virez" puis
                                "Virements Interact"
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>

                          <v-stepper-content step="2">
                            <v-card>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img
                                    :src="require('../assets/faire virement.png')"
                                ></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                Comme question de sécurité, vous pouvez
                                inscrire: Q:Dans quelle ville est le Loco Local?
                                R:Bonaventure
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>
                        </v-stepper-items>
                      </v-stepper>
                    </v-tab-item>
                    <v-tab-item>
                      <v-stepper
                          non-linear
                          v-model="desjardinsStepper"
                          class="ml-6"
                      >
                        <v-stepper-header>
                          <v-stepper-step
                              editable
                              :complete="desjardinsStepper > 1"
                              step="1"
                              color="black"
                              class="body-1"
                          >
                            Virement
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step
                              editable
                              :complete="desjardinsStepper > 2"
                              step="2"
                              color="black"
                              class="body-1"
                          >
                            Folio et Transit
                          </v-stepper-step>

                          <v-divider></v-divider>

                          <v-stepper-step
                              editable
                              step="3"
                              color="black"
                              class="body-1"
                          >
                            Fréquence
                          </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                          <v-stepper-content step="1">
                            <v-card>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement entre personnes.jpg')
                                  "
                                ></v-img>
                              </v-card-text>
                              <v-card-text
                                  v-if="$vuetify.breakpoint.smAndDown"
                                  class="body-1"
                              >
                                Dans votre AccèsD, choisissez "Virez" puis
                                "Virements entre personnes Desjardins"
                              </v-card-text>
                            </v-card>
                          </v-stepper-content>

                          <v-stepper-content step="2">
                            <v-card>
                              <v-card-text v-if="$vuetify.breakpoint.smAndDown">
                                Cliquez sur l'onglet "Ajouter un bénéficiaire"
                              </v-card-text>
                              <v-card-title class="subtitle-1 pb-0">
                                <span>
                                  <span class="font-weight-bold"
                                  >Transit caisse</span
                                  >
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
                                  <span class="font-weight-bold"> Folio </span>
                                  0451286
                                </span>
                              </v-card-title>
                              <!--<v-card-text v-if="$vuetify.breakpoint.mdAndUp">-->
                              <!--<v-img :src="require('../assets/ajouter un bénéficiaire.png')"></v-img>-->
                              <!--</v-card-text>-->
                            </v-card>
                          </v-stepper-content>

                          <v-stepper-content step="3">
                            <v-card>
                              <v-card-title class="text-h6">
                                Choisisez "Une fois le" pour un transfert
                                ponctuel ou "Mensuelle" pour un don récurrent
                              </v-card-title>
                              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement mensuel.png')
                                  "
                                ></v-img>
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
              <v-card-text class="text-left body-1">
                <p>
                  Vous voulez soutenir l'établissement durable de ce projet
                  "pour et par" la communauté?
                </p>
                <ul>
                  <li>
                    Devenez membre utilisateurs-consommateurs de la Coopérative
                    Horizons Gaspésiens, dont le Loco Local est un des projets.
                  </li>
                  <li>
                    Devenez membre de soutien du Loco Local en faisant une
                    donation mensuelle régulière
                  </li>
                  <li>Ouvrez un compte prépayé pour savons, chocolat et autres pour 150$</li>
                </ul>
                <p>
                  Un grand merci à toutes celles et ceux qui ont donné, en
                  argent, temps, objets, idées, etc!
                </p>
                <h3>Modes de paiement</h3>
                <p>
                  Argent comptant ou chèque: passez au Loco Local pour y déposer
                  votre don dans une boîte de contribution volontaire à
                  l'entrée, en argent comptant ou par chèque, en inscrivant que
                  vous êtes passé-e!
                </p>
                <p>
                  Virement entre personnes Desjardins par AccèsD, c'est la
                  manière la plus simple et efficace pour nous.
                </p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Paiement",

  data: function () {
    return {
      paiementTab: 0,
      desjardinsStepper: 1,
      paiementCourrielStepper: 1,
    }
  }
}
</script>

<style scoped>

</style>
