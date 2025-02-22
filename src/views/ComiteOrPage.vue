<template>
  <PageWrap>
    <v-overlay
        v-if="comite === null && page === null && !isPageNotFound"
        :model-value="true"
        class="align-center justify-center"
        absolute
    >
      <v-progress-circular indeterminate size="100" width="2" color="primary"></v-progress-circular>
    </v-overlay>
    <v-row v-if="comite !== null && comite.type === 'comite_page_archive'" class="vh-center">
      <v-col cols="12" md="6">
        <v-alert
            type="warning"
            class="text-black"
        >
          <template v-slot:title>
            Ce comité est archivé.
          </template>
          <div class="text-black text-left">
            Les informations dans cette page ne sont probablement plus valables.
          </div>
        </v-alert>
      </v-col>
    </v-row>
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
    <v-empty-state
        v-if="isPageNotFound"
        headline="Oops 404"
        title="Page introuvable"
        text="La page que vous chercher ne semble pas exister."
        :image="require('@/assets/FB logo.jpg')"
    ></v-empty-state>
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

const isPageNotFound = ref(false)

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
  isPageNotFound.value = false;
  if (comitesStore.$state.list === null) {
    return;
  }
  if (await buildComite()) {
    return;
  }
  if (await buildPage()) {
    return;
  }
  if (await buildComiteArchive()) {
    return;
  }
  isPageNotFound.value = true;
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

async function buildComiteArchive() {
  const response = await WordpressService.api().get(
      "comite_page_archive?_embed&slug=" + route.params.slug
  );
  if (response.data.length) {
    comite.value = response.data[0]
    return true;
  }
  return false;
}

</script>

<style scoped>

</style>
