import React from "react";
import { categories, Data, Category } from "../data/Data";

interface FilterMenuProps {
  setFilter: (filter: string | null) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ setFilter }) => {

  return (
    <div className="pop-up-menu">
      <h1>Select a category</h1>
      <select onChange={(e) => setFilter(e.target.value || null)}
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
            {Data.subject[category as Category].title} {/* Приведение типа для корректного доступа */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterMenu;
