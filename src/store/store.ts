import {configureStore} from "@reduxjs/toolkit";
import LogedInUserSlice from "@/store/slices/LogedinUser";

export const store = configureStore({
    reducer:{
        [LogedInUserSlice.name]:LogedInUserSlice.reducer
    }
})