import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

axios.defaults.baseURL = process.env.API_URL;

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