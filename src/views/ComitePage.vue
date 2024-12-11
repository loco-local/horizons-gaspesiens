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

const comitesStore = useComiteStore()
const route = useRoute();
const comite = ref(null)

mathComiteWithSlug();

comitesStore.$subscribe(() => {
  mathComiteWithSlug();
}, {flush: 'sync'})

watch(route, mathComiteWithSlug);

function mathComiteWithSlug() {
  if (comitesStore.$state.list === null) {
    return;
  }
  const comitesHavingSlug = comitesStore.list.filter((comite) => {
    return comite.slug === route.params.slug
  })
  comite.value = comitesHavingSlug[0]
}
</script>

<style scoped>

</style>
