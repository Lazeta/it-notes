import React, { useState } from 'react';
import s from "./Data.module.css";

export type Item = {
    title: string;
    description?: string;
    type?: "link" | "image" | "text";
    url?: string;
};

export type SubtopicType = {
    title: string;
    description?: string;
    items: Item[];
    subtopics?: SubtopicType[];
};

export const Data: SubtopicType[] = [
    // Ваши данные
    {
        title: "JavaScript",
        items: [],
        subtopics: [
            {
                title: "Drag and Drop",
                items: [
                    {
                        title: "mouse drag and drop",
                        type: "link",
                        url: "https://learn.javascript.ru/mouse-drag-and-drop",
                        description: "https://learn.javascript.ru/mouse-drag-and-drop"
                    }
                ],
                subtopics: [] // здесь могут быть подкатегории
            },
            {
                title: "Methods",
                subtopics: [
                    {
                        title: "Arrays",
                        description: "Array methods and functions.",
                        items: [
                            {
                                title: "pop()",
                                type: "text",
                                description: "Removes the last element from an array."
                            },
                            // Другие элементы
                        ],
                        subtopics: [] // Здесь могут быть подкатегории
                    },
                ],
                items: []
            },
        ],
    },
    // Другие разделы
];

const FilterMenu: React.FC = () => {
    const [selectedSubtopic, setSelectedSubtopic] = useState<SubtopicType | null>(null);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleSubtopicChange = (subtopic: SubtopicType) => {
        setSelectedSubtopic(subtopic);
        setSelectedItem(null); // Сброс выбранного элемента при смене подкатегории
    };

    const handleItemSelect = (item: Item) => {
        setSelectedItem(item);
    };

    return (
        <div className={s.subtopic}>
            <h1>Выберите раздел</h1>
            {Data.map((subtopic) => (
                <div key={subtopic.title}>
                    <div onClick={() => handleSubtopicChange(subtopic)}>{subtopic.title}</div>
                    {selectedSubtopic && selectedSubtopic.title === subtopic.title && (
                        <div>
                            {subtopic.subtopics?.map((sub) => (
                                <div key={sub.title}>
                                    <h3>{sub.title}</h3>
                                    {sub.items.map((item) => (
                                        <div key={item.title} onClick={() => handleItemSelect(item)}>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            {selectedItem && (
                <div>
                    <h2>Выбранный элемент:</h2>
                    <p>{selectedItem.title}</p>
                    {selectedItem.description && <p>{selectedItem.description}</p>}
                    {selectedItem.type === "link" && selectedItem.url && (
                        <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">Ссылка</a>
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterMenu;