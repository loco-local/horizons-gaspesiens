<template>
  <Page>
    <Cercle title="Loco Linux" anchor="loco-linux" image="loco-linux2.jpg" slot="content">
      <div slot="subtitle">
        Loco Linux est composé de Geek bénévoles qui remonteront vos ordinateurs pour pas cher (juste assez pour
        aider à financer Linux et le Loco Local), ou qui les remonteront pour les donner à des familles qui ont
        moins de moyens.
      </div>
      <div slot="content">
        <p class="">
          Vous avez un vieil ordinateur qui traine dans votre sous-sol, et vous pensez qu'il est rendu trop
          vieux: pu à la mode, trop lent, trop "dépassé"?
        </p>
        <p>
          C'est parce que vous ne connaissez pas encore le système d'exploitation Linux. C'est comme Windows
          ou Mac, mais LIBRE! La différence, c'est qu'il n'installe pas des mises à jour qui ralentissent
          votre ordinateur jusqu'à ce que vous vous disiez que vous en avez besoin d'un nouveau.
        </p>
      </div>
    </Cercle>
  </Page>
</template>

<script>
import Cercle from '@/components/CercleWrap.vue'

export default {
  name: "LocoLinux",
  components: {
    Cercle,
    Page: () => import("@/components/PageWrap.vue")
  }
}
</script>

<style scoped>

</style>