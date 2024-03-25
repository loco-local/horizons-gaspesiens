<template>
  <Page>
    <Paiement slot="content"></Paiement>
  </Page>
</template>

<script>
export default {
  name: "PaiementPage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    Paiement: () => import("@/components/PaiementSection.vue")
  }
}
</script>

<style scoped>

</style>