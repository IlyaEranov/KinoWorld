import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { docsKino, IKino } from "../../models/IKino";
import axios from "axios";
import api from '../../api/api.json'

const httpKino = axios.create({
    baseURL: `${api.endPointKino}`,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": `${api["X-API-KEY"]}`
    }
})

export const getKinoById = createAsyncThunk<IKino, string, {rejectValue: string | null}>(
    "kino/getKinoById",
    async (id, {rejectWithValue}) => {
        try{
            const response = await httpKino.get(`/movie/${id}`)
            return response.data
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export const getKinoByGenres = createAsyncThunk<docsKino, string | null, {rejectValue: string | null}>(
    "kino/getKinoByGenres",
    async (genresName, {rejectWithValue}) => {
        try{
            const notNullFieldsList = ["poster.url", "description", "top250"]

            const type = "type=movie&type=tv-series"
            const notNullFields = notNullFieldsList.map(e => `&notNullFields=${e}`).join("")
            const genres = genresName ? `&genres.name=${genresName}` : `&` 

            const response = await httpKino.get(`/movie?${type}${genres}${notNullFields}`)
            return response.data
        } catch (e: any) {
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export const getKinoTop10 = createAsyncThunk<docsKino, void, {rejectValue: string | null}>(
    "kino/getKinoTop10",
    async (_, {rejectWithValue}) => {
        try{
            const response = await httpKino.get(`/movie?limit=5&notNullFields=top10&notNullFields=backdrop.url`)
            return response.data
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export const searchKino = createAsyncThunk<docsKino, string, {rejectValue: string | null}>(
    "kino/searchKino",
    async (name, {rejectWithValue}) => {
        try{
            const response = await httpKino.get(`/movie/search?query=${name}`)
            return response.data
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface KinoState{
    isLoading: boolean
    isSkeletonLoading: boolean

    searchEntitie: docsKino | null
    top10Entitie: docsKino | null
    kinoByGenresEntitie: docsKino | null
    kinoByIdEntitie: IKino | null

    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    isSkeletonLoading: false,

    searchEntitie: null,
    top10Entitie: null,
    kinoByGenresEntitie: null,
    kinoByIdEntitie: null,

    error: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder

        //kinoById
        .addCase(getKinoById.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKinoById.fulfilled, (state, action) => {
            state.isLoading = false
            state.kinoByIdEntitie = action.payload
            state.error = null
        })
        .addCase(getKinoById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })

        //kinoByGenres
        .addCase(getKinoByGenres.pending, (state) => {
            state.isSkeletonLoading = true
        })
        .addCase(getKinoByGenres.fulfilled, (state, action) => {
            state.isSkeletonLoading = false
            state.kinoByGenresEntitie = action.payload
            state.error = null
        })
        .addCase(getKinoByGenres.rejected, (state, action) => {
            state.isSkeletonLoading = false
            state.error = action.payload!
        })

        //search
        .addCase(searchKino.pending, (state) => {
            state.isSkeletonLoading = true
        })
        .addCase(searchKino.fulfilled, (state, action) => {
            state.isSkeletonLoading = false
            state.searchEntitie = action.payload
            state.error = null
        })
        .addCase(searchKino.rejected, (state, action) => {
            state.isSkeletonLoading = false
            state.error = action.payload!
        })

        //top10
        .addCase(getKinoTop10.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKinoTop10.fulfilled, (state, action) => {
            state.isLoading = false
            state.top10Entitie = action.payload
            state.error = null
        })
        .addCase(getKinoTop10.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer
export const {} = KinoSlice.actions