import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { docsKino, IKino } from "../../models/IKino";
import { RejectType } from "../../types/RejectType";
import { httpKino } from "../../service/KinoService";
import { RootState } from "../store";
import { preloadImage } from "../../utils/preloadImages";

export interface KinoState{
    isLoading: boolean
    isSkeletonLoading: boolean

    kinoSearch: docsKino | null
    kinoTop10: docsKino | null
    kinoById: IKino | null

    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    isSkeletonLoading: false,

    kinoSearch: null,
    kinoTop10: null,
    kinoById: null,

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
            state.kinoById = action.payload
            state.error = null
        })
        .addCase(getKinoById.rejected, (state, action) => {
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

        
    }
})

export default KinoSlice.reducer

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

const selectTop10Kino = (state: RootState) => state.KinoReducer.kinoTop10

export const selectTop10WithPreload = createSelector([selectTop10Kino], kino => {
    let preloadedImages = kino?.docs.map(e => preloadImage(e.backdrop.url))
    return {...kino, preloadedImages}
})

export type KinoTop10Type = ReturnType<typeof selectTop10WithPreload>