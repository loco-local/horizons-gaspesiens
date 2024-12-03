<template>
  <CercleWrap
      title="Page Pourpre"
      anchor="page-pourpre"
      :image="images"
  >
    <template v-slot:subtitle>
      Bibliothèque féministe, trans, queer et inclusive
    </template>
    <template v-slot:content>
      <p class="">
        La bibliothèque la Page Pourpre, c'est un espace de rencontre et un
        centre de référence permettant d'emprunter gratuitement des livres sur
        diverses questions féministes, queer, intersectionelles, ou autrement
        connexe, ainsi que des ouvrages de fiction et de poésie touchant à
        notre thématique. Sera éventuellement disponible une sélection de
        livres pour enfants qui vont à l'encontre des stéréotypes de genre et
        parlent de transsexualité, d'homoparentalité et d'éducation
        non-binaire, mais également des ressources sur l'éducation et la
        parentalité à l'extérieur de la binarité des genres.
      </p>
    </template>
  </CercleWrap>
</template>

<script>
import CercleWrap from "@/components/CercleWrap.vue";

export default {
  name: "PagePourpreCercle",
  components: {
    CercleWrap
  },
  data: function () {
    return {
      images: ["page-pourpre/leila_salon_du_livre_2021.jpg", "page-pourpre/page-pourpre.jpg", "page-pourpre/livres-pourpre.jpg"]
    }
  }
}
</script>

<style scoped>

</style>
