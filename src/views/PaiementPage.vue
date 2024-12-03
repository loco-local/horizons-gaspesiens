<template>
  <PageWrap>
    <PaiementSection></PaiementSection>
  </PageWrap>
</template>

<script>
import PaiementSection from "@/components/PaiementSection.vue";
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "PaiementPage",
  components: {
    PageWrap,
    PaiementSection
  }
}
</script>

<style scoped>

</style>
