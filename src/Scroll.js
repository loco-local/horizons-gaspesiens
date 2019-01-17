import VueScrollTo from 'vue-scrollto'
import router from '@/router'

export default {
    allerALaSection: function (elementId, route) {
        VueScrollTo.scrollTo(
            document.getElementById(elementId), 500, {
                easing: 'linear',
                offset: -60
            }
        );
        if (route) {
            router.push(route);
        }
    }
}
