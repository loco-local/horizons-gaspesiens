<template>
    <v-layout row wrap class="vh-center font-weight-thin" :id="anchor">
        <v-flex xs12>
            <v-card flat class="mt-5 mb-5">
                <v-layout :reverse="imageAtRight" row wrap fill-height>
                    <v-flex xs12 md5 class="">
                        <v-img
                                :src="require('../assets/' + image)"
                                :class="{
                                    'ml-5': $vuetify.breakpoint.mdAndUp
                                }"
                                v-if="image"
                                contain
                        ></v-img>
                        <slot name="image"></slot>
                    </v-flex>
                    <v-flex xs12 md7 left>
                        <v-card-title primary-title class="mt-0 pt-0" :class="{
                            'mt-4' : $vuetify.breakpoint.smAndDown
                        }">
                            <div>
                                <div class="headline text-xs-left">
                                    {{title}}
                                </div>
                                <div class="subheading mt-2 font-weight-bold text-xs-left font-italic">
                                    <slot name="subtitle"></slot>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-text class="text-xs-left">
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
        props: ['image', 'title', 'anchor', 'imageAtRight']
    }
</script>

<style scoped>

</style>
