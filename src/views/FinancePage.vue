<template>
  <PageWrap>
    <v-row>
      <v-col cols="12">
        {{ accounts }}
      </v-col>
    </v-row>
  </PageWrap>
</template>

<script>
import {defineComponent} from 'vue'
import FinanceService from "@/service/FinanceService";
import PageWrap from "@/components/PageWrap.vue";

export default defineComponent({
  name: "FinancePage",
  components: {PageWrap},
  data: function () {
    return {
      accounts: []
    }
  },
  mounted: async function () {
    this.accounts = await FinanceService.list()
  }
})
</script>

<style scoped>

</style>
