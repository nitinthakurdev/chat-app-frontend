import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// local imports
import { ILogedinUserSlice } from "@/types/redux.type";

const initialState:ILogedinUserSlice = {
    email:null,
    username:null,
    profilePic:null,
    userTheme:localStorage.getItem("usert")
}

const LogedInUserSlice = createSlice({
    name:"logedInUser",
    initialState,
    reducers:{
        setdata : (state,action:PayloadAction<ILogedinUserSlice>)=> {
            state.email = action.payload.email;
            state.profilePic = action.payload.profilePic;
            state.username = action.payload.username
        },
        setTheme : (state,action:PayloadAction<string>) => {
            localStorage.setItem("usert",action.payload)
            state.userTheme = action.payload
        },
        logout : (state)=>{
            state.email = null;
            state.profilePic = null;
            state.username = null;
        }
    },
});

export const  {setdata,logout,setTheme} = LogedInUserSlice.actions

export default LogedInUserSlice;
