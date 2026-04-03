import { configureStore } from "@reduxjs/toolkit";
import appSlice from"./appSlice"
import searchSlice from './searchSlice'
import searchedText from './searchedText'

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        searchedText: searchedText, 
    }
})

export default store;