/**
 * Copyright Vincent Blouin GNU General Public License v3.0
 */

const cercles = {
    ca: {
        nom: "CA",
        desactive: true
    },
    adhesion: {
        nom: "Adhésion",
        desactive: true
    },
    espace: {
        nom: "Collaborium et espace de vie",
        containerId: "collaborium",
        lien: "/collaborium"
    },
    groupe: {
        nom: "Groupe d'achat",
        containerId: "groupe-achat",
        lien: "/groupe-achat"
    },
    comptable: {
        nom: "Comptabilité",
        containerId: "comptable",
        lien: "/cercle/comptable",
        desactive: true
    },
    gouvernance: {
        nom: "Gouvernance",
        containerId: "gouvernance",
        lien: "/gouvernance"
    },
    financement: {
        nom: "Financement",
        containerId: "financement",
        lien: "/financement"
    },
    communication: {
        nom: "Communication",
        desactive: true
    },
    siteWeb: {
        nom: "Site web",
        desactive: true
    },
    pagePourpre: {
        nom: "Page Pourpre",
        containerId: "page-pourpre",
        lien: "/page-pourpre"
    },
    popDoc: {
        nom: "Pop Doc",
        containerId: "pop-doc",
        lien: "/pop-doc",
        desactive: true
    },
    imaginezDemain: {
        nom: "Imaginez Demain",
        containerId: "imaginez-demain",
        lien: "/imaginez-demain",
        desactive: true
    },
    rucheArt: {
        nom: "Ruche d'Art",
        containerId: "ruche-art",
        lien: "/ruche-art"
    },
    bougerEnsemble: {
        nom: "Bouger Ensemble",
        containerId: "bouger-ensemble",
        lien: "/bouger-ensemble",
        desactive: true
    },
    biblioOutils: {
        nom: "Bibliothèque d'outils",
        containerId: "biblio-outils",
        lien: "/biblio-outils"
    },
    reparation: {
        nom: "Café réparation",
        containerId: "cafe-reparation",
        lien: "/cafe-reparation"
    },
    partageHeure: {
        nom: "Partage Heure",
        containerId: "partage-heure",
        lien: "/partage-heure"
    }
}

const Cercles = {
    tous: cercles,
    actifs: Object.keys(cercles).reduce((cercles, key) => {
        const cercle = cercles[key];
        if (!cercle.desactive) {
            cercles[key] = cercle
        }
        return cercles;
    }, {})
}
export default Cercles;