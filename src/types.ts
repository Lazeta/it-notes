import { Data } from "./data/Data";

export interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    subcategory?: string;
    subtopics?: string;
    type: 'article' | 'link' | 'video' | 'code' | 'site' | 'notes';
}

// export interface FilterMenuProps {
//     setFilter: (filter: string | null) => void;
// }

// export type Category = keyof typeof Data.subject;