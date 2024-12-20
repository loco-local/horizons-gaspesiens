<template>
    <PageWrap>
        <v-row v-if="reminders === false && !isLoading">
            <v-col cols="12" md="6" offset-md="3" v-if="reminders === false">
                <v-alert type="error" class="text-black">
                    <template v-slot:title>
                        Erreur
                    </template>
                    <div class="text-left">
                        Mauvais mot de passe
                    </div>
                </v-alert>
            </v-col>
        </v-row>
        <v-row class="text-center" v-if="reminders === null || reminders === false">
            <v-col cols="12" md="6" offset-md="3">
                <v-text-field v-model="password" label="Mot de passe" type="password"
                    @keydown.enter="refreshReminders"></v-text-field>
            </v-col>
        </v-row>
        <v-overlay v-if="isLoading" :model-value="true" class="align-center justify-center" absolute>
            <v-progress-circular indeterminate size="100" width="2" color="primary"></v-progress-circular>
        </v-overlay>
        <v-row v-if="reminders !== null && reminders !== false && isLoading === false">
            <v-col cols="12" v-if="reminders.error">
                <v-alert type="error" class="text-black">
                    <template v-slot:title>
                        Erreur
                    </template>
                    <div class="text-black text-left">
                        {{ reminders.error }}
                    </div>
                </v-alert>
            </v-col>
            <v-col cols="12" md="6" offset-md="3" v-if="!reminders.error">
                <v-text-field v-model="search" label="Recherche" prepend-icon="magnify"></v-text-field>
            </v-col>
            <v-col cols="12" v-if="!reminders.error">
                <v-data-table :items="reminders" :items-per-page="-1" :search="search">
                </v-data-table>
            </v-col>
        </v-row>
    </PageWrap>
</template>
<script setup>
import MembershipService from "@/service/MembershipService";
import PageWrap from "@/components/PageWrap.vue";
import { ref } from 'vue';
const password = ref('')
const reminders = ref(null)
const isLoading = ref(false)
const search = ref('')
async function refreshReminders() {
    isLoading.value = true
    reminders.value = await MembershipService.listReminders(password.value)
    isLoading.value = false
}
</script>
<style></style>