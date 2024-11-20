<template>
  <div>
    <v-dialog v-model="phoneModal" v-if="phoneModal" width="600">
      <v-card>
        <v-card-title class="pb-2 text-h6">
          <!--                    Téléphones de bénévoles-->
          Téléphone
          <v-spacer></v-spacer>
          <v-icon @click="phoneModal = false">close</v-icon>
        </v-card-title>
        <!--                <v-card-subtitle class="grey-text subtitle-1 grey-text pt-0 mt-0 text-left">-->
        <!--                    N'hésitez pas à contacter ces bénévoles pour le code de la porte, une réservation ou tout autre-->
        <!--                    sujet.-->
        <!--                </v-card-subtitle>-->
        <v-card-text class="pt-0 text-body-2">
          <v-list lines="two" class="text-left">
            <v-list-item href="tel:581-630-0058">
              <v-list-item-action class="mr-8">
                <v-icon>phone</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                581-630-0058
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PhoneDialog",
  data() {
    return {
      phoneModal: false
    }
  },
  methods: {
    show() {
      this.phoneModal = true;
    }
  }
}
</script>

<style scoped>

</style>
