import { createSlice } from "@reduxjs/toolkit";


const searchedText = createSlice({
    name:"searchText",
    initialState:{
        text:""
    },
    reducers:{
        assignText:(state, action)=>{
            state.text = action.payload
        }
    }
})

export const {assignText} = searchedText.actions;
export default searchedText.reducer;