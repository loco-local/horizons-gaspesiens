<template>
  <CercleWrap :image="comite.imagesFormatted"
  >
    <template v-slot:title>
      <div v-html="comite.title.rendered"></div>
    </template>
    <template v-slot:subtitle>
      {{ comite['sous-titre'] }}
    </template>
    <template v-slot:content>
      <div v-html="comite.content.rendered"></div>
    </template>
  </CercleWrap>
</template>

<script>
import {defineComponent} from 'vue'
import CercleWrap from "@/components/CercleWrap.vue";

export default defineComponent({
  name: "ComiteFromWordpress",
  props: ['comite'],
  components: {
    CercleWrap
  }
})
</script>

<style scoped>

</style>
