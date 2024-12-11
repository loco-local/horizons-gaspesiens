import VueScrollTo from 'vue-scrollto'
import router from '@/router'
import {nextTick} from "vue";

export default {
    allerALaSection: async function (elementId, route, offset) {
        await nextTick();
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
