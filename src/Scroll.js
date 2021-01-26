import VueScrollTo from 'vue-scrollto'
import router from '@/router'

export default {
    allerALaSection: function (elementId, route, offset) {
        if (offset === undefined) {
            offset = -60;
        }
        VueScrollTo.scrollTo(
            document.getElementById(elementId), 500, {
                easing: 'linear',
                offset: offset
            }
        );
        if (route) {
            router.push(route);
        }
    }
}
