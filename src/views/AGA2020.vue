<template>
  <div class="mt-12 pt-12">
    <v-layout row wrap class="pt-12">
      <v-flex xs12 md12 class="vh-center pt-12">
        <h1 class="pt-12 pb-12 headline font-weight-bold">AGA 2020</h1>
        <div class="mt-2 pt-2"></div>
<!--        <v-list>-->
<!--          <v-list-item-->
<!--              href="Avis-de-convocation2020.pdf">-->
<!--            <v-list-item-action>-->
<!--              <v-icon>picture_as_pdf</v-icon>-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-title>-->
<!--              Avis de convocation-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
        <v-card width="600" class="pt-12" flat>
          <v-card-title class="headline vh-center">
            Vidéo 1 -- Trajectoires
          </v-card-title>
          <v-card-text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rdGhTFW5lNM" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </v-card-text>
        </v-card>
        <v-card width="600" flat>
          <v-card-title class="headline vh-center">
            Vidéo 2 -- Bilan
          </v-card-title>
          <v-card-text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RUo3qmGa7Jg" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "AGA 2020",
}
</script>

<style scoped>

</style>