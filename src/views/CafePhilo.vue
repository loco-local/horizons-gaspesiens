<template>
  <PageWrap>
    <v-layout row wrap slot="content" class="text-body-1">
      <v-flex xs12 class="text-left pl-6 pt-0 mt-0">
        <h3 class="text-h6 mb-4">
          Cafés philo
        </h3>
        <p>
          Les café-philo…
        </p>
        <ul>
          <li>
            sont un espace de discussion « sécuritaire »
          </li>
          <li>
            ne sont pas un lieu de débats
          </li>
          <li>
            sont des rencontres où on y écoute plus qu’on y parle
          </li>
        </ul>
        <p>
          Le but: Organiser et promouvoir des rencontres de discussions philosophiques accessibles à tous et à toutes
          partout en Gaspésie.
        </p>
      </v-flex>
    </v-layout>
  </PageWrap>
</template>

<script>
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "CafePhilo",
  components: {
    PageWrap
  }
}
</script>

<style scoped>

</style>
