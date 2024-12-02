<template>
  <PageWrap>
    <Suspense>
      <CalendrierSection></CalendrierSection>
    </Suspense>
  </PageWrap>
</template>

<script>
import PageWrap from '@/components/PageWrap'
import {defineAsyncComponent} from "vue";

export default {
  name: "CalendrierPage",
  components: {
    PageWrap,
    CalendrierSection: defineAsyncComponent(() => import('@/components/CalendrierSection'))
  },
  mounted: function () {
  }
}
</script>

<style scoped></style>
