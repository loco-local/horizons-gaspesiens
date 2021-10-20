<template>
  <Cercle
      anchor="partage-heure"
      image="partage-heure/partageheure-banner.png"
  >
    <div slot="title" style="display: flex; align-items:center;">
      Partage Heure
      <img :src="require('../assets/partage-heure/logo-partageheure-fit-petit.png')" class="ml-3" width="40">
    </div>
    <div slot="subtitle">
      S'entraider avec une liste d'offres et de demandes de services
    </div>
    <div slot="content">
      Visitez la section "Devenez membre" du site <a href="https://partageheure.com">partageheure.com</a>
<!--      <v-list three-line :class="{-->
<!--            'pl-0 pr-0': $vuetify.breakpoint.smAndDown-->
<!--          }" color="transparent">-->
<!--        <v-list-item :class="{-->
<!--            'pl-0 pr-0': $vuetify.breakpoint.smAndDown-->
<!--          }">-->
<!--          <v-list-item-icon>-->
<!--            <v-icon :large="$vuetify.breakpoint.smAndDown" :x-large="$vuetify.breakpoint.mdAndUp">support</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content class="text-left">-->
<!--            <v-list-item-title class="body-1 text-md-h5 font-weight-regular">-->
<!--              Obtenez de l'aide-->
<!--            </v-list-item-title>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Accédez à une liste d'offres de services dans la Baie des Chaleurs.<br>-->
<!--            </v-list-item-subtitle>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Faites des demandes de service sur le-->
<!--              <a href="https://www.facebook.com/groups/578440053119292">-->
<!--                <span class="mr-2">groupe Facebook privé</span>-->
<!--                <img :src="require('@/assets/f_logo_RGB-Blue_58.png')" height="20" style="margin-bottom:-3px;">-->
<!--              </a>-->
<!--            </v-list-item-subtitle>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--        <v-list-item :class="{-->
<!--            'pl-0 pr-0': $vuetify.breakpoint.smAndDown-->
<!--          }">-->
<!--          <v-list-item-icon>-->
<!--            <v-icon :large="$vuetify.breakpoint.smAndDown" :x-large="$vuetify.breakpoint.mdAndUp">emoji_emotions-->
<!--            </v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content class="text-left">-->
<!--            <v-list-item-title class="body-1 text-md-h5 font-weight-regular">-->
<!--              Sentez-vous utile-->
<!--            </v-list-item-title>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Aidez des gens dans la Baie des Chaleurs.-->
<!--            </v-list-item-subtitle>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Faites aussi valoir vos compétences.-->
<!--            </v-list-item-subtitle>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--        <v-list-item :class="{-->
<!--            'pl-0 pr-0': $vuetify.breakpoint.smAndDown-->
<!--          }">-->
<!--          <v-list-item-icon>-->
<!--            <v-icon :large="$vuetify.breakpoint.smAndDown" :x-large="$vuetify.breakpoint.mdAndUp">money</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content class="text-left">-->
<!--            <v-list-item-title class="body-1 text-md-h5 font-weight-regular">-->
<!--              Créez de la richesse-->
<!--            </v-list-item-title>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Contribuez à l'économie locale avec une monnaie locale.-->
<!--            </v-list-item-subtitle>-->
<!--            <v-list-item-subtitle class="text-subtitle-1 text-md-h6 font-weight-regular">-->
<!--              Obtenez 5 heures de services à l'enregistrement.-->
<!--            </v-list-item-subtitle>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
    </div>
  </Cercle>
</template>

<script>
export default {
  name: "CafeReparationCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  },
  data: function(){
    return {
      images: ["cafe-reparation/café-réparation.jpg", "cafe-reparation/café-réparation2.jpg", "cafe-reparation/café-réparation3.jpg", "cafe-reparation/café-réparation4.jpg", "cafe-reparation/café-réparation5.jpg"]
    }
  }
}
</script>

<style scoped>

</style>
