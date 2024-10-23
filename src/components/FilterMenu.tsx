import React, { useState } from "react";
import { Data } from "../data/Data";
import MaterialList from "../data/MaterialList"; // Импортируем новый компонент

// Определение типов
type Category = keyof typeof Data.subject;
type SubtopicKey = keyof typeof Data.subject[Category]["subtopics"];

export interface Material {
  items: any;
  title: string;
  description: string;
  type: "link" | "text" | "image";
  url?: string;
}

interface FilterMenuProps {
  setFilter: (filter: string | null) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<SubtopicKey | null>(null);

  const categories = Object.keys(Data.subject) as Category[];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Category;
    setSelectedCategory(category);
    setFilter(category);
    setSelectedSubtopic(null); // Сброс подкатегории при изменении категории
  };

  const handleSubtopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subtopic = e.target.value as SubtopicKey || null;
    setSelectedSubtopic(subtopic);
    setFilter(subtopic); // Устанавливаем фильтр для выбранной подкатегории
  };

  const getItems = (topic: any): Material[] => {
    let items = topic.items || [];
    if (topic.subtopics) {
      for (const subtopic of Object.values(topic.subtopics)) {
        items = items.concat(getItems(subtopic))
      }
    }
    return items;
  };

  const materials = selectedCategory 
    ? getItems(Data.subject[selectedCategory])
    : []; // возвращаем пустой массив, если selectedCategory равен null

  return (
    <div className="pop-up-menu">
      <h1>Select a category</h1>
      <select onChange={handleCategoryChange}
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
            {Data.subject[category].title}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div>
          <h3>Subtopics for {Data.subject[selectedCategory].title}</h3>
          <select className={'s'} onChange={handleSubtopicChange}
              style={{
              width: "80%", 
              display: "flex",
              padding: "5px",
              margin: "10px auto",
              font: "caption",
            }}
          >
            <option value="">All</option>
            {Object.entries(Data.subject[selectedCategory].subtopics).map(([subtopicKey, subtopic]) => (
              <option key={subtopicKey} value={subtopicKey}>
                {subtopic.title}
              </option>
            ))}
          </select>
          <hr></hr>
        </div>
      )}

      {/* Используем компонент MaterialList для отображения материалов */}
      <MaterialList materials={materials} />
    </div>
  );
};

export default FilterMenu;