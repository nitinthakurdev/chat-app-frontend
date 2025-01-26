import { api } from "@/store/api/Auth.api";


 const MessageApi = api.injectEndpoints({
    endpoints:(build) => ({
        getMessages:build.query({
            query:(id:string) => `/messages/get-messages/${id}`,
            providesTags:["Message"]
        }),
    }),
});

export const {useGetMessagesQuery} = MessageApi;