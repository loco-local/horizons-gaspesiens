<template>
  <v-layout row wrap class="vh-center font-weight-thin pr-6" :id="anchor" style="white-space: nowrap">
    <v-flex xs12>
      <v-card flat :class="{
                'mt-5 mb-12': $vuetify.breakpoint.mdAndUp,
                'pl-4 mt-5 mb-4': $vuetify.breakpoint.smAndDown
            }">
        <v-layout :reverse="imageAtRight" row wrap fill-height>
          <v-flex xs12 md5 class="">
            <v-carousel v-if="image && isCarousel">
              <v-carousel-item
                  v-for="(item,i) in image"
                  :key="i"
                  :src="require('../assets/' + item)"
              ></v-carousel-item>
            </v-carousel>
            <v-img
                :src="require('../assets/' + image)"
                :class="{
                                    'ml-5': $vuetify.breakpoint.mdAndUp
                                }"
                v-if="image && !isCarousel"
                contain
            ></v-img>
            <slot name="image"></slot>
          </v-flex>
          <v-flex xs12 md7 left>
            <v-card-title primary-title class="mt-0 pt-0 text-h5 text-left font-weight-bold" :class="{
                            'mt-4' : $vuetify.breakpoint.smAndDown
                        }">
              {{ title }}
            </v-card-title>
            <v-card-subtitle class="text-h6 text-left mt-1 ml-4">
              <slot name="subtitle"></slot>
            </v-card-subtitle>
            <v-card-text class="text-left body-1" style="line-height: 1.8">
              <slot name="content"></slot>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Comite",
  props: ['image', 'title', 'anchor', 'imageAtRight'],
  computed: {
    isCarousel: function () {
      return this.image.constructor === Array;
    }
  }
}
</script>

<style scoped>

</style>
