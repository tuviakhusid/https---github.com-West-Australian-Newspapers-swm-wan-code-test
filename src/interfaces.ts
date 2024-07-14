export enum articleType{
    Main,
    Secondary
}
export interface IInputBase {
    author?: string;
    header: string;
    id: string;
    image?: string;
    type: articleType;
    content?: string;
    width?: string;   
};
