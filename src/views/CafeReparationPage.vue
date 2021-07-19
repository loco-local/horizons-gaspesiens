<template>
  <Page>
    <CafeReparationCercle slot="content"></CafeReparationCercle>
  </Page>
</template>

<script>
export default {
  name: "CafeReparationPage",
  components: {
    Page: () => import("@/components/Page"),
    CafeReparationCercle: () => import("@/components/CafeReparationCercle")
  }
}
</script>

<style scoped>

</style>
