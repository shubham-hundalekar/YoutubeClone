import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const searchSlice = createSlice({
    name: "search",
    //empty object
    initialState:{

    },
    reducers:{
        cacheResults:(state, action)=>{
            Object.assign(state, action.payload)
        } 
    }
}) 

export const {cacheResults } = searchSlice.actions;
export default searchSlice.reducer

/*
    Cache:
    Time complexity for searching in array :  O(n)
    Time complexity for searching in objects :  O(1)
       

*/

