export type types = {
    id: number;
    title:string;
    description: string;
    children?: types[];
    type: 'article' | 'image' | 'video' | 'code' | "text";
}