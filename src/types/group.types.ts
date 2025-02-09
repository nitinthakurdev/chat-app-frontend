import { IImage } from "./Auth.types";

export interface IGroupResponse {
  type: "group";
  _id: string;
  name: string;
  admin: string;
  users: string[];
  Image: IImage;
}

export interface IGroupChatProp {
  selectedGroup: IGroupResponse;
}

export interface IGroupHeaderProp {
  selectedGroup: IGroupResponse;
}