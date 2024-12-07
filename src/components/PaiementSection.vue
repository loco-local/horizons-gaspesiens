-
<template>
  <div>
    <v-row class="" id="paiement">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-thin">Dons et paiements</h1>
      </v-col>
    </v-row>
    <v-row class="font-weight-thin">
      <v-col cols="12">
        <v-card
            flat
            class="text-body-1"
            :class="{
            'mt-5 mb-12': $vuetify.display.mdAndUp,
            'mt-5 mb-4': $vuetify.display.smAndDown,
          }"
        >
          <v-row fill-height>
            <v-col cols="12" md="6" class="">
              <div class="text-h5 mb-8">Comment payer</div>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1">
                  <v-icon start>email</v-icon>
                  <span class="font-weight-bold text-body-1">Par courriel</span>
                  à admin@loco-local.net
                  <v-btn
                      variant="outlined"
                      v-clipboard:copy="'admin@loco-local.net'"
                      size="small"
                  >copier
                  </v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1 font-italic">
                  Utilisez
                  <span class="font-weight-bold text-left">bonaventure</span>
                  comme réponse à la question
                </v-col>
              </v-row>
              <v-divider class="mt-8 mb-8"></v-divider>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1">
                  <v-icon start>paid</v-icon>
                  <span class="font-weight-bold text-body-1">En argent comptant,</span>
                  à la caisse du Loco Local
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1 font-italic">
                  Inscrire la transaction
                  <a href="https://caisse.loco-local.net">dans l'application</a>
                  ou bien indiquer le descriptif sur la feuille des transactions.
                </v-col>
              </v-row>
              <v-divider class="mt-8 mb-8"></v-divider>
              <v-row>
                <v-col cols="0" md="2"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1">
                  <v-icon start>receipt</v-icon>
                  <span class="font-weight-bold text-body-1">Par chèque</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col cols="12" md="8" class="text-left text-body-1 font-italic">
                  Au nom de la Coopérative de Solidarité Horizons Gaspésiens.
                </v-col>
              </v-row>
              <v-divider class="mt-8 mb-8"></v-divider>
              <v-row>
                <v-col cols="0" md="2" class="pa-0"></v-col>
                <v-col
                    cols="12"
                    md="4"
                    xl="3"
                    class="text-md-left text-center"
                    :class="{
                    'pb-2': $vuetify.display.smAndDown,
                  }"
                >
                  <v-icon start>account_balance</v-icon>
                  <span class="font-weight-bold text-body-1"
                  >Par transit desjardins</span
                  >
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    xl="7"
                    class="text-md-left text-center pl-6 pb-6 text-body-1"
                    style="margin-top: -7px"
                >
                  <div>
                    <span class="font-weight-bold text-body-1">Transit caisse:</span>
                    40001
                    <v-btn variant="outlined" v-clipboard:copy="'40001'" size="x-small">copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold text-body-1">No Institution:</span>
                    815
                    <v-btn variant="outlined" v-clipboard:copy="'815'" size="x-small">copier</v-btn>
                  </div>
                  <div>
                    <span class="font-weight-bold text-body-1">Folio:</span> 0451286
                    <v-btn variant="outlined" v-clipboard:copy="'0451286'" size="x-small"
                    >copier
                    </v-btn
                    >
                  </div>
                </v-col>
              </v-row>
              <v-card v-if="false">
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
                    <v-tab>
                      <v-icon class="mr-6">email</v-icon>
                      Par courriel
                    </v-tab>
                    <v-tab>
                      Par transit Desjardins
                    </v-tab>
                  </v-tabs>
                  <v-window v-model="paiementTab">
                    <v-window-item>
                      <v-stepper
                          non-linear
                          v-model="paiementCourrielStepper"
                          class="ml-6"
                      >
                        <v-stepper-header>
                          <v-stepper-item
                              step="1"
                              value="1"
                              color="black"
                              class="text-body-1"
                              editable
                          >
                            Virement
                          </v-stepper-item>

                          <v-divider></v-divider>

                          <v-stepper-item
                              step="2"
                              value="2"
                              editable
                              color="black"
                              class="text-body-1"
                          >
                            Destinataire
                          </v-stepper-item>
                        </v-stepper-header>

                        <v-stepper-window>
                          <v-stepper-window-item value="1">
                            <v-card>
                              <v-card-text v-if="$vuetify.display.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement interact.jpg')
                                  "
                                ></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.display.smAndDown">
                                Dans votre AccèsD, choisissez "Virez" puis
                                "Virements Interact"
                              </v-card-text>
                            </v-card>
                          </v-stepper-window-item>
                          <v-stepper-window-item value="2">
                            <v-card>
                              <v-card-text v-if="$vuetify.display.mdAndUp">
                                <v-img
                                    :src="require('../assets/faire virement.png')"
                                ></v-img>
                              </v-card-text>
                              <v-card-text v-if="$vuetify.display.smAndDown">
                                Comme question de sécurité, vous pouvez
                                inscrire: Q:Dans quelle ville est le Loco Local?
                                R:Bonaventure
                              </v-card-text>
                            </v-card>
                          </v-stepper-window-item>
                        </v-stepper-window>
                      </v-stepper>
                    </v-window-item>
                    <v-window-item>
                      <v-stepper
                          non-linear
                          v-model="desjardinsStepper"
                          class="ml-6"
                      >
                        <v-stepper-header>
                          <v-stepper-item
                              step="1"
                              value="1"
                              color="black"
                              class="text-body-1"
                              editable
                          >
                            Virement
                          </v-stepper-item>

                          <v-divider></v-divider>

                          <v-stepper-item
                              editable
                              step="2"
                              value="2"
                              color="black"
                              class="text-body-1"
                          >
                            Folio et Transit
                          </v-stepper-item>

                          <v-divider></v-divider>

                          <v-stepper-item
                              editable
                              step="3"
                              value="3"
                              color="black"
                              class="text-body-1"
                          >
                            Fréquence
                          </v-stepper-item>
                        </v-stepper-header>
                        <v-stepper-window>
                          <v-stepper-window-item value="1">
                            <v-card>
                              <v-card-text v-if="$vuetify.display.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement entre personnes.jpg')
                                  "
                                ></v-img>
                              </v-card-text>
                              <v-card-text
                                  v-if="$vuetify.display.smAndDown"
                                  class="text-body-1"
                              >
                                Dans votre AccèsD, choisissez "Virez" puis
                                "Virements entre personnes Desjardins"
                              </v-card-text>
                            </v-card>
                          </v-stepper-window-item>
                          <v-stepper-window-item value="2">
                            <v-card>
                              <v-card-text v-if="$vuetify.display.smAndDown">
                                Cliquez sur l'onglet "Ajouter un bénéficiaire"
                              </v-card-text>
                              <v-card-title class="text-subtitle-1 pb-0">
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
                              <!--<v-card-text v-if="$vuetify.display.mdAndUp">-->
                              <!--<v-img :src="require('../assets/ajouter un bénéficiaire.png')"></v-img>-->
                              <!--</v-card-text>-->
                            </v-card>
                          </v-stepper-window-item>
                          <v-stepper-window-item value="3">
                            <v-card>
                              <v-card-title class="text-h6">
                                Choisisez "Une fois le" pour un transfert
                                ponctuel ou "Mensuelle" pour un don récurrent
                              </v-card-title>
                              <v-card-text v-if="$vuetify.display.mdAndUp">
                                <v-img
                                    :src="
                                    require('../assets/virement mensuel.png')
                                  "
                                ></v-img>
                              </v-card-text>
                            </v-card>
                          </v-stepper-window-item>
                        </v-stepper-window>
                      </v-stepper>
                    </v-window-item>
                  </v-window>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" left>
              <v-card-text class="text-left text-body-1">
                <h5 class="mb-8 text-h5">
                  Soutenez la coop !
                </h5>
                <ul>
                  <li class="text-h6 font-weight-regular mb-2">
                    <v-btn variant="flat" href="https://horizonsgaspesiens.net/devenez-membre" target="_blank"
                           background-color="#ff3301"
                           color="#ff3301"
                    >
                      Devenez membre
                    </v-btn>
                  </li>
                  <li class="text-h6 font-weight-regular mb-2">
                    <v-btn variant="flat" href="https://horizonsgaspesiens.net/devenez-membre" target="_blank"
                           background-color="#ff3301"
                           color="#ff3301"
                    >
                      Devenez membre de soutien
                    </v-btn>
                    avec une donation mensuelle
                  </li>
                  <li class="text-h6 font-weight-regular mb-2">
                    Ouvrez un compte prépayé pour savons, chocolat et autres
                  </li>
                </ul>
                <v-card class="mt-4" max-width="500" elevation="6">
                  <v-card-text class="text-h6 font-weight-regular">
                    <v-icon color="primary" start>favorite</v-icon>
                    Un grand merci à toutes celles et ceux qui ont donné en
                    argent, temps, objets, idées, etc!
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PaiementSection",

  data: function () {
    return {
      paiementTab: 0,
      desjardinsStepper: 0,
      paiementCourrielStepper: 0,
    }
  }
}
</script>

<style scoped>

</style>
