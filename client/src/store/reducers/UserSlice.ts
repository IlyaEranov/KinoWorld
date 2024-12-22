import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { userService } from "../../services/user.service";

enum AuthErrors{
    emailIsExist = "Пользователь с такой почтой уже зарегестрирован",
    emailIsNotExist = "Пользователь с такой почтой не найден",
    nameIsExist = "Пользователь с таким именем уже зарегестрирован",
    passwordIsNotExist = "Неверный пароль"
}

export const registerUser = createAsyncThunk<IUser, IUser, {rejectValue: string | null}>(
    "user/registerUser",
    async (user, {rejectWithValue}) => {
        try{
            if(await userService.getUser(user) != undefined){
                return rejectWithValue(AuthErrors.emailIsExist)
            } else if(await userService.getUserName(user) != undefined){
                return rejectWithValue(AuthErrors.nameIsExist)
            } else {
                return await userService.signUp(user)
            }
        } catch(e: any) {
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export const loginUser = createAsyncThunk<IUser, IUser, {rejectValue: string | null}>(
    "user/loginUser",
    async (user, {rejectWithValue}) => {
        try{
            const response = await userService.getUser(user)
            if(response != undefined){
                if(response.password == user.password){
                    return response
                } else {
                    return rejectWithValue(AuthErrors.passwordIsNotExist)
                }
            } else {
                return rejectWithValue(AuthErrors.emailIsNotExist)
            }
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface UserState{
    isLoading: boolean
    user: IUser | null
    authError: string | null
}

const initialState: UserState = {
    isLoading: false,
    user: null,
    authError: null
}

export const UserSlice = createSlice({
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
            state.user = action.payload
            state.authError = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.authError = action.payload!
        })
    }
})

export default UserSlice.reducer
export const {resetAuthError} = UserSlice.actions