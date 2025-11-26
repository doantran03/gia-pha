import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://giapha-api.py-media.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before the request is sent
        return config;
    },
    function (error) {
        // Do something with the request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lies within the range of 2xx causes this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that fall outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosClient;
