<template>
  <PageWrap>
    <PartageHeureCercle></PartageHeureCercle>
  </PageWrap>
</template>

<script>
import PartageHeureCercle from "@/components/PartageHeureCercle.vue";
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "PartageHeurePage",
  components: {
    PageWrap,
    PartageHeureCercle
  },
  data: function () {
    return {};
  }
}
</script>

<style scoped>

</style>
