<template>
    <div class="calendar" id="calendrier">
        <v-layout row wrap>
            <v-flex xs0 lg3></v-flex>
            <v-flex xs12 lg6 class="text-center">
                <h1 class="display-2 font-weight-thin">
                    Calendrier et réservation du Loco Local
                </h1>
                <h4 class="body-1">
                    Lieu collectif, ouvert et versatile où citoyen.ne.s et organisations locales organisent, de façon
                    autonome, des activités sociales, culturelles, politiques, d'éducation populaire et/ou de
                    mobilisation citoyenne
                </h4>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
        <v-layout row wrap class="mt-12">
            <v-flex xs0 lg2></v-flex>
            <v-flex xs12 lg8>
                <v-tabs
                        color="black"
                        light
                        slider-color="#ff3301"
                        grow
                        class="pa-0 ma-0"
                        v-model="calendarTab"
                >
                    <v-tab @click.prevent="$router.push('calendrier')" href="#" class="body-1" key="calendrier">
                        <v-icon class="mr-6">calendar_today</v-icon>
                        Calendrier
                    </v-tab>
                    <v-tab @click.prevent="$router.push('reservation')" href="#" class="body-1" key="reservation">
                        <v-icon class="mr-6">
                            fa-clipboard
                        </v-icon>
                        Réservation
                    </v-tab>
                </v-tabs>
                <v-tabs-items touchless v-model="calendarTab" class="body-1">
                    <v-tab-item class="mt-4 text-left" :class="{
                            'pl-0' : $vuetify.breakpoint.mdAndUp,
                            'pl-0' : $vuetify.breakpoint.smAndDown
                        }"
                                key="calendrier"
                    >
                        <v-card flat>
                            <v-card-text>
                                calendrier
                            </v-card-text>
                        </v-card>
                        <!--                            <p class="">-->
                        <!--                                Ce calendrier est notre référence pour réserver le local!-->
                        <!--                                <v-btn @click="calendarTab = 1">-->
                        <!--                                    Réserver-->
                        <!--                                </v-btn>-->
                        <!--                            </p>-->
                        <!--                            <p class="text-left pa-0 ma-0">-->
                        <!--                                Formations, assemblées, soirées, rencontres, danses, slam, yoga, projection-->
                        <!--                                documentaires,-->
                        <!--                                discussions et plus encore.-->
                        <!--                            </p>-->
                        <!--                            &lt;!&ndash;              <p v-if="$vuetify.breakpoint.smAndDown">&ndash;&gt;-->
                        <!--                            &lt;!&ndash;                <v-btn&ndash;&gt;-->
                        <!--                            &lt;!&ndash;                    to="https://calendar.google.com/calendar/u/0/embed?src=kg43q7s4qltiom7s1gntdhts3k@group.calendar.google.com&ctz=America/Toronto">&ndash;&gt;-->
                        <!--                            &lt;!&ndash;                  Voir&ndash;&gt;-->
                        <!--                            &lt;!&ndash;                </v-btn>&ndash;&gt;-->
                        <!--                            &lt;!&ndash;              </p>&ndash;&gt;-->
                        <!--                            <div id="hide-calendar-title" class="pa-0 ma-0"></div>-->
                        <!--                            <iframe frameborder="0" :height="calendarHeight" scrolling="no"-->
                        <!--                                    src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;hl=fr&amp;bgcolor=%23FFFFFF&amp;src=kg43q7s4qltiom7s1gntdhts3k%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FMontreal"-->
                        <!--                                    style=" border-width:0 " width="100%"></iframe>-->
                    </v-tab-item>
                    <v-tab-item touchless :class="{
                            'pl-4': $vuetify.breakpoint.smAndDown,
                            'pl-0': $vuetify.breakpoint.mdAndUp
                        }"
                                key="reservation"
                    >
                        <!--                        <Reservation></Reservation>-->
                        <v-card flat>
                            <v-card-text>
                                reservation
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
            <v-flex xs0 lg2></v-flex>
        </v-layout>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
    </div>
</template>

<script>
import PhoneDialog from '@/components/PhoneDialog'
import Reservation from "@/components/Reservation.vue";

export default {
    components: {
        Reservation,
        PhoneDialog
    },
    data: function () {
        return {
            calendarTab: 0,
            calendarHeight: 0
        }
    },
    mounted: function () {
        this.calendarHeight = this.$vuetify.breakpoint.mdAndDown ? 350 : 600;
        // this.refreshTabWithPath();
    },
    methods: {
        refreshTabWithPath: function () {
            return;
            if (this.$route.name === "calendrier") {
                this.calendarTab = 0;
            }
            if (this.$route.name === "reservation") {
                this.calendarTab = 1;
            }
        }
    },
    computed: {
        routeName: function () {
            return this.$route.name;
        }
    },
    watch: {
        routeName: function () {
            this.refreshTabWithPath();
        },
        calendarTab: function () {
            console.log(this.calendarTab)
        }
    }
}
</script>
<style>
#hide-calendar-title {
    position: relative;
    height: 20px;
    top: 20px;
    background-color: white;
}

.v-tabs__slider {
    height: 3px;
}
</style>
