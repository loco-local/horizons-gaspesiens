<template>
  <CercleWrap title="Produits Nettoyants" anchor="produits-nettoyant">
    <template v-slot:image>
      <div id="fb-root"></div>
      <div
          class="fb-video"
          data-href="https://www.facebook.com/locolocal1/videos/2443361492361573/"
          data-width="500"
          data-show-text="false"
      >
        <div class="fb-xfbml-parse-ignore">
          <blockquote
              cite="https://www.facebook.com/locolocal1/videos/2443361492361573/"
          >
            <a
                href="https://www.facebook.com/locolocal1/videos/2443361492361573/"
            >How to Share With Just Friends</a
            >
            <p>How to share with just friends.</p>
            Posted by
            <a href="https://www.facebook.com/facebook/">Facebook</a> on
            Friday, December 5, 2014
          </blockquote>
        </div>
      </div>
    </template>
    <template v-slot:subtitle>
      En plus de sentir bon, d'utiliser des produits nettoyants qui ne sont
      pas nocifs pour votre santé et celle de vos enfants, de protéger
      l'environnement en utilisant des produits biodégradables, choisissez le
      vrac pour favoriser la réutilisation des contenants!
    </template>
    <template v-slot:content>
      <p class="">
        Achetez vos produits nettoyants au Loco Local. Si vous avez des
        questions, écrivez-nous à
        <a href="mailto:horizonsgaspesiens@gmail.com">
          horizonsgaspesiens@gmail.com
        </a>
        ou
        <v-btn @click="$refs.contactDialog.show()">téléphonez nous</v-btn>
      </p>
    </template>
  </CercleWrap>
</template>

<script>

import CercleWrap from "@/components/CercleWrap.vue";

export default {
  name: "ProduitsNettoyantCercle",
  components: {
    CercleWrap
  }
}
</script>

<style scoped>

</style>
