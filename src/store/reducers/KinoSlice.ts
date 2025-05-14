import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { docsKino } from "../../models/IKino";
import type { RejectType } from "../../types/RejectType";
import axios from "axios";
import api from "../../api/api.json"

const httpKino = axios.create({
    baseURL: api.kinoEndPoint,
    headers: {
        "X-API-KEY": api["X-API-KEY"]
    }
})

const ErrorNames = {
    Server: "Ошибка сервера. Не удалось получить данные"
}

export const searchKino = createAsyncThunk<docsKino, string, RejectType>(
    "kino/searchKino",
    async (q, thunkApi) => {
        try{
            const response = await httpKino.get(`/movie/search?query=${q}`)
            console.log(response.data)
            return response.data
        } catch(e: any){
            return thunkApi.rejectWithValue(ErrorNames.Server)
        }
    }
)

export const fetchKinoTop10 = createAsyncThunk<docsKino, void, RejectType>(
    "kino/fetchKinoTop10",
    async (_, thunkApi) => {
        try{
            const response = await httpKino.get(`/movie?limit=5&notNullFields=top10`)
            return response.data
        } catch(e: any){
            return thunkApi.rejectWithValue(ErrorNames.Server)
        }
    }
)

export interface KinoState{
    isLoading: boolean
    isSkeletonLoading: boolean
    error: string | null

    kinoTop10: docsKino | null
    kinoSearch: docsKino | null
}

const initialState: KinoState = {
    isLoading: false,
    isSkeletonLoading: false,
    error: null,

    kinoTop10: null,
    kinoSearch: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        //kinoTop10
        .addCase(fetchKinoTop10.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchKinoTop10.fulfilled, (state, action) => {
            state.isLoading = false
            state.kinoTop10 = action.payload
            state.error = null
        })
        .addCase(fetchKinoTop10.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
        //search
        .addCase(searchKino.pending, (state) => {
            state.isSkeletonLoading = true
        })
        .addCase(searchKino.fulfilled, (state, action) => {
            state.isSkeletonLoading = false
            state.kinoSearch = action.payload
            state.error = null
        })
        .addCase(searchKino.rejected, (state, action) => {
            state.isSkeletonLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer

