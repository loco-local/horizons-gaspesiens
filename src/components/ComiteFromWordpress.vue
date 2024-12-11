<template>
  <CercleWrap :image="imagesFormatted"
              v-if="imagesFormatted !== null"
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
  },
  data: function () {
    return {
      imagesFormatted: null
    }
  },
  mounted: function () {
    this.imagesFormatted = this.comite.images.map((image) => {
      return image.guid
    })
  }
})
</script>

<style scoped>

</style>
