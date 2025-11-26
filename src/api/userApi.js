import axiosClient from "./axiosClient";

const userApi = {
    login(data) {
        const url = "/wp-json/jwt-auth/v1/token";
        return axiosClient.post(url, data);
    },

    register(data) {
        const url = "/wp-json/api/v1/register";
        return axiosClient.post(url, data);
    },
};

export default userApi;
