<template>
  <PageWrap>
    <ComiteFromWordpress :comite="comite" v-if="comite !== null"></ComiteFromWordpress>
  </PageWrap>
</template>

<script>
import {defineComponent} from 'vue'
import ComiteFromWordpress from "@/components/ComiteFromWordpress.vue";
import WordpressService from "@/service/WordpressService";
import PageWrap from "@/components/PageWrap.vue";

export default defineComponent({
  name: "ComitePage",
  components: {PageWrap, ComiteFromWordpress},
  data: function () {
    return {
      comite: null
    }
  },
  mounted: async function () {
    const response = await WordpressService.api().get(
        "comite_page?_embed&slug=" + this.$route.params.slug
    );
    this.comite = response.data[0]
  }
})
</script>

<style scoped>

</style>
