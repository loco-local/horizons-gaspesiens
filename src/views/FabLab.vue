<template>
  <Page>
    <v-layout row wrap slot="content" class="text-body-1">
      <v-flex xs12 class="text-left pl-6 pt-0 mt-0">
        <h3 class="text-h6 mb-4">
          FabLab
        </h3>
        <p>
          Bienvenue à l'espace FabLab du Loco Local!
        </p>
        <p>
          Venez essayer l'imprimante 3D, gracieusement prêtée par Thomas W-G. Profitez-en, on l'a jusqu'à
          l'été seulement!
        </p>
        <p>
          3 types de filament sont disponibles (BPA, plastique de maïs, plastique translucide)
        </p>
        <p>
          « Wow! », vous dites-vous, « c'est donc ben cool! Une imprimante 3D! »
        </p>
        <p>
          Puis votre deuxième pensée ressemble sûrement à: « Ouais… je me demande bien ce que j'imprimerais...
          »
        </p>
        <p>
          L'impression 3D peut être utile dans des phases de prototypage, pour tester des formes, des volumes,
          avoir le rendu sous ses doigts et se rendre compte des zones de fragilité.
        </p>
        <p>
          Ou... juste pour le fun! C'est assez amusant et fascinant de voir se matérialiser un modèle 3D numérique
          qui existe déjà! En effet, une grande culture libre de droit entoure les FabLab, et des milliers de
          modèles ont déjà été partagés pour le bien de l'humanité. Jetez un coup d'oeil ici pour trouver des
          idées : http://www.thingiverse.com/explore/popular
        </p>
        <ul>
          <li>
            L'équipe de FabLab vous offre une formation pour apprendre à utiliser l'imprimante 3D en échange
            d'une contribution volontaire au Loco Local. Contactez vincent.blouin@gmail.com, ou passez les
            mercredis ou vendredis.
          </li>
          <li>
            Un don mensuel au Loco Local est recommandé afin de rendre possible ce FabLab.
          </li>
          <li>
            Vous payez aussi vos impressions au poids, pour rembourser les frais du matériel d'impression et
            permettre d'en racheter d'autre!
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </Page>
</template>

<script>
export default {
  name: "FabLab",
  components: {
    Page: () => import("@/components/PageWrap.vue")
  }
}
</script>

<style scoped>

</style>
