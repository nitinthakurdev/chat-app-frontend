import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const BASE_ENDPPOINT = import.meta.env.VITE_BASE_ENDPOINT;

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_ENDPPOINT}/api/v1`,
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        return headers;
    },
    credentials: 'include'
})

export const api = createApi({
    reducerPath:"api",
    baseQuery,
    tagTypes:["Auth","Message"],
    endpoints:()=>({})
})