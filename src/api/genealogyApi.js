import axiosClient from "./axiosClient";

const genealogyApi = {
    getAll() {
        const url = "/wp-json/api/v1/genealogy";
        return axiosClient.get(url);
    },

    create(data) {
        const url = "/wp-json/api/v1/genealogy";
        return axiosClient.post(url, data);
    },

    update(id, data) {
        const url = `/wp-json/api/v1/genealogy/${id}`;
        return axiosClient.put(url, data);
    },

    delete(id) {
        const url = `/wp-json/api/v1/genealogy/${id}`;
        return axiosClient.delete(url);
    },
};

export default genealogyApi;
