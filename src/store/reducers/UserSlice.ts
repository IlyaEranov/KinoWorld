import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import axios from "axios";
import api from "../../api/api.json"

export const registerUser = createAsyncThunk<IUser, IUser, {rejectValue: string | null}>(
    "user/registerUser",
    async (user, {rejectWithValue}) => {
        try{
            const entities = await axios.get<IUser[]>(`${api.apiEndPoint}/users/`)
            const isAuth = entities.data.find(e => e.email == user.email && e.name == user.name)
            if(isAuth == undefined){
                const response = await axios.post(`${api.apiEndPoint}/users/`, user)
                return response.data
            }
        } catch(e: any) {
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface UserState{
    isLoading: boolean
    isLogged: boolean
    user: IUser | null
    authError: string | null
}

const initialState: UserState = {
    isLoading: false,
    isLogged: false,
    user: null,
    authError: null
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        //register
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLogged = true
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.authError = action.payload!
        })
    }
})

export default UserSlice.reducer

