<template>
  <PageWrap>      
      <CalendrierSection></CalendrierSection>  
  </PageWrap>
</template>

<script>

export default {
  name: "CalendrierPage",
  components: {
    PageWrap: () => import("@/components/PageWrap.vue"),
    CalendrierSection: () => import("@/components/CalendrierSection.vue")
  },
  mounted: function () {
  }
}
</script>

<style scoped></style>