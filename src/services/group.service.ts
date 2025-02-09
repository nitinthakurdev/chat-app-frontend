import { api } from "@/store/api/Auth.api";

const groupApi = api.injectEndpoints({
    endpoints: (build) => ({
        createGroup: build.mutation({
            query(body) {
                return {
                    url: "/group/create",
                    method: "POST",
                    body
                }
            },
            invalidatesTags:["Group"]
        }),
        getGroups:build.query({
            query:()=>"/group/get",
            providesTags:["Group"]
        })
    })
})

export const { useCreateGroupMutation,useGetGroupsQuery } = groupApi;