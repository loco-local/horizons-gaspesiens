<template>
  <PageWrap>
    <ProduitsNettoyantCercle></ProduitsNettoyantCercle>
  </PageWrap>
</template>

<script>
import ProduitsNettoyantCercle from "@/components/ProduitsNettoyantCercle.vue";
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "ProduitsNettoyantsPage",
  components:{
    PageWrap,
    ProduitsNettoyantCercle,
  }
}
</script>

<style scoped>

</style>
