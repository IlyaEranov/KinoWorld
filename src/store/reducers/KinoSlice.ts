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

interface KinoProps{
    limit?: number
    page?: number
    type?: string
    notNullFields?: string[]
    genres?: string
}

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

export const getKino = createAsyncThunk<docsKino, KinoProps, {rejectValue: string | null}>(
    "kino/getKino",
    async ({limit, genres, notNullFields, type, page}, {rejectWithValue}) => {
        try{
            const pageQuery = page ? `&page=${page}` : `&`
            const limitQuery = limit ? `&limit=${limit}` : `&`    
            const typeQuery = type ? `&type=${type}` : `&`
            const notNullFieldsQuery = notNullFields?.map(e => `&notNullFields=${e}`).join("")
            const genresQuery = genres ? `&genres.name=${genres}` : `&` 

            const response = await httpKino.get(`/movie?${limitQuery}${pageQuery}${typeQuery}${genresQuery}${notNullFieldsQuery}`)
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

    searchEntities: docsKino | null
    top10Entities: docsKino | null
    kinoEntities: docsKino["docs"]
    kinoByIdEntitie: IKino | null

    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    isSkeletonLoading: false,

    searchEntities: null,
    top10Entities: null,
    kinoEntities: [],
    kinoByIdEntitie: null,

    error: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {
        resetKinoEntities: (state) => {
            state.kinoEntities = []
        }
    },
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

        //kino
        .addCase(getKino.pending, (state) => {
            state.isSkeletonLoading = true
        })
        .addCase(getKino.fulfilled, (state, action) => {
            state.isSkeletonLoading = false
            for(let i = 0; i < action.payload.docs.length; i++){
                state.kinoEntities.push(action.payload.docs[i])
            }
            state.error = null
        })
        .addCase(getKino.rejected, (state, action) => {
            state.isSkeletonLoading = false
            state.error = action.payload!
        })

        //search
        .addCase(searchKino.pending, (state) => {
            state.isSkeletonLoading = true
        })
        .addCase(searchKino.fulfilled, (state, action) => {
            state.isSkeletonLoading = false
            state.searchEntities = action.payload
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
            state.top10Entities = action.payload
            state.error = null
        })
        .addCase(getKinoTop10.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer
export const {resetKinoEntities} = KinoSlice.actions