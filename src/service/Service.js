/*
 * Copyright Vincent Blouin under the GPL License version 3
 */

import axios from 'axios'

const Service = {
    baseUrl: function () {
        const apiPort = process.env.VUE_APP_API_PORT || '443';
        return location.protocol + '//' + location.hostname + ':' + apiPort + '/api';
    },
    api: function () {
        const axiosInstance = axios.create({
            baseURL: Service.baseUrl(),
            responseType: 'json'
        });
        return axiosInstance;
    }
};
export default Service
