<template>
  <Page>
    <FinancementCercle slot="content"></FinancementCercle>
  </Page>
</template>

<script>
export default {
  name: "FinancementPage",
  components: {
    Page: () => import("@/components/Page"),
    FinancementCercle: () => import("@/components/FinancementCercle")
  }
}
</script>

<style scoped>

</style>