<template>
  <Page>
    <BibliothequeOutilsCercle slot="content"></BibliothequeOutilsCercle>
  </Page>
</template>

<script>
export default {
  name: "BibliothequeOutilsPage",
  components: {
    Page: () => import("@/components/Page"),
    BibliothequeOutilsCercle: () => import("@/components/BibliothequeOutilsCercle")
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>