<template>
  <Page>
    <BibliothequeOutilsCercle slot="content"></BibliothequeOutilsCercle>
  </Page>
</template>

<script>
export default {
  name: "BibliothequeOutilsPage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    BibliothequeOutilsCercle: () => import("@/components/BibliothequeOutilsCercle")
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>