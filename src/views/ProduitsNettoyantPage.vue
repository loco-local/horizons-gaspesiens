<template>
  <Page>
    <ProduitsNettoyantCercle slot="content"></ProduitsNettoyantCercle>
  </Page>
</template>

<script>
export default {
  name: "ProduitsNettoyantsPage",
  components:{
    Page: () => import("@/components/Page"),
    ProduitsNettoyantCercle: () => import("@/components/ProduitsNettoyantCercle"),
  }
}
</script>

<style scoped>

</style>