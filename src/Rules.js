const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
export default {
    required: function (value) {
        return !!value || "Champ requis"
    },
    email: function (value) {
        /* eslint-disable */
        if (!value) {
            return true
        }
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || "Courriel invalide"
    }
}
