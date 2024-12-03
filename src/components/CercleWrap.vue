<template>
  <v-row class="vh-center font-weight-thin pr-6" :id="anchor">
    <v-col cols="12">
      <v-card flat :class="{
                'mt-5 mb-12': $vuetify.display.mdAndUp,
                'pl-4 mt-5 mb-4': $route.name === 'home' && $vuetify.display.smAndDown
            }">
        <v-row :reverse="imageAtRight" fill-height>
          <v-col cols="12" md="5">
            <v-carousel v-if="image && isCarousel" width="100%">
              <v-carousel-item
                  v-for="(item,i) in image"
                  :key="i"
                  :src="require('../assets/' + item)"
                  cover
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
            <div class="text-smaller font-weight-bold text-left mt-1 ml-4 text-grey-darken-2">
              <slot name="subtitle"></slot>
            </div>
            <v-card-text class="text-justify text pr-8 text-h6 font-weight-regular cercle-content"
                         style="line-height:1.8">
              <slot name="content"></slot>
            </v-card-text>
          </v-col>
        </v-row>
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

<style lang="scss">
.cercle-content {
  line-height: 1.8;

  p {
    margin-bottom: 10px !important
  }
}
</style>
