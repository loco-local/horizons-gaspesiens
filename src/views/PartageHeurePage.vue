<template>
  <Page>
    <PartageHeureCercle slot="content"></PartageHeureCercle>
  </Page>
</template>

<script>
export default {
  name: "PartageHeurePage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    PartageHeureCercle: () => import("@/components/PartageHeureCercle")
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>
