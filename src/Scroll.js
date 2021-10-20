import VueScrollTo from 'vue-scrollto'
import router from '@/router'

export default {
    allerALaSection: async function (elementId, route, offset) {
        if (offset === undefined) {
            offset = -60;
        }
        if (route) {
            try{
                await router.push(route);
            }catch(e){
                //continue
            }
        }
        VueScrollTo.scrollTo(
            document.getElementById(elementId), 500, {
                easing: 'linear',
                offset: offset
            }
        );
    }
}
