/*
 * Copyright Vincent Blouin under the GPL License version 3
 */

import axios from 'axios'

const Service = {
    baseUrl: function () {
        return "https://horizonsgaspesiens.net/wp-json/wp/v2/";
    },
    api: function () {
        const axiosInstance = axios.create({
            baseURL: Service.baseUrl(),
        });
        return axiosInstance;
    }
};
export default Service
