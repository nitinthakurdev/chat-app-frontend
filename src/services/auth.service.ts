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
        }),
        signIn:build.mutation({
            query(body) {
                return {
                    url:"/auth/login",
                    method:"POST",
                    body
                }
            },
            invalidatesTags:["Auth"]
        }),
        getLogedInUser:build.query({
            query:()=>"/auth/login-user",
            providesTags:["Auth"]
        }),
        logoutUser:build.mutation({
            query(){
                return {
                    url:"/auth/logout",
                    method:"POST"
                }
            },
            invalidatesTags:["Auth"]
        }),
        updateProfile:build.mutation({
            query(body){
                return {
                    url:"auth/update-profile",
                    method:"PATCH",
                    body
                }
            }
        })
    })
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useGetLogedInUserQuery,
    useLogoutUserMutation,
    useUpdateProfileMutation
} = AuthApi;