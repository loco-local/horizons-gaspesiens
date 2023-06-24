import Event from '@/Event'
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
    },
    afterTime: function (valueTime, time) {
        const valueDate = new Date();
        Event.setTimeToDate(valueTime, valueDate)
        const otherDate = new Date();
        Event.setTimeToDate(time, otherDate)
        return valueDate > otherDate || "L'heure de fin doit être après l'heure de début"
    }
}
