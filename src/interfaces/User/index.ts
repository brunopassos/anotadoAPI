import { User } from "../../entities/user.entity";

export interface IUser {
    email: string;
    password: string;
}

export interface IUserCreate {
    id: string;
    email: string;
    password: string;
}

export interface IUserNotes{
    id: string;
    title?: string;
    content: string;
    createdAt: Date;
    user: User;
}