export interface IResponse {
    _id?:string;
    email:string;
    username:string;
    profilePic:string;
}

export interface IRegisterData {
    email:string;
    username:string;
    image:File;
    password:string;
}

export interface IAuthResponse {
    message:string;
    newresult:IResponse;
    access_token:string;
    refresh_token:string;
}

export interface ILoginData {
    username:string,
    password:string
}

