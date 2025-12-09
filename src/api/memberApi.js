import axiosClient from "./axiosClient";

const memberApi = {
    getAllByGenealogyId(id) {
        const url = `/wp-json/api/v1/member/by-genealogy/${id}`;
        return axiosClient.get(url);
    },
};

export default memberApi;