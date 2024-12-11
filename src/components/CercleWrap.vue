<template>
  <v-row class="vh-center font-weight-thin" :id="anchor"
         :class="{
            'pr-6': $vuetify.display.mdAndUp
         }"
  >
    <v-col cols="12" class="pa-0">
      <v-card flat :class="{
                'mt-5 mb-12': $vuetify.display.mdAndUp
            }">
        <v-row :reverse="imageAtRight" fill-height>
          <v-col cols="12" md="5" class="pa-0" v-if="imageFormatted !== null">
            <v-carousel v-if="hasManyImages" width="100%">
              <v-carousel-item
                  v-for="(item,i) in imageFormatted"
                  :key="i"
                  :src="item.startsWith('http') ? item: require('../assets/' + item)"
                  cover
              ></v-carousel-item>
            </v-carousel>
            <v-img
                :src="imageFormatted.startsWith('http') ? imageFormatted: require('../assets/' + imageFormatted)"
                v-if="imageFormatted !== null && !hasManyImages"
                :aspect-ratio="1"
                position="top"
            ></v-img>
            <slot name="image"></slot>
          </v-col>
          <v-col cols="12" :md="imageFormatted === null ? 12 : 7" left>
            <v-card-title primary-title class="mt-0 pt-0 text-h5 text-left font-weight-bold"
                          :class="{
                            'mt-4 pa-0' : $vuetify.display.smAndDown
                        }">
              {{ title }}
              <slot name="title"></slot>
            </v-card-title>
            <div class="text-smaller font-weight-bold text-left mt-1 text-grey-darken-2"
                 :class="{
                    'ml-4' : $vuetify.display.mdAndUp,
                    'mt-4 pa-0' : $vuetify.display.smAndDown
                 }"
            >
              <slot name="subtitle"></slot>
            </div>
            <v-card-text class="text-justify text text-h6 font-weight-regular cercle-content"
                         style="line-height:1.8"
                         :class="{
                           'pr-8' :$vuetify.display.mdAndUp,
                           'pa-0 pr-4' :$vuetify.display.smAndDown
                         }"
            >
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
  data: function () {
    return {
      hasManyImages: false,
      imageFormatted: null
    }
  },
  mounted: function () {
    this.setupImages();
  },
  methods: {
    setupImages: function () {
      if (this.image === null) {
        return;
      }
      const isImageAnArray = this.image.constructor === Array;
      this.hasManyImages = isImageAnArray && this.image.length > 1
      if (isImageAnArray && !this.hasManyImages) {
        this.imageFormatted = this.image[0]
      } else {
        this.imageFormatted = this.image;
      }
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
