export interface INote{
    title?: string;
    content: string;
}

export interface INoteCreate {
    id: string;
    title?: string;
    content: string;
    createdAt: Date;
}

export interface INoteUpdate {
    title?: string;
    content?: string;
}