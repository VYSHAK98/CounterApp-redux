import { createSlice } from "@reduxjs/toolkit";

export const counter=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        //actions
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

//reducers
export default counter.reducer
//actions
export const {increment,decrement,reset}=counter.actions