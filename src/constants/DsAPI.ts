import axios from "axios";

export const DbAPI = axios.create({
    baseURL: "https://api.disneyapi.dev"
})