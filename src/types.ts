export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    subcategory?: string;
    // subtopics?: string;
    type: 'article' | 'link' | 'image' | 'video' | 'code' | 'site' | 'notes';
}