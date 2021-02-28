<template>
  <Page>
    <div slot="content" class="body-1">
      <v-layout row wrap >
        <v-flex xs12 class="text-left pl-6 pt-0 mt-0">
          <h3 class="title mb-4">
            Bibliothèque collective
          </h3>
          <p>
            Voici des livres que nous croyons utiles à l’atteinte du but d’Horizons Gaspésiens
          </p>
          <p>
            Cette bibliothèque communautaire est vouée à croître par la collaboration.
          </p>
          <p>
            1) Un livre peut être disponible sur le réseau des bibliothèques de la Gaspésie, un hyperlien vous mènera à
            la page du réseau Biblio sur laquelle vous n’aurez qu’à entrer le titre, la cote ou l’auteur du livre.
          </p>
          <p>
            2) Le livre peut aussi être disponible directement chez une personne dans une municipalité gaspésienne.
          </p>
          <p>
            Nous tentons l’expérience avec le prêt de livres et qui sait, peut-être un jour pourrons-nous faire de même
            avec les tondeuses, rotoculteurs et autres biens et services !
          </p>
          <p>
            Plusieurs livres sont disponibles à la bibliothèque du Loco Local. Celle-ci est maintenant intégrée dans le
            réseau Biblio, et peuvent donc voyager à travers la Gaspésie si vous souhaitez le réserver.
          </p>
          <p>
            Voudrez-vous partager vos lectures inspirantes pour augmenter la résilience locale?
          </p>
          Économie
          <ul>
            <li>
              La fin de l'abondance
            </li>
            <li>(R)évolutions. Pour une réponse politique en actes</li>
            <li>
              La juste part
            </li>
            <li>
              La reconquête du Québec
            </li>
            <li>
              Creating Wealth
            </li>
            <li>
              Politique
            </li>
            <li>
              Abolir les partis politiques
            </li>
          </ul>
          Agriculture et Permaculture
          <ul>
            <li>
              Comment devenir autonome. Manuel destiné aux personnes qui ont vraiment envie de prendre leur vie en main.
            </li>
            <li>
              Nouveau guide illustré du jardinage au Canada
            </li>
            <li>
              Les quatres saisons dans la vallée du Saint-Laurent
            </li>
            <li>
              L'art de vivre au temps jadis
            </li>
            <li>
              Self-sufficient life and how to live it. The complete back-to-basics guide.
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </div>
  </Page>
</template>

<script>
export default {
  name: "Sécession",
  components: {
    Page: () => import("@/components/Page"),
  }
}
</script>

<style scoped>

</style>
