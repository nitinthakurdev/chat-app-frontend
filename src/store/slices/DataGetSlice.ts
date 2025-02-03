import { createSlice } from "@reduxjs/toolkit";


interface IDataGetSlice {
    sendMessage:number
} 

const initialState:IDataGetSlice = {
    sendMessage:0
}

const DataGetSlice = createSlice({
    name:"DataGetSlice",
    initialState,
    reducers:{
        handleMessage:(state,action)=>{
            state.sendMessage += action.payload
        }
    }
})

export {DataGetSlice}

export const {handleMessage} = DataGetSlice.actions