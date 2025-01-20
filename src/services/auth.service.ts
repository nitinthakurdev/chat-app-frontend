import { api } from "@/store/api/Auth.api";
import { IAuthResponse, ILoginData, IRegisterData } from "@/types/Auth.types";


export const AuthApi = api.injectEndpoints({
    endpoints:(build)=>({
        signUp:build.mutation<IAuthResponse,IRegisterData>({
            query(body) {
                return {
                    url:"/auth/create",
                    method:"POST",
                    body
                };
            },
            invalidatesTags:["Auth"]
        }),
        signIn:build.mutation<IAuthResponse,ILoginData>({
            query(body) {
                return {
                    url:"/auth/login",
                    method:"POST",
                    body
                }
            },
            invalidatesTags:["Auth"]
        })
    })
});

export const {useSignUpMutation,useSignInMutation} = AuthApi;