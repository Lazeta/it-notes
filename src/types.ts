export type types = {
    id: number;
    title:string;
    description: string;
    children?: types[];
    type: 'article' | 'link' | 'image' | 'video' | 'code' | 'site' | 'notes' | "paragraph" | "list" | "text";
}