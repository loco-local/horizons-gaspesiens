<template>
  <PageWrap>
    <v-overlay
        v-if="comite === null"
        :model-value="true"
        class="align-center justify-center"
        absolute
    >
      <v-progress-circular indeterminate size="100" width="2" color="primary"></v-progress-circular>
    </v-overlay>
    <ComiteFromWordpress :comite="comite" v-if="comite !== null" :key="comite.id"></ComiteFromWordpress>
  </PageWrap>
</template>

<script setup>
import ComiteFromWordpress from "@/components/ComiteFromWordpress.vue";
import PageWrap from "@/components/PageWrap.vue";
import {useComiteStore} from "@/stores/ComiteStore";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import WordpressService from "@/service/WordpressService";

const comitesStore = useComiteStore()
const route = useRoute();
const comite = ref(null)

mathComiteWithSlug();

comitesStore.$subscribe(() => {
  mathComiteWithSlug();
}, {flush: 'sync'})

watch(route, mathComiteWithSlug);

async function mathComiteWithSlug() {
  if (comitesStore.$state.list === null) {
    return;
  }
  const comitesHavingSlug = comitesStore.list.filter((comite) => {
    return comite.slug === route.params.slug
  })
  if (comitesHavingSlug.length) {
    comite.value = comitesHavingSlug[0]
    return;
  }
  const response = await WordpressService.api().get(
      "comite_page_archive?_embed&slug=" + route.params.slug
  );
  comite.value = response.data[0]
}
</script>

<style scoped>

</style>
