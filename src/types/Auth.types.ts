export interface ISelectedUsers {
    setSelectedUser:(val:any)=>void;
    selectedUser:IAllUserResponse | null
}

export interface IChatUser {
    selectedUser:IAllUserResponse
}

export interface IAllUserResponse {
    _id:string;
    username:string;
    email:string;
    profilePic:{
        image_Url:string,
        image_id:string,
    };
}



