import Service from '@/service/Service'
import DateUtil from '../DateUtil';

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
            const value = response.data.reminders[key];
            reminders.push({
                key: key,
                value: value
            })
            return reminders;
        }, []).sort((a, b) => {
            return b.value - a.value
        }).map((reminder) => {    
            const timestamp = parseInt(reminder.value, 10);
            reminder.value = DateUtil.getDayDate(new Date(timestamp));
            return reminder;
        })
    }
}
