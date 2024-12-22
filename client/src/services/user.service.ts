import axios from "axios";
import { IUser } from "../models/IUser";
import api from "../api/api.json"

const httpUser = axios.create({
    baseURL: `${api.endPoint}`
})

export const userService = {
    getUser: async (user: IUser) => {
        const response = (await httpUser.get<IUser[]>("/")).data.find(e => e.email == user.email)
        return response
    },
    signUp: async (user: IUser) => {
        const response = (await httpUser.post("/users/", user)).data
        return response
    },
    getUserName:async (user: IUser) => {
        const response = (await httpUser.get<IUser[]>("")).data.find(e => e.name == user.name)
        return response
    }
}