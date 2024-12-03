<template>
  <PageWrap>
    <v-layout row wrap slot="content" class="text-body-1">
      <v-flex xs12 md3>
        <v-img :src="require('@/assets/sécession (1).jpg')"></v-img>
      </v-flex>
      <v-flex xs12 md9 class="text-left pl-6 pt-0 mt-0">
        <h3 class="text-h6 mb-4">
          Sécession: et si la Gaspésie devenait un pays libre?
        </h3>
        <p>
          "Sécession : Et si la Gaspésie devenait un pays libre?" se veut une réflexion d’équipe sur trois
          grands défis auxquels le Québec est confronté présentement : la transition de notre modèle
          économique, la réforme de nos institutions démocratiques et la restauration de la collaboration
          entre le milieu urbain et la campagne. Codirigé par Philippe Garon et David Bourdages, l’essai
          collectif Sécession est une réflexion libre et diversifiée sur l’avenir de la Gaspésie.
        </p>
        <p>
          Par une approche libre et diversifiée, les multiples points de vue proposés visent plus à informer
          et stimuler le questionnement qu’à imposer des réponses. Au lieu de continuer à creuser le fossé qui
          sépare les diverses factions en présence, la parole gaspésienne peut-elle nous encourager à définir
          un nouveau contrat social au Québec?
        </p>
        <p>
          Philippe Garon, Pascal Alain, Martin Zibeau, Philippe Derudder, David Bourdages, Myreille Allard,
          Daniel Côté, Roxanne Langlois, Gérard Mathar, Roseline Lemire-Cadieux et Daniel Rondeau proposent
          des réflexions sur les bouleversements stratégiques et économiques que vit actuellement la Gaspésie.
        </p>
        <p>
          Tiré à 500 exemplaires seulement, il est disponible au Loco Local!
        </p>
        <p>
          <a href="http://www.lafabriqueculturelle.tv/capsules/5349/secession-et-si-la-gaspesie-devenait-un-pays-libre">
            Petit vidéo sur le livre, par la Fabrique Culturelle
          </a>
        </p>
      </v-flex>
    </v-layout>
  </PageWrap>
</template>

<script>
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "SécessionPage",
  components: {
    PageWrap
  }
}
</script>

<style scoped>

</style>
