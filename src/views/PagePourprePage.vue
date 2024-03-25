<template>
  <Page>
    <PagePourpreCercle slot="content"></PagePourpreCercle>
  </Page>
</template>

<script>
export default {
  name: "PagePourprePage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    PagePourpreCercle: () => import("@/components/PagePourpreCercle")
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>