<template>
  <Page>
    <BougerEnsembleCercle slot="content"></BougerEnsembleCercle>
  </Page>
</template>

<script>
export default {
  name: "BougerEnsemblePage",
  components: {
    Page: () => import("@/components/Page"),
    BougerEnsembleCercle: () => import("@/components/BougerEnsembleCercle")
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>