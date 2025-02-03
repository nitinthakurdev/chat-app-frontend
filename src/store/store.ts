import {configureStore} from "@reduxjs/toolkit";
// local imports
import LogedInUserSlice from "@store/slices/LogedinUser";
import { api } from "@store/api/Auth.api";
import { DataGetSlice } from "./slices/DataGetSlice";

export const store = configureStore({
    devTools:true,
    reducer:{
        [api.reducerPath]:api.reducer,
        [LogedInUserSlice.name]:LogedInUserSlice.reducer,
        [DataGetSlice.name] : DataGetSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;