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
    toVuetifyCalendar: function (event) {
        const start = new Date(event.start.dateTime)
        const end = new Date(event.end.dateTime)
        return {
            name: event.summary,
            color: Event.getColorFromId(event.colorId).background,
            start: format(start, "yyyy-MM-dd HH:mm"),
            end: format(end, "yyyy-MM-dd HH:mm"),
            id: event.id
        }
    },
    getColorFromId: function (colorId) {
        const color = Event.googleColors.filter((color) => {
            return color.id === colorId
        })
        return color.length ? color[0] : Event.getColorFromId("9")
    },
}
export default Event;
