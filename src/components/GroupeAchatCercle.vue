<template>
  <CercleWrap
      title="Groupe d'achat"
      anchor="groupe-achat"
      :image="images"
  >
    <!--https://pixabay.com/fr/haricots-assortiment-agriculture-3861864/-->
    <template v-slot:subtitle>
      Commander des produits biologiques, locaux, en grand format pour limiter
      la quantité d'emballage, et acheter ensemble pour réduire le coût
      d'achat et augmenter la diversité et l'accessibilité d'une nourriture
      saine et responsable.
    </template>
    <template v-slot:content>
      <p>
        Manger devient alors un moyen de constuire une communauté durable et
        autonome, saine et solidaire.
      </p>
      <v-card class="mt-6">
        <v-list class="">
          <v-list-item
              href="mailto:groupe.achat.hg@gmail.com,she_know@hotmail.com"
          >
            <template v-slot:prepend>
              <v-icon size="large">mail</v-icon>
            </template>
            <v-list-item-title class="text-smaller-2">
              Demande d'adhésion à groupe.achat.hg@gmail.com
            </v-list-item-title>
          </v-list-item>
          <v-list-item href="https://commande.loco-local.net/loco-local">
            <template v-slot:prepend>
              <v-icon size="large">app_shortcut</v-icon>
            </template>
            <v-list-item-title class="text-smaller-2">
              Logiciel de commande
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              href="http://horizonsgaspesiens.net/sites/default/files/Compte-rendu_2018-01-17_0.pdf"
          >
            <template v-slot:prepend>
              <v-icon size="large">picture_as_pdf</v-icon>
            </template>
            <v-list-item-title class="text-smaller-2">
              Compte rendu de réunion
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
  </CercleWrap>
</template>

<script>
import CercleWrap from "@/components/CercleWrap.vue";

export default {
  name: "GroupeAchatCercle",
  components: {
    CercleWrap
  },
  data: function () {
    return {
      images: ['groupe-achat/groupe-achat-2.jpg', 'groupe-achat/groupe-achat-3.jpg']
    }
  }
}
</script>

<style scoped>

</style>
