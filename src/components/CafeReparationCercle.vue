<template>
  <Cercle
      title="Café réparation"
      anchor="cafe-reparation"
      image="cafe-reparation.jpg"
  >
    <div slot="subtitle">
      Ce que j'achète m'appartient, j'en suis responsable tout au long de sa durée. ce n'est pas un déchet, mais une
      richesse
    </div>
    <div slot="content">
      <a href="https://www.facebook.com/events/878354296102947">
        <v-alert colored-border icon="calendar_today" elevation="1" class="body-1">
          Prochain atelier le dimanche 1er août 2021 de 13h30 à 16h30 au <a href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">Loco Local</a>
        </v-alert>
      </a>
      <p class="">
        L'intention de ces ateliers est de créer l'habitude de se réunir à plusieurs pour partager les solutions, les
        connaissances acquises, les réflexions et les outils afin de rallonger la vie des objets et appareils
        utilitaires; récupérer des composantes pour en faire autres choses; contrer l'obsolescence programmer; etc.
      </p>
      <strong>Concept</strong>
      <p>
        Chacun.e apporte quelque chose à réparer et on trouve ensemble des solutions tout en placotant et en
        s'amusant. Personne n'est ''le'' grand spécialiste, on trouve ensemble les ressources, sur le net ou ailleurs.
        On pourra à long terme faire des achats de groupe pour des outils spécialisés ou des pièces à commander.
      </p>
      <v-list>
        <v-list-item href="https://www.facebook.com/RepaircafeMTL/">
<!--          <v-list-item-action>-->
<!--            <v-icon>facebook</v-icon>-->
<!--          </v-list-item-action>-->
          <v-list-item-title class="body-1">
            Un café-réparation qui a pignon sur sur à Montréal
          </v-list-item-title>
        </v-list-item>
        <v-list-item href="https://www.facebook.com/groups/touskisrepare/">
<!--          <v-list-item-action>-->
<!--            <v-icon>facebook</v-icon>-->
<!--          </v-list-item-action>-->
          <v-list-item-title class="body-1">
            Groupe Facebook d'échange d'informations
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </Cercle>
</template>

<script>
export default {
  name: "CafeReparationCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  },
}
</script>

<style scoped>

</style>
