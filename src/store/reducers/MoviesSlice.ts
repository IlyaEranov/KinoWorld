import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { docsKino, RejectType } from "../../models/IKino";
import { httpKino } from "../../service/KinoService";

export const getMoviesTop10 = createAsyncThunk<docsKino, void, RejectType>(
    "movies/getMoviesTop10",
    async (_, {rejectWithValue}) => {
        try{
            const response = await httpKino.get(`/movie?type=movie&notNullFields=top250&sortField=top250&sortType=1`)
            return response.data
        } catch (e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface MoviesState{
    moviesTop10: docsKino | null
    error: string | null
}

const initialState: MoviesState = {
    moviesTop10: null,
    error: null
}

const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getMoviesTop10.fulfilled, (state, action) => {
            state.moviesTop10 = action.payload
            state.error = null
        })
        .addCase(getMoviesTop10.rejected, (state, action) => {
            state.error = action.payload!
        })
    }
})

export default MoviesSlice.reducer