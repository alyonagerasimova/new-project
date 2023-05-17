import axios from "axios";

const API_URL = "http://localhost:4200";
axios.defaults.baseURL = API_URL;

export const AboutTextService = {
    async getAll() {
        const {data} = await axios.get("/aboutText");
        return data;
    },
    async getById(id) {
        const {data} = await axios.get("/aboutText", {
            params: {
                id
            }
        });
        return data[0];
    }
}