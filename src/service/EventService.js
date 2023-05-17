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
    add: async function (event) {
        const date = new Date(
            event.startDay.replaceAll("-", "/")
        )
        const startTime = event.startTime.split(":");
        date.setHours(startTime[0], startTime[1]);
        const startDate = date.toISOString()
        const endTime = event.endTime.split(":");
        date.setHours(endTime[0], endTime[1]);
        const endDate = date.toISOString();
        event.start = {
            'dateTime': startDate,
            'timeZone': 'America/Toronto',
        };
        event.end = {
            'dateTime': endDate,
            'timeZone': 'America/Toronto',
        };
        const response = await Service.api().post(
            '/events',
            event
        );
        return response.data;
    }
}
