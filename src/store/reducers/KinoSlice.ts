import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { docsKino, IKino, KinoProps, RejectType } from "../../models/IKino";
import { httpKino } from "../../service/KinoService";

export const searchKino = createAsyncThunk<docsKino, string, RejectType>(
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

export const getKinoTop10 = createAsyncThunk<docsKino, void, RejectType>(
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

export const getKinoById = createAsyncThunk<IKino, string, RejectType>(
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

export const getKinoByGenres = createAsyncThunk<docsKino, KinoProps, RejectType>(
    "kino/getKinoByGenres",
    async ({type, genres}, {rejectWithValue}) => {
        try{
            const notNullFieldsList = ["poster.url", "description", "top250"]

            const notNullFields = notNullFieldsList.map(e => `&notNullFields=${e}`).join("")
            const genresList = genres ? genres.map(e => `&genres.name=${e}`).join("") : `&`

            const response = await httpKino.get(`/movie?type=${type}${genresList}${notNullFields}`)
            return response.data
        } catch (e: any) {
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface KinoState{
    isLoading: boolean
    isSkeletonLoading: boolean

    kinoSearch: docsKino | null
    kinoTop10: docsKino | null
    kinoById: IKino | null
    kinoByGenres: docsKino["docs"]

    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    isSkeletonLoading: false,

    kinoSearch: null,
    kinoTop10: null,
    kinoById: null,
    kinoByGenres: [],

    error: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {
        resetKinoByGenres: (state) => {
            state.kinoByGenres = []
        }
    },
    extraReducers: builder => {
        builder

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

        //top10
        .addCase(getKinoTop10.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKinoTop10.fulfilled, (state, action) => {
            state.isLoading = false
            state.kinoTop10 = action.payload
            state.error = null
        })
        .addCase(getKinoTop10.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })

        //kinoById
        .addCase(getKinoById.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKinoById.fulfilled, (state, action) => {
            state.isLoading = false
            state.kinoById = action.payload
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
            for(let i = 0; i < action.payload.docs.length; i++){
                state.kinoByGenres.push(action.payload.docs[i])
            }
            state.error = null
        })
        .addCase(getKinoByGenres.rejected, (state, action) => {
            state.isSkeletonLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer
export const {resetKinoByGenres} = KinoSlice.actions