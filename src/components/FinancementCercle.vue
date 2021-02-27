<template>
  <Cercle
      title="Financement"
      anchor="financement"
      class="pa-0"
      image="sourie.jpg"
  >
    <!--https://pixabay.com/fr/le-crowdfunding-financement-id%C3%A9es-3576868/-->
    <div slot="subtitle">
      La créativité, la débrouille et la persévérence sont au rendez-vous pour
      ceux qui veulent développer leur sens de l'entreprenariat social.
    </div>
    <div slot="content">
      <p>
        Et continuer à rendre la merveilleuse expérience du Loco Local
        possible pour plus longtemps encore.
      </p>
      <p>
        La location de salle, la vente de produits nettoyants, le chocolat,
        les serviettes sanitaires etc, le groupe d'achat, le reconditionnement
        d'ordinateur sont tous des moyens actuels de payer le local.
      </p>
      <p>Venez donc y ajouter votre touche personnelle.</p>
    </div>
  </Cercle>
</template>

<script>
export default {
  name: "FinancementCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  }
}
</script>

<style scoped>

</style>