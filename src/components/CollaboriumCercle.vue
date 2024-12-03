<template>
  <Cercle
      title="Collaborium et espace de vie"
      anchor="collaborium"
      :image="images"
  >
    <template v-slot:subtitle>
        Central, flexible, collectif, le Collaborium est l'espace-temps de
        collaboration, terme francisé pour "Coworking space".
    </template>
    <template v-slot:content>
        <p>
          Accès à un espace de travail avec internet
          <v-icon>wifi</v-icon>
          , machine à café
          <v-icon class="material-icons-outlined">local_cafe</v-icon>
          , cuisine pour vous faire à manger
          <v-icon class="material-icons-outlined">fastfood</v-icon>
          , divans
          <v-icon class="material-icons-outlined">chair</v-icon>
          pour relaxer, autres travailleurs et travailleuses autonomes avec qui
          échanger (ou vous pouvez apporter vos écouteurs pour créer votre
          espace perso), table de ping pong
          <v-icon class="material-symbols-outlined">sports_tennis</v-icon>
          et babyfoot pour se changer les idées: le Collaborium au Loco Local
          c'est tout ça et bien plus encore!
        </p>
        <p>Venez l'essayer!</p>
    </template>
  </Cercle>
</template>

<script>
import CercleWrap from "@/components/CercleWrap.vue";

export default {
  name: "CollaboriumCercle",
  components: {
    Cercle: CercleWrap
  },
  data: function () {
    return {
      images: [
        'collab/equipe-2022.jpg',
        'collab/travailler au LL.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>
