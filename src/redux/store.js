import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from './slices/filterSlices'

export const store = configureStore({
    reducer: {
        filter: FilterReducer,
    },
})