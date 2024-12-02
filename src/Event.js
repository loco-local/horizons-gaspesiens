import {format} from "date-fns";

// this.googleColors = await EventService.listColors();
// this.googleColors = Object.keys(this.googleColors.event).map((colorId) => {
//     const color = this.googleColors.event[colorId];
//     color.id = colorId
//     return color;
// })
const Event = {
    googleColors: [{
        "background": "#a4bdfc",
        "foreground": "#1d1d1d",
        "id": "1"
    }, {
        "background": "#7ae7bf", "foreground": "#1d1d1d", "id": "2"
    }, {
        "background": "#dbadff", "foreground": "#1d1d1d", "id": "3"
    }, {"background": "#ff887c", "foreground": "#1d1d1d", "id": "4"}, {
        "background": "#fbd75b",
        "foreground": "#1d1d1d",
        "id": "5"
    }, {"background": "#ffb878", "foreground": "#1d1d1d", "id": "6"}, {
        "background": "#46d6db",
        "foreground": "#1d1d1d",
        "id": "7"
    }, {"background": "#e1e1e1", "foreground": "#1d1d1d", "id": "8"}, {
        "background": "#5484ed",
        "foreground": "#1d1d1d",
        "id": "9"
    }, {"background": "#51b749", "foreground": "#1d1d1d", "id": "10"}, {
        "background": "#dc2127",
        "foreground": "#1d1d1d",
        "id": "11"
    }],
    formatEventToScheduleX: function (event) {
        if (event.start.dateTime === undefined) {
            let start = new Date(event.start.date)
            event.start = start;
            event.end = undefined;
        } else {
            let start = new Date(event.start.dateTime)
            let end = new Date(event.end.dateTime)
            event.start = start;
            event.end = end;
        }
        // const startHour = format(event.start, "HH:mm")
        // const endHour = format(event.end, "HH:mm")
        // event.title = `${event.summary}  ${startHour} à ${endHour}`
        event.title = event.summary;
        event.color = Event.getColorFromId(event.colorId).background;
        event.start = format(event.start, 'yyyy-MM-dd HH:mm')
        event.end = format(event.end, 'yyyy-MM-dd HH:mm')
        if (event.colorId === "9") {
            event.calendarId = "shared"
        } else if (event.colorId === "10") {
            event.calendarId = "nonPriority"
        } else {
            event.calendarId = "exclusive"
        }
        return event;
    },
    getColorFromId: function (colorId) {
        const color = Event.googleColors.filter((color) => {
            return color.id === colorId
        })
        return color.length ? color[0] : Event.getColorFromId("11")
    },
    initNewEvent: function (createDate, end) {
        const newEvent = {
            timed: true,
            organizer: {
                fullname: null,
                email: null,
                phone: null
            },
            accepteConditions: false
        }
        Event.defineDatesFromVuetifyEvent(
            newEvent, createDate, end
        )
        return newEvent;
    },
    defineDatesFromVuetifyEvent: function (event, createDate, end) {
        // console.log("a")
        if (createDate) {
            // console.log(createDate)
            event.startDay = format(createDate, "yyyy-MM-dd");
            event.startTime = format(createDate, "HH:mm");
        }
        if (end) {
            // console.log("b")
            // console.log(end)
            event.endTime = format(end, "HH:mm");
        }
    },
    formatEventForGoogleApi: function (event) {
        const date = new Date(
            event.startDay.replaceAll("-", "/")
        )
        Event.setTimeToDate(event.startTime, date)
        const startDate = date.toISOString()
        Event.setTimeToDate(event.endTime, date)
        const endDate = date.toISOString();
        event.start = {
            'dateTime': startDate,
            'timeZone': 'America/Toronto',
        };
        event.end = {
            'dateTime': endDate,
            'timeZone': 'America/Toronto',
        };
    },
    setTimeToDate: function (time, date) {
        const timeArray = time.split(":");
        date.setHours(timeArray[0], timeArray[1]);
    }
}
export default Event;
