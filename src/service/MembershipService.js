import Service from '@/service/Service'

export default {
    get: function (email) {
        return Service.api().post(
            "membership",
            {
                email: email
            }
        );
    },
    listReminders: async function (remindersListPassword) {
        const response = await Service.api().post(
            "membership/reminders",
            {
                remindersListPassword
            }
        );
        if (response.status === 401) {
            return false;
        }
        if (response.data.error) {
            return response.data;
        }
        return Object.keys(response.data.reminders).reduce((reminders, key) => {
            reminders.push({
                key,
                ...response.data.reminders[key]
            })
        }, [])
    }
}
