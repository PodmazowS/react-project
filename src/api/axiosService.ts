import axios from "axios";

import baseURL from "../config/urls";


export const axiosService = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});