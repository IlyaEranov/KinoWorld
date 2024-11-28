import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IKino } from "../../models/IKino";
import axios from "axios";
import api from "../../api/api.json"

export interface KinoState{
    isLoading: boolean
    entities: IKino | null
    error: string | null
}

const initialState: KinoState = {
    isLoading: false,
    entities: null,
    error: null
}

const KinoSlice = createSlice({
    name: "kino",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getKino.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getKino.fulfilled, (state, action) => {
            state.isLoading = false
            state.entities = action.payload
            state.error = null
        })
        .addCase(getKino.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer

interface KinoProps{
    limit?: number
    value?: string
}

export const getKino = createAsyncThunk<IKino, KinoProps, {rejectValue: string | null}>(
    "kino/getKino",
    async ({limit, value}, {rejectWithValue}) => {
        console.log(`${api.endPointKinoPoisk}/movie?limit=${limit}&notNullFields=${value}`)
        try{
            const response = await axios.get(`${api.endPointKinoPoisk}/movie?limit=${limit}&notNullFields=${value}`, {
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