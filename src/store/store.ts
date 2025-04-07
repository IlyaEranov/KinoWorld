import { combineReducers, configureStore } from "@reduxjs/toolkit"
import KinoReducer from "./reducers/KinoSlice"
import KinoByTypeReducer from "./reducers/KinoByTypeSlice"

const rootReducer = combineReducers({
    KinoReducer,
    KinoByTypeReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]