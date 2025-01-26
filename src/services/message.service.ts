import { api } from "@/store/api/Auth.api";


 const MessageApi = api.injectEndpoints({
    endpoints:(build) => ({
        getMessages:build.mutation({
            query(id){
                return {
                    url:`/messages/get-messages/${id}`,
                    method:"GET",
                }
            },
            invalidatesTags:["Message"]
        }),
    }),
});

export const {useGetMessagesMutation} = MessageApi;