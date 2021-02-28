<template>
  <Page>
    <Paiement slot="content"></Paiement>
  </Page>
</template>

<script>
export default {
  name: "PaiementPage",
  components: {
    Page: () => import("@/components/Page"),
    Paiement: () => import("@/components/Paiement")
  }
}
</script>

<style scoped>

</style>