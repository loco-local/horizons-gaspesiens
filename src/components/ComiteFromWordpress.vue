<template>
  <CercleWrap :image="imagesFormatted">
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
import {ref} from "vue";

const props = defineProps(['comite'])

const imagesFormatted = ref(null);
if (props.comite.images) {
  imagesFormatted.value = props.comite.images.map((image) => {
    return image.guid
  });
}


</script>

<style scoped>

</style>
