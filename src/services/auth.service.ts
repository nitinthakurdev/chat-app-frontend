import { api } from "@/store/api/Auth.api";


export const AuthApi = api.injectEndpoints({
    endpoints:(build)=>({
        signUp:build.mutation({
            query(body) {
                return {
                    url:"/auth/create",
                    method:"POST",
                    body
                };
            },
            invalidatesTags:["Auth"]
        })
    })
})

export const {useSignUpMutation} = AuthApi