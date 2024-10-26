export type types = {
    id: number;
    title:string;
    content: string;
    category: string;
    subtopics: string;
    type: 'article' | 'link' | 'image' | 'video' | 'code' | 'site' | 'notes';
}