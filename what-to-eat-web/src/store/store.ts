import { configureStore } from '@reduxjs/toolkit'
import searchInfoReducer from './searchInfoSlice'

export default configureStore({
    reducer: {
        searchInfo: searchInfoReducer
    },
})