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
                Horizons Gaspésiens est une coopérative de solidarité composée de 100 à 200 membres et un conseil
                d'administration élu en assemblée générale annuelle.
            </p>
            <p>
                La coopérative est aussi constituée de plusieurs comités pour les différents projets de la coop comme le
                Groupe d'achat, la bibliothèque Page Pourpre ou le PartageHeure.
                Mais aussi pour différents enjeux comme le design intérieur, le ménage, l'adhésion et le système de
                réservation de la salle.
            </p>
            <p>
                Les membres ont accès à la liste des comités et des membres qui les composent pour s'y joindre ou pour
                consulter les membres des comités.
            </p>
            <p>
                Ainsi, pour apporter une amélioration, on consulte d'abord les membres du comité.
                Si tout le monde est d'accord, on peut apporter le changement et c'est aussi une occasion de demander de
                l'aide.
            </p>
            <p>
                Par contre, si les opinions par rapport à un changement sont contradictoires ou trop variées et
                complexes,
                la procédure est de se rencontrer en personne, de discuter et éventuellement de voter et la majorité
                l'emporte.
            </p>
            <p>
                En donnant une certaine autonomie aux comités, les décisions de la coop bénéficient de l'intelligence
                collective.
                Cette autonomie contribue aussi au sentiment d'appartenance et augmente l'implication.
            </p>
        </div>
    </Cercle>
</template>

<script>
export default {
    name: "GouvernanceCercle",
    components: {
        Cercle: () => import("@/components/CercleWrap.vue")
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
