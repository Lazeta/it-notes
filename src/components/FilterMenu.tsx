import React, { useState } from "react";
import { Data } from "../data/Data";
import MaterialList from "../data/MaterialList"; // Импортируем новый компонент

// Определение типов
type Category = keyof typeof Data.subject;
type SubtopicKey = keyof typeof Data.subject[Category]["subtopics"];

// Определяем структуру подкатегории
interface Subtopic {
  title: string;
  description: string;
  materials: Material[]; // Убедитесь, что у подкатегории есть массив материалов
}
export interface Material {
  title: string;
  description: string;
  type: "link" | "text";
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

  // Получаем материалы в зависимости от выбранной категории и подкатегории
  const getMaterials = (): Material[] => {
    if (selectedCategory && selectedSubtopic) {
      const subtopic = Data.subject[selectedCategory].subtopics[selectedSubtopic] as Subtopic;
      return subtopic?.materials || [];
    }
    if (selectedCategory) {
      return Object.values(Data.subject[selectedCategory].subtopics)
        .flatMap(subtopic => (subtopic as Subtopic).materials || []);
    }
    return [];
  };

  const materials = getMaterials();

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
          <select onChange={handleSubtopicChange}
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