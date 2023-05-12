import Service from '@/service/Service'

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
}
