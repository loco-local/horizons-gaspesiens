import Service from '@/service/Service'
import Event from '@/Event'

export default {
    list: async function (minDate, maxDate) {
        const response = await Service.api().get(
            `/events?minDate=${minDate}&maxDate=${maxDate}`
        );
        return response.data;
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
