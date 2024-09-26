import axios from "axios"
import api from "../api/api.json"
import { KinoProps } from "../store/reducers/KinoSlice"

const httpKino = axios.create({
    baseURL: `${api.apiEndPointKinopoisk}`,
    headers: {
        "X-API-KEY": `${api["X-API-KEY"]}`
    }
})

const kinoService = {
    fetchByFilter: async ({limit, notNullField}: KinoProps) => {
        const response = await httpKino.get(`/movie?limit=${limit}&notNullFields=${notNullField}`)
        return response.data
    }
}

export default kinoService