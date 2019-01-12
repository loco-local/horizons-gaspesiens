<template>
    <v-layout row wrap :id="anchor" class="vh-center font-weight-thin">
        <v-flex xs12>
            <v-card flat class="mt-5 mb-5">
                <v-layout :reverse="imageAtRight" row wrap fill-height>
                    <v-flex xs12 md5 class="">
                        <v-img
                                :src="require('../assets/' + image)"
                                :class="{
                                    'ml-5': $vuetify.breakpoint.mdAndUp
                                }"
                                contain
                        ></v-img>
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
                <!--<v-toolbar color="blue" class="white&#45;&#45;text mb-3">-->
                    <!--<v-btn flat dark to="mailto:groupe.achat.hg@gmail.com">-->
                        <!--ADHÉRER groupe.achat.hg@gmail.com-->
                    <!--</v-btn>-->
                <!--</v-toolbar>-->
            </v-card>
            <!--<v-card class="ml-5 mr-5 pl-4 pr-4" flat>-->
            <!--<v-img-->
            <!--:src="require('../assets/travailler au LL.jpg')"-->
            <!--aspect-ratio="1.78"-->
            <!--&gt;</v-img>-->
            <!--<v-card-title primary-title class="mb-0">-->
            <!--<h3 class="headline">-->
            <!--Collaborium et espace de vie-->
            <!--</h3>-->
            <!--</v-card-title>-->
            <!--<v-card-text class="text-xs-left mt-0 pt-0 subheading">-->
            <!--<p>-->
            <!--Central, flexible, collectif, le Collaborium est l'espace-temps de collaboration, terme-->
            <!--francisé pour "Coworking space".-->
            <!--</p>-->
            <!--<p>-->
            <!--Accès à un espace de travail avec internet, cuisine pour vous faire à manger, divans pour-->
            <!--relaxer, autres travailleurs et travailleuses autonomes avec qui échanger (ou vous pouvez-->
            <!--apporter vos écouteurs pour créer votre espace perso), table de ping pong et babyfoot pour-->
            <!--se changer les-->
            <!--idées: le Collaborium au Loco Local c'est tout ça et bien plus encore!-->
            <!--</p>-->
            <!--<p>-->
            <!--Venez l'essayer!-->
            <!--</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
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
