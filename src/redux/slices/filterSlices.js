import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    catId: 0,
    sort: {
        name: 'популярности',
        sort: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCatId: (state,action) => {
            state.catId = action.payload
        },
        setSort: (state,action) => {
            state.sort = action.payload
        },
    },
})


export const { setCatId, setSort } = filterSlice.actions

export default filterSlice.reducer