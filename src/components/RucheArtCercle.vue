<template>
  <Cercle
      title="Ruche d'art la Ligne Courbe"
      anchor="ruche-art"
      :image="images"
      id="ruche-art"
  >
    <div slot="subtitle">
      Un atelier d’art communautaire qui accueille gratuitement tout le monde en tant qu’artiste et où diverses formes d’arts peuvent se déployer. Évolutif, le projet est à l’image de sa communauté et promeut l’inclusion, la liberté et le non-jugement.
    </div>
    <div slot="content">
      <p>
        La particularité de cette Ruche d'Art; Elle offre un calendrier ou la population sera invitée à créer sur place au Loco Local. Mais elle sera également nomade à l'intérieur du territoire de la MRC de Bonaventure.
      </p>
      <p>
        Une ressource dédiée est responsable de sa mise en œuvre; elle développe le concept, les outils et les partenariats, puis coordonne et facilite les ateliers. La création et l'implication d'un réseau de bénévoles est également envisagé.
      </p>
      <p>
        Cette offre d'une série structurée d'ateliers souhaite ainsi répondre aux besoins de la communauté, particulièrement observés en cette ère post-Covid, soit: tisser des liens, se réunir, développer sa créativité et adopter de saines habitudes de vie en santé mentale. La Ruche d'Art procure à l'organisme un outil éprouvé mais adaptable, qui répond de façon créative et sensible aux besoins de la communauté. Le projet lui permet de mieux s'adresser aux inégalités sociales par une offre gratuite et d'augmenter les opportunités de partager des ressources et des lieux.
      </p>
    </div>
  </Cercle>
</template>

<script>

export default {
  name: "RucheArtCercle",
  components: {
    Cercle: () => import("@/components/Cercle")
  },
  data: function () {
    return {
      images: [
        'ruche-art/387645462_362458159649677_8877377881901637866_n.jpg',
        'ruche-art/370124614_303384835936548_7315206724365161915_n.jpg',
        'ruche-art/370327841_1517259815672977_7807079465954598276_n.jpg',
        'ruche-art/398503134_697197899038590_1910964110921044156_n.jpg',
        'ruche-art/384553788_359326359898949_2938836637394233003_n.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>
