import { User } from "../../entities/user.entity";

export interface INote{
    title?: string;
    content: string;
    user?: string;
}

export interface INoteCreate {
    id: string;
    title?: string;
    content: string;
    createdAt: Date;
    user: User;
}

export interface INoteUpdate {
    title?: string;
    content?: string;
}

