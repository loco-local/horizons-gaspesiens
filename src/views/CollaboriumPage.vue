<template>
  <Page>
    <CollaboriumCercle slot="content"></CollaboriumCercle>
  </Page>
</template>

<script>
export default {
  name: "CollaboriumPage",
  components: {
    Page: () => import("@/components/Page"),
    CollaboriumCercle: () => import("@/components/CollaboriumCercle")
  }
}
</script>

<style scoped>

</style>