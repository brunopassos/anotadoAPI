export interface INote{
    title?: string;
    content: string;
}

export interface INoteCreate {
    title?: string;
    content: string;
    createdAt: Date;
}