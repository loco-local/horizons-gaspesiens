<template>
  <Cercle
      title="Gouvernance"
      anchor="gouvernance"
      class="pa-0"
      :image="gouvernanceImages"
  >
    <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
    <div slot="subtitle">
      Les membres peuvent prendre part aux décisions de la coopérative.
    </div>
    <div>
<!--      Pour apporter des changements au Loco Local ou pour la Coopérative Horizons Gaspésiens en général,-->
<!--      les membres on-->
    </div>
    <div slot="content">
      <p>
        Horizons Gaspésiens est une coopérative de solidarité composée de 100 à 200 membres et un conseil d'administration élu en assemblée générale annuelle.
      </p>
      <p>
        La coopérative est aussi constituée de plusieurs comités pour les différents projets de la coop comme le Groupe d'achat, la bibliothèque Page Pourpre ou le PartageHeure.
        Mais aussi pour différents enjeux comme le design intérieur, le ménage, l'adhésion et le système de réservation de la salle.
      </p>
      <p>
        Les membres ont accès à la liste des comités et des membres qui les composent pour s'y joindre ou pour consulter les membres des comités.
      </p>
      <p>
        Ainsi, pour apporter une amélioration, on consulte d'abord les membres du comité.
        Si tout le monde est d'accord, on peut apporter le changement et c'est aussi une occasion de demander de l'aide.
      </p>
      <p>
        Par contre, si les opinions par rapport à un changement sont contradictoires ou trop variées et complexes,
        la procédure est de se rencontrer en personne, de discuter et éventuellement de voter et la majorité l'emporte.
      </p>
      <p>
        En donnant une certaine autonomie aux comités, les décisions de la coop bénéficient de l'intelligence collective.
        Cette autonomie contribue aussi au sentiment d'appartenance et augmente l'implication.
      </p>
<!--      <v-card class="mb-6">-->
<!--        <v-card-text class="body-1">-->
<!--        </v-card-text>-->
<!--        <v-card-title class="title"> À propos de l'Holacracy</v-card-title>-->
<!--        <v-list>-->
<!--          <v-list-item-->
<!--              href="https://labdsurlholacracy.com/bande-dessinee-holacracy"-->
<!--          >-->
<!--            <v-list-item-action>-->
<!--              <v-icon>fa-book-reader</v-icon>-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-title class="body-1">-->
<!--              Bande dessinée-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item href="https://www.holacracy.org/webinar-recording">-->
<!--            <v-list-item-action>-->
<!--              <v-icon>movie</v-icon>-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-title class="body-1"> Vidéo</v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item href="https://igipartners.com/constitution-holacracy">-->
<!--            <v-list-item-action>-->
<!--              <v-icon>account_balance</v-icon>-->
<!--            </v-list-item-action>-->
<!--            <v-list-item-title class="body-1"> Principes</v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-card>-->
<!--      <p>Les cercles et leurs membres sont énumérés sur ce site.</p>-->
<!--      <p>-->
<!--        La raison d'être du cercle "Gouvernance" est d'installer la gestion-->
<!--        participative dans Horizons Gaspésiens.-->
<!--      </p>-->
<!--      <p>-->
<!--        <v-card>-->
<!--          <v-card-title class="title">-->
<!--            Cercles d'Horizons Gapésiens-->
<!--          </v-card-title>-->
<!--          <v-list>-->
<!--            <v-list-item-->
<!--                href="https://docs.google.com/document/d/1XQFmsfxNzZA4oryQ1IvUjf0otLuk0TjkVTEEglNEqE8"-->
<!--            >-->
<!--              <v-list-item-action>-->
<!--                <v-icon>fa-file</v-icon>-->
<!--              </v-list-item-action>-->
<!--              <v-list-item-title class="body-1">-->
<!--                Octobre 2018-->
<!--              </v-list-item-title>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--        </v-card>-->
      </p>
    </div>
  </Cercle>
</template>

<script>
export default {
  name: "GouvernanceCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  },
  data: function () {
    return {
      gouvernanceImages: ["gouvernance/aga_2021.jpg", "reunion-debout.jpg", "gouvernance-2.jpg"],
    }
  }
}
</script>

<style scoped>

</style>
