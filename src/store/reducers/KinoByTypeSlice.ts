import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { docsKino } from "../../models/IKino";
import { httpKino } from "../../service/KinoService";
import { RejectType } from "../../types/RejectType";
import { RootState } from "../store";
import { preloadImage } from "../../utils/preloadImages";

export interface MoviesState{
    kinoByTypeTop10: docsKino | null
    error: string | null
}

const initialState: MoviesState = {
    kinoByTypeTop10: null,
    error: null
}

const KinoByTypeSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getKinoByTypeTop10.fulfilled, (state, action) => {
            state.kinoByTypeTop10 = action.payload
            state.error = null
        })
        .addCase(getKinoByTypeTop10.rejected, (state, action) => {
            state.error = action.payload!
        })
    }
})

export default KinoByTypeSlice.reducer

export const getKinoByTypeTop10 = createAsyncThunk<docsKino, string, RejectType>(
    "movies/getMoviesTop10",
    async (type, {rejectWithValue}) => {
        try{
            const response = await httpKino.get(`/movie?type=${type}&notNullFields=top250&sortField=top250&sortType=1`)
            return response.data
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

const selectKinoByTypeTop10 = (state: RootState) => state.KinoByTypeReducer.kinoByTypeTop10

export const selectKinoByTypeTop10WithPreload = createSelector([selectKinoByTypeTop10], kino => {
    let preloadedImages = kino?.docs.map(e => preloadImage(e.backdrop.url))
    return {...kino, preloadedImages}
})

export type KinoByTypeTop10Type = ReturnType<typeof selectKinoByTypeTop10WithPreload>