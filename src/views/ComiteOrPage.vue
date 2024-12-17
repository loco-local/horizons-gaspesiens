<template>
  <PageWrap>
    <v-overlay
        v-if="comite === null && page === null"
        :model-value="true"
        class="align-center justify-center"
        absolute
    >
      <v-progress-circular indeterminate size="100" width="2" color="primary"></v-progress-circular>
    </v-overlay>
    <ComiteFromWordpress :comite="comite" v-if="comite !== null" :key="comite.id"></ComiteFromWordpress>
    <v-row v-if="page !== null">
      <v-col cols="0" md="1" lg="2">
      </v-col>
      <v-col cols="12" md="10" lg="8" class="text-left">
        <div v-html="page[0].content.rendered"></div>
      </v-col>
      <v-col cols="0" md="1" lg="2">
      </v-col>
    </v-row>
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

const page = ref(null);

async function buildPage() {
  const response = await WordpressService.api().get(
      "pages?_embed&slug=" + route.params.slug
  );
  if (!response.data.length) {
    return false;
  }
  page.value = response.data;
  return true;
}
mathComiteWithSlug();

comitesStore.$subscribe(() => {
  mathComiteWithSlug();
}, {flush: 'sync'})

watch(route, mathComiteWithSlug);

async function mathComiteWithSlug() {
  comite.value = null;
  page.value = null;
  if (comitesStore.$state.list === null) {
    return;
  }
  if (await buildComite()) {
    return;
  }
  if (await buildPage()) {
    return;
  }
  const response = await WordpressService.api().get(
      "comite_page_archive?_embed&slug=" + route.params.slug
  );
  comite.value = response.data[0]
}

async function buildComite() {
  const comitesHavingSlug = comitesStore.list.filter((comite) => {
    return comite.slug === route.params.slug
  })
  if (comitesHavingSlug.length) {
    comite.value = comitesHavingSlug[0]
    return true;
  }
  return false;
}

</script>

<style scoped>

</style>
