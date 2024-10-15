export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    subcategory?: string;
    type: 'article' | 'link' | 'video' | 'code' | 'site' | 'notes';
}