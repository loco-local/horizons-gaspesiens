import {defineStore} from 'pinia'

export const useComiteStore = defineStore('comites', {
    state: () => {
        return {
            list:null
        }
    }
})
