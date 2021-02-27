<template>
  <Page>
    <GroupeAchatCercle slot="content"></GroupeAchatCercle>
  </Page>
</template>

<script>
export default {
  name: "GroupeAchatPage",
  components: {
    Page: () => import("@/components/Page"),
    GroupeAchatCercle: () => import("@/components/GroupeAchatCercle")
  }
}
</script>

<style scoped>

</style>