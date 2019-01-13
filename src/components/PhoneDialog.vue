<template>
    <div>
        <v-dialog v-model="phoneModal" v-if="phoneModal" width="600">
            <v-card>
                <v-card-title class="pb-2 title">
                    Téléphones de bénévoles
                    <v-spacer></v-spacer>
                    <v-icon @click="phoneModal = false">close</v-icon>
                </v-card-title>
                <v-card-title class="grey-text subheading grey-text pt-0 mt-0 text-xs-left">
                    N'hésitez pas à contacter ces bénévoles pour le code de la porte, une réservation ou tout autre
                    sujet.
                </v-card-title>
                <v-card-text class="pt-0">
                    <v-list two-line>
                        <v-list-tile
                                v-for="phone in phoneNumbersRandom"
                                :key="phone.nom"
                                avatar
                                :href="'tel:' + phone.telephone"
                        >
                            <v-list-tile-avatar>
                                <img :src="require('@/assets/' + phone.avatar)">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{phone.nom}}
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    {{phone.telephone}}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import PhoneNumbers from '@/PhoneNumbers'

    export default {
        name: "PhoneDialog",
        data() {
            return {
                phoneModal: false,
                phoneNumbers: PhoneNumbers.data
            }
        },
        computed: {
            phoneNumbersRandom() {
                return this.phoneNumbers.sort(function () {
                    return 0.5 - Math.random()
                });
            }
        },
        methods: {
            show() {
                this.phoneModal = true;
            }
        }
    }
</script>

<style scoped>

</style>
