import {configureStore} from "@reduxjs/toolkit";
// local imports
import LogedInUserSlice from "@store/slices/LogedinUser";
import { api } from "@store/api/Auth.api";

export const store = configureStore({
    devTools:true,
    reducer:{
        [api.reducerPath]:api.reducer,
        [LogedInUserSlice.name]:LogedInUserSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})