import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IKino } from "../../models/IKino";
import kinoService from "../../services/kino.service";

export interface KinoProps{
    limit?: number
    notNullField: string
}

export const getKino = createAsyncThunk<IKino, KinoProps, {rejectValue: string | null}>(
    "kino/getKino",
    async ({limit, notNullField}, {rejectWithValue}) => {
        try{
            const response = kinoService.fetchByFilter({limit, notNullField})
            return response
        } catch (e: any) {
            return rejectWithValue(`Server Error. ${e["message"]}`)
        }
    }
)

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
        })
        .addCase(getKino.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload!
        })
    }
})

export default KinoSlice.reducer