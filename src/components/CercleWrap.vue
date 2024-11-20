<template>
  <v-row class="vh-center font-weight-thin pr-6" :id="anchor" style="white-space: nowrap">
    <v-col cols="12">
      <v-card flat :class="{
                'mt-5 mb-12': $vuetify.display.mdAndUp,
                'pl-4 mt-5 mb-4': $route.name === 'home' && $vuetify.display.smAndDown
            }">
        <v-layout :reverse="imageAtRight" row wrap fill-height>
          <v-col cols="12" md="5">
            <v-carousel v-if="image && isCarousel" width="100%">
              <v-carousel-item
                  v-for="(item,i) in image"
                  :key="i"
                  :src="require('../assets/' + item)"
              ></v-carousel-item>
            </v-carousel>
            <v-img
                :src="require('../assets/' + image)"
                :class="{
                                    'ml-5': $vuetify.display.mdAndUp
                                }"
                v-if="image && !isCarousel"
                cover
                top
            ></v-img>
            <slot name="image"></slot>
          </v-col>
          <v-col cols="12" md="7" left>
            <v-card-title primary-title class="mt-0 pt-0 text-h5 text-left font-weight-bold" :class="{
                            'mt-4' : $vuetify.display.smAndDown
                        }">
              {{ title }}
              <slot name="title"></slot>
            </v-card-title>
            <v-card-subtitle class="text-smaller font-weight-bold text-left mt-1 ml-4">
              <slot name="subtitle"></slot>
            </v-card-subtitle>
            <v-card-text class="text-left text">
              <slot name="content"></slot>
            </v-card-text>
          </v-col>
        </v-layout>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CercleWrap",
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
