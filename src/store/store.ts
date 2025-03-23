import { combineReducers, configureStore } from "@reduxjs/toolkit"
import KinoReducer from "./reducers/KinoSlice"
import MoviesReducer from "./reducers/MoviesSlice"

const rootReducer = combineReducers({
    KinoReducer,
    MoviesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]