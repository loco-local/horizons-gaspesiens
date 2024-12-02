import Service from '@/service/Service'
import Event from '@/Event'

export default {
    list: async function (minDate, maxDate) {
        const response = await Service.api().get(
            `/events?minDate=${minDate}&maxDate=${maxDate}`
        );
        return response.data.sort((a, b) => {
            if (a.start === undefined) {
                if (b.start === undefined) {
                    return 0
                }
                return -1;
            }
            if (b.start === undefined) {
                if (a.start === undefined) {
                    return 0
                }
                return -1;
            }
            return new Date(a.start.dateTime) - new Date(b.start.dateTime)
        })
    },
    listColors: async function () {
        const response = await Service.api().get(
            '/events/colors'
        );
        return response.data;
    },
    add: async function (event) {
        Event.formatEventForGoogleApi(event);
        const response = await Service.api().post(
            '/events',
            event
        );
        return response.data;
    },
    update: async function (event) {
        Event.formatEventForGoogleApi(event);
        const response = await Service.api().put(
            `/events/${event.id}`,
            event
        );
        return response.data;
    },
    delete: async function (eventId) {
        return Service.api().delete(
            `/events/${eventId}`
        );
    }
}
