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

<script setup>
import CercleWrap from "@/components/CercleWrap.vue";
import {computed} from "vue";

const props = defineProps(['comite'])

const imagesFormatted = computed(() => {
  return props.comite.images.map((image) => {
    return image.guid
  })
})

</script>

<style scoped>

</style>
