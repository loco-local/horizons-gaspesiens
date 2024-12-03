<template>
  <PageWrap>
    <CollaboriumCercle slot="content"></CollaboriumCercle>
  </PageWrap>
</template>

<script>
import PageWrap from "@/components/PageWrap.vue";
import CollaboriumCercle from "@/components/CollaboriumCercle.vue";

export default {
  name: "CollaboriumPage",
  components: {
    PageWrap,
    CollaboriumCercle
  }
}
</script>

<style scoped>

</style>
