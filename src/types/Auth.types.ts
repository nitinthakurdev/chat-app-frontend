export interface IImage {
    image_Url:string,
    image_id:string,
}

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
    profilePic:IImage;
}

export interface IMessageResponse {
    _id:string;
    createdAt:Date;
    image?:IImage | null;
    receiver_id:string;
    sender_id:string;
    text?:string | null;
}
