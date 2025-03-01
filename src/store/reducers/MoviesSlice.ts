import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api.json"
import { docsKino } from "../../models/IKino";

const httpMovies = axios.create({
    baseURL: `${api.endPointKino}`,
    headers: {
        "X-API-KEY": api["X-API-KEY"]
    }
})

export const getTop10Movies = createAsyncThunk<docsKino, void, {rejectValue: string | null}>(
    "movies/getTop10Movies",
    async (_, {rejectWithValue}) => {
        try{
            const notNullFieldsList = ["poster.url", "top250", "description"]
            const notNullFields = notNullFieldsList.map(e => `&notNullFields=${e}`).join("")
            const response = await httpMovies.get(`/movies?type=movie${notNullFields}`)
            return response.data
        } catch(e: any){
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

export interface MoviesState{
    error: string | null
}

const initialState: MoviesState = {
    error: null
}

const MoviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {}
})

export default MoviesSlice