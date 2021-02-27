<template>
  <Cercle
      title="Notre structure de gouvernance: l'Holacracy!"
      anchor="gouvernance"
      class="pa-0"
      :image="gouvernanceImages"
  >
    <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
    <div slot="subtitle">
      L'Holacracy est une méthode de gestion horizontale qui fonctionne avec
      des cercles (comités) de travail et nous demandons à chacun des cercles
      de définir sa raison d'être au sein d'Horizons Gaspésiens, ses rôles et
      redevabilités.
    </div>
    <div slot="content">
      <v-card class="mb-6">
        <v-card-title class="title"> À propos de l'Holacracy</v-card-title>
        <v-list>
          <v-list-item
              href="https://labdsurlholacracy.com/bande-dessinee-holacracy"
          >
            <v-list-item-action>
              <v-icon>fa-book-reader</v-icon>
            </v-list-item-action>
            <v-list-item-title class="body-1">
              Bande dessinée
            </v-list-item-title>
          </v-list-item>
          <v-list-item href="https://www.holacracy.org/webinar-recording">
            <v-list-item-action>
              <v-icon>movie</v-icon>
            </v-list-item-action>
            <v-list-item-title class="body-1"> Vidéo</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://igipartners.com/constitution-holacracy">
            <v-list-item-action>
              <v-icon>account_balance</v-icon>
            </v-list-item-action>
            <v-list-item-title class="body-1"> Principes</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
      <p>Les cercles et leurs membres sont énumérés sur ce site.</p>
      <p>
        La raison d'être du cercle "Gouvernance" est d'installer la gestion
        participative dans Horizons Gaspésiens.
      </p>
      <p>
        <v-card>
          <v-card-title class="title">
            Cercles d'Horizons Gapésiens
          </v-card-title>
          <v-list>
            <v-list-item
                href="https://docs.google.com/document/d/1XQFmsfxNzZA4oryQ1IvUjf0otLuk0TjkVTEEglNEqE8"
            >
              <v-list-item-action>
                <v-icon>fa-file</v-icon>
              </v-list-item-action>
              <v-list-item-title class="body-1">
                Octobre 2018
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </p>
    </div>
  </Cercle>
</template>

<script>
export default {
  name: "GouvernanceCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  },
  data: function () {
    return {
      gouvernanceImages: ["reunion-debout.jpg", "gouvernance-2.jpg"],
    }
  }
}
</script>

<style scoped>

</style>