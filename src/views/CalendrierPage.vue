<template>
    <Page>
      <Calendrier slot="content"></Calendrier>
    </Page>
</template>

<script>

export default {
  name: "CalendrierPage",
  components: {
    Page: () => import("@/components/PageWrap.vue"),
    Calendrier: () => import("@/components/CalendrierSection.vue")
  },
  mounted: function () {

  }
}
</script>

<style scoped>

</style>