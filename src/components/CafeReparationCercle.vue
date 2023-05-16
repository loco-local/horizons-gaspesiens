<template>
  <Cercle
      title="Café réparation"
      anchor="cafe-reparation"
      :image="images"
  >
    <div slot="subtitle">
      Ce que j'achète m'appartient, j'en suis responsable tout au long de sa durée. ce n'est pas un déchet, mais une
      richesse
    </div>
    <div slot="content">
      <a href="https://www.facebook.com/locolocal1">
        <v-alert colored-border icon="calendar_month" large elevation="1" class="text-smaller-2" prominent>
          Suivez notre page facebook pour connaître la date du prochain café de réparation.
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
          <v-list-item-title class="text-smaller-2">
            Un café-réparation qui a pignon sur rue à Montréal
          </v-list-item-title>
        </v-list-item>
        <v-list-item href="https://www.facebook.com/groups/touskisrepare/">
<!--          <v-list-item-action>-->
<!--            <v-icon>facebook</v-icon>-->
<!--          </v-list-item-action>-->
          <v-list-item-title class="text-smaller-2">
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
  data: function(){
    return {
      images: ["cafe-reparation/café-réparation.jpg", "cafe-reparation/café-réparation2.jpg", "cafe-reparation/café-réparation3.jpg", "cafe-reparation/café-réparation4.jpg", "cafe-reparation/café-réparation5.jpg"]
    }
  }
}
</script>

<style scoped>

</style>
