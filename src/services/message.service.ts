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
        sendMessage:build.mutation({
            query({id,body}) {
                return {
                    url:`/messages/send-messages/${id}`,
                    method:"POST",
                    body
                }
            },
            invalidatesTags:["Message"]
        })
    }),
});

export const {useGetMessagesMutation,useSendMessageMutation} = MessageApi;