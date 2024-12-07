<template>
  <Page class="vh-center">
    <v-row slot="content" class="h-center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h3 font-weight-thin">
          Statut d'adhésion
        </h1>
      </v-col>
      <v-col cols="12" class="h-center">
        <VerificationAdhesion @emailChanged="changeRouteForEmail"></VerificationAdhesion>
      </v-col>
      <v-divider class="mt-6 mb-6"></v-divider>
      <v-col cols="12" class="h-center">
        <v-card flat>
          <v-card-title class="text-h6 h-center">
            Liste complète et détaillé des membres
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            L'accès à ces données est limité.
          </v-card-subtitle>
          <v-list>
            <v-list-item
                href="https://datastudio.google.com/u/1/reporting/95640869-6dcc-46bf-9ee7-634ec8a6e0ba/page/aKkbC"
                target="_blank">

              <v-list-item-title class="text-body-1">
                Google Studio associé au Excel
              </v-list-item-title>

            </v-list-item>
            <v-list-item
                href="https://docs.google.com/spreadsheets/d/1_KH43HPFDERGgB6wmQEPS-cujtw10YKS4I7X3S6Mwio/edit?resourcekey#gid=1827893226"
                target="_blank">

              <v-list-item-title class="text-body-1">
                Excel associé au formulaire
              </v-list-item-title>

            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </Page>
</template>

<script>
import VerificationAdhesion from "@/components/VerificationAdhesion.vue";
import PageWrap from "@/components/PageWrap.vue";

export default {
  name: "AdhesionSection",
  components: {
    VerificationAdhesion,
    Page: PageWrap
  },

  methods: {
    changeRouteForEmail: function (email) {
      if (this.$route.params.email !== email.trim()) {
        this.$router.push({name: 'AdhesionWithEmail', params: {email: email.trim()}})
      }
    }
  }
}
</script>

<style scoped>

</style>
