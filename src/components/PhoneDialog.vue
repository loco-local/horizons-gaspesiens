<template>
    <div>
        <v-dialog v-model="phoneModal" v-if="phoneModal" width="600">
            <v-card>
                <v-card-title class="pb-2 title">
                    Téléphones de bénévoles
                    <v-spacer></v-spacer>
                    <v-icon @click="phoneModal = false">close</v-icon>
                </v-card-title>
                <v-card-subtitle class="grey-text subtitle-1 grey-text pt-0 mt-0 text-left">
                    N'hésitez pas à contacter ces bénévoles pour le code de la porte, une réservation ou tout autre
                    sujet.
                </v-card-subtitle>
                <v-card-text class="pt-0 body-2">
                    <v-list two-line class="text-left">
                        <v-list-item
                                v-for="phone in phoneNumbersRandom"
                                :key="phone.nom"
                                avatar
                                :href="'tel:' + phone.telephone"
                        >
                            <v-list-item-avatar size="55">
                                <img :src="require('@/assets/' + phone.avatar)">
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{phone.nom}}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{phone.telephone}}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import PhoneNumbers from '@/PhoneNumbers'
    import Shuffle from '@/Shuffle'
    export default {
        name: "PhoneDialog",
        data() {
            return {
                phoneModal: false,
                phoneNumbers: PhoneNumbers.data,
                phoneNumbersRandom: Shuffle.array(PhoneNumbers.data)
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
