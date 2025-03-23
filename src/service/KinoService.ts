import axios from "axios";
import api from "../api/api.json"

export const httpKino = axios.create({
    baseURL: `${api.endPointKino}`,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${api["X-API-KEY"]}`
    }
})