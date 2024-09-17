import axios from "axios"
import api from "../api/api.json"
import { IUser } from "../models/IUser"

const httpAuth = axios.create({
    baseURL: `${api.apiEndPoint}/users`
})

const authService = {
    getUser: async (user: IUser) => {
        const response = (await httpAuth.get<IUser[]>("")).data.find(e => e.email == user.email)
        return response
    },
    signUp: async (user: IUser) => {
        const response = await httpAuth.post("", user)
        return response.data
    },
    getUserName:async (user: IUser) => {
        const response = (await httpAuth.get<IUser[]>("")).data.find(e => e.name == user.name)
        return response
    }
}

export default authService