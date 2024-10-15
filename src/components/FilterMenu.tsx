import React, { useState } from "react";
import { Data } from "../data/Data";

// Определение типа Category и Subtopic
type Category = keyof typeof Data.subject;
type Subtopic = typeof Data.subject[Category]['subtopics'][keyof typeof Data.subject[Category]['subtopics']];

interface FilterMenuProps {
  setFilter: (filter: string | null) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories = Object.keys(Data.subject) as Category[];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as Category;
    setSelectedCategory(category);
    setFilter(category);
  };

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
          <h2>Subtopics for {Data.subject[selectedCategory].title}</h2>
          <select onChange={(e) => setFilter(e.target.value || null)} 
            style={{
              width: "80%", 
              display: "flex",
              padding: "5px",
              margin: "10px auto",
              font: "caption",
            }}
          >
            <option value="">Select a subtopic</option>
            {Object.entries(Data.subject[selectedCategory].subtopics).map(([subtopicKey, subtopic]) => (
              <option key={subtopicKey} value={subtopicKey}>
                {subtopic.title} {/* Теперь TypeScript знает, что title существует */}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;