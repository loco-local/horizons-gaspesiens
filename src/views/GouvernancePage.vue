<template>
  <Page>
    <GouvernanceCercle slot="content"></GouvernanceCercle>
  </Page>
</template>

<script>
export default {
  name: "GouvernancePage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    GouvernanceCercle: () => import("@/components/GouvernanceCercle")
  }
}
</script>

<style scoped>

</style>