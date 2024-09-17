import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import authService from "../../services/auth.service";

enum AuthErrors{
    emailIsExist = "Пользователь с такой почтой уже существует",
    emailIsNotExist = "Пользователя с такой почтой не существует",
    password = "Неверный пароль",
    name = "Пользователь с таким именем уже существует"
}

export const loginUser = createAsyncThunk<IUser, IUser, {rejectValue: string | null}>(
    "user/loginUser",
    async (user, {rejectWithValue}) => {
        try{
            const response = await authService.getUser(user)
            if(response != undefined){
                if(response.password == user.password){
                    return response
                } else {
                    return rejectWithValue(AuthErrors.password)
                }
            } else {
                return rejectWithValue(AuthErrors.emailIsNotExist)
            }
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export const registerUser = createAsyncThunk<IUser, IUser, {rejectValue: string | null}>(
    "user/registerUser",
    async (user, {rejectWithValue}) => {
        try{
            if(await authService.getUser(user) != undefined){
                return rejectWithValue(AuthErrors.emailIsExist)
            } else if(await authService.getUserName(user) != undefined){
                return rejectWithValue(AuthErrors.name)
            } else {
                return await authService.signUp(user)
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
        resetAuthError: (state) => {
            state.authError = null
        }
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
            state.authError = null
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.authError = action.payload!
        })
        //login
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLogged = true
            state.user = action.payload
            state.authError = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.authError = action.payload!
        })
    }
})

export const {resetAuthError} = UserSlice.actions
export default UserSlice.reducer

