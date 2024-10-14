import React from "react";

interface FilterMenuProps {
  setFilter: (filter: string | null) => void;
}

const categories = ["React", "Vue", "Angular", "Node.js"];

const FilterMenu: React.FC<FilterMenuProps> = ({ setFilter }) => {
  return (
    <div>
      <h2>Filter by Category</h2>
      <select onChange={(e) => setFilter(e.target.value || null)}>
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterMenu;
