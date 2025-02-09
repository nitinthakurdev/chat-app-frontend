import { IGroupResponse } from "./group.types";

export interface IImage {
    image_Url:string,
    image_id:string,
}

export interface ISelectedUsers {
    setSelectedUser:(val:IAllUserResponse | null)=>void;
    selectedUser:IAllUserResponse | null;
    setSelectGroup:(val:IGroupResponse | null)=>void;
    selectGroup:IGroupResponse | null;
}

export interface IChatUser {
    selectedUser:IAllUserResponse 
}

export interface IAllUserResponse {
    type: "user";
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
