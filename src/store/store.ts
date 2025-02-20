import { combineReducers, configureStore } from "@reduxjs/toolkit"
import KinoReducer from "./reducers/KinoSlice"

const rootReducer = combineReducers({
    KinoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]