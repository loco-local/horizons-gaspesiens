<script>
export default {
  name: "RucheArtPage",
  components: {
    Page: () => import("@/components/Page"),
    RucheArtCercle: () => import("@/components/RucheArtCercle")
  }
}
</script>

<template>
  <Page>
    <RucheArtCercle slot="content"></RucheArtCercle>
  </Page>
</template>

<style scoped>

</style>
