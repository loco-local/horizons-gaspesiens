<template>
  <Page>
    <ProduitsNettoyantCercle slot="content"></ProduitsNettoyantCercle>
  </Page>
</template>

<script>
export default {
  name: "ProduitsNettoyantsPage",
  components:{
    Page: () => import("@/components/PageWrap.vue"),
    ProduitsNettoyantCercle: () => import("@/components/ProduitsNettoyantCercle"),
  }
}
</script>

<style scoped>

</style>