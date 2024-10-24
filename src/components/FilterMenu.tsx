import React, { useState } from "react";
import { Data } from "../data/Data";
import MaterialList from "./MaterialList"; // Импортируем новый компонент

// Определение типов
type Category = keyof typeof Data;
type SubtopicKey = keyof (typeof Data)[];

interface Item {
  title: string;
  description?: string;
  type: "link" | "text" | "image";
  url?: string;
}

export interface Subtopic {
  title: string;
  items?: Item[];
  subtopics?: Subtopic[];
}

interface FilterMenuProps {
  setFilter: (filter: string | null) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

  const categories = Object.keys(Data) as Category[];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Category;
    setSelectedCategory(category);
    setSelectedSubtopic(null); // Сброс подкатегории при изменении категории
    setFilter(category);
  };

  // const handleSubtopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const subtopic = e.target.value as SubtopicKey || null;
  //   setSelectedSubtopic(subtopic);
  //   setFilter(subtopic ? `${selectedCategory}.${subtopic}` : selectedCategory); // Устанавливаем фильтр для выбранной подкатегории
  // };
  const handleSubtopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subtopic = e.target.value;
    setSelectedSubtopic(subtopic);
    setFilter(subtopic ? `${selectedCategory}.${subtopic}` : selectedCategory); // Устанавливаем фильтр для выбранной подкатегории
  };

  // const getItems = (topic: any): Subtopic[] => {
  //   let items = topic.items || [];
  //   if (topic.subtopics) {
  //     for (const subtopic of Object.values(topic.subtopics)) {
  //       items = items.concat(getItems(subtopic));
  //     }
  //   }
  //   return items;
  // };
  const getItems = (topic: Subtopic): Item[] => {
    let items = topic.items || [];
    if (topic.subtopics) {
      for (const subtopic of topic.subtopics) {
        items = items.concat(getItems(subtopic));
      }
    }
    return items;
  };

  const materials = selectedCategory ? getItems(Data[selectedCategory]) : []; // возвращаем пустой массив, если selectedCategory равен null

  return (
    <div className="pop-up-menu">
      <h1>Select a category</h1>
      <select
        onChange={handleCategoryChange}
        style={{
          width: "80%",
          display: "flex",
          padding: "5px",
          margin: "0 auto",
          font: "caption",
        }}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {Data[category].title}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div>
          <h3>Subtopics for {Data[selectedCategory].title}</h3>
          <select
            onChange={handleSubtopicChange}
            style={{
              width: "80%",
              display: "flex",
              padding: "5px",
              margin: "10px auto",
              font: "caption",
            }}
          >
            <option value="">All</option>
            {/* {Object.entries(Data[selectedCategory].subtopics).map(([subtopicKey, subtopic]) => (
              <option key={subtopicKey} value={subtopicKey}>
                {subtopic.title}
              </option> */}
            {Data[selectedCategory].subtopics?.map((subtopic, index) => (
              <option key={index} value={index}>
                {subtopic.title}
              </option>
            ))}
          </select>
          <hr />
        </div>
      )}

      {/* Используем компонент MaterialList для отображения материалов */}
      <MaterialList materials={materials} />
    </div>
  );
};

export default FilterMenu;
