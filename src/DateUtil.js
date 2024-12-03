import {format} from 'date-fns'
import {fr} from 'date-fns/locale'

const DateUtil = {
    setup: function (app) {
        app.config.globalProperties.$filters.dayDate = DateUtil.getDayDate
        app.config.globalProperties.$filters.time = DateUtil.getTime
    },
    getDayDate: function (value) {
        if (value) {
            return format(
                new Date(String(value)),
                'd MMMM yyyy',
                {
                    locale: fr
                }
            )
        }
    },
    getTime: function(value){
        if (value) {
            return format(
                new Date(String(value)),
                'HH:mm',
                {
                    locale: fr
                }
            )
        }
    }
}

export default DateUtil
