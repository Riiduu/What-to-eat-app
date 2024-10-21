import { createSlice } from '@reduxjs/toolkit'

export const searchInfoSlice = createSlice({
    name: 'searchInfo',
    initialState: {
        value: {

        }
    },
    reducers: {
        updateInfo: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateInfo } = searchInfoSlice.actions

export default searchInfoSlice.reducer