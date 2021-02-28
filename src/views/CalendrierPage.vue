<template>
    <Page>
      <Calendrier slot="content"></Calendrier>
    </Page>
</template>

<script>

export default {
  name: "CalendrierPage",
  components: {
    Page: () => import("@/components/Page"),
    Calendrier: () => import("@/components/Calendrier")
  },
  mounted: function () {

  }
}
</script>

<style scoped>

</style>