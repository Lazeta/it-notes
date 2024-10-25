import { useState } from "react";
import { Data } from "../data/Data";
import Sections from "./Sections";


const FilterMenu = ({ setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  const categories = Data.map(item => item.title); // Assuming Data is an array

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubtopic(null); // Сброс подкатегории при изменении категории
    setFilter(category);
  };

  const handleSubtopicChange = (e) => {
    const subtopic = e.target.value;
    setSelectedSubtopic(subtopic);
    setSelectedCategory(subtopic ? `${selectedCategory}.${subtopic}` : selectedCategory); // Устанавливаем фильтр для выбранной подкатегории
  };

  const getItems = (topic) => {
    if (!topic) return []; // Check if topic exists
    let items = topic.items || [];
    topic.subtopics?.forEach(subtopic => {
      items = items.concat(getItems(subtopic));
    })
    // if (topic.subtopics) {
    //   for (const subtopic of Object.values(topic.subtopics)) {
    //     items = items.concat(getItems(subtopic));
    //   }
    // }
    return items;
  };

  const categoryData = selectedCategory ? Data.find(category => category.title === selectedCategory) : null;
  const categoryItems = categoryData ? getItems(categoryData) : []; // Return empty array if no category is selected


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
        {categories.map((categoryTitle) => (
          <option key={categoryTitle} value={categoryTitle}>
            {categoryTitle}
          </option>
        ))}
      </select>

      {selectedCategory && categoryData && (
        <div>
          <h3>Subtopics for {categoryData.title}</h3>
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
            {Object.entries(categoryData.subtopics || {}).map(([subtopicKey, subtopic]) => (
              <option key={subtopicKey} value={subtopicKey}>
                {subtopic.title}
              </option>
            ))}
          </select>
          <hr />
        </div>
      )}

      {/* Используем компонент Sections для отображения материалов */}
      <Sections categoryItems={categoryItems} />
    </div>
  );
};

export default FilterMenu;
