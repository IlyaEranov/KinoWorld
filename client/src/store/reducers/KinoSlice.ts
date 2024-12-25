import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IKino } from "../../models/IKino";
import axios from "axios";
import api from "../../api/api.json"

interface KinoProps{
    limit?: number
    type?: string
    page?: number
    notNullFields?: string[]
    genres?: string
}

export const getKinoTop10 = createAsyncThunk<IKino, KinoProps, {rejectValue: string | null}>(
    "kino/getKinoTop10",
    async ({limit}, {rejectWithValue}) => {
        try{
            const response = await axios.get(`
                ${api.endPointKinoPoisk}/movie?
                limit=${limit}
                &notNullFields=top10`, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": api["X-API-KEY"]
                }
            })
            return response.data
        } catch(e: any){
            return rejectWithValue(`Server Error: ${e["message"]}`)
        }
    }
)

export const getMovie = createAsyncThunk<IKino, KinoProps, {rejectValue: string | null}>(
    "kino/getMovies",
    async ({limit, notNullFields, genres, page}, {rejectWithValue}) => {
        try{
            let notNullField = notNullFields?.map(e => `&notNullFields=${e}`).join("")
            let genresName = genres === undefined ? `&` : `&genres.name=${genres}`
            const response = await axios.get(`
            ${api.endPointKinoPoisk}/movie?
            limit=${limit}
            &page=${page}
            &type=movie
            ${notNullField}
            ${genresName}`, {
                headers: {
                    "X-API-KEY": api["X-API-KEY"]
                }
            })
            return response.data
        } catch (e: any) {
            return rejectWithValue(`Server Error: ${e["message"]}`)
        }
    }
)

export const getSeries = createAsyncThunk<IKino, KinoProps, {rejectValue: string | null}>(
    "kino/getSeries",
    async ({limit, page, genres, notNullFields}, {rejectWithValue}) => {
        try{
            const response = await axios.get(`
                ${api.endPointKinoPoisk}/movie?
                limit=${limit}
                &page=${page}
                `, {
                    headers: {
                        "X-API-KEY": `${api["X-API-KEY"]}`
                    }
                })
        } catch (e: any) {
            return rejectWithValue(`Server Error: ${e["message"]}`)
        }
    }
)

export interface KinoState{
    isLoading: boolean
    isUpdating: boolean
    entitiesTop10: IKino | null
    entitiesMovie: IKino["docs"]
    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    isUpdating: false,
    entitiesTop10: null,
    entitiesMovie: [],
    error: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true
        },
        resetLoading: (state) => {
            state.isLoading = false
        },
        resetEntitiesMovie: (state) => {
            state.entitiesMovie = []
        }
    },
    extraReducers: builder => {
        builder
        //top10
        .addCase(getKinoTop10.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKinoTop10.fulfilled, (state, action) => {
            state.isLoading = false
            state.entitiesTop10 = action.payload
            state.error = null
        })
        .addCase(getKinoTop10.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
        //type
        .addCase(getMovie.pending, (state) => {
            state.isUpdating = true
        })
        .addCase(getMovie.fulfilled, (state, action) => {
            state.isUpdating = false
            for(let i = 0; i < action.payload.docs.length; i++){
                state.entitiesMovie.push(action.payload.docs[i])
            }
            state.error = null
        })
        .addCase(getMovie.rejected, (state, action) => {
            state.isUpdating = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer
export const {setLoading, resetLoading, resetEntitiesMovie} = KinoSlice.actions
