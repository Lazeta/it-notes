import { useState } from "react";
import { Data } from "../data/Data";
import Sections from "./Sections";


const FilterMenu = ({ setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const categories = Data.map(item => item.title); // Assuming Data is an array

  const categoryData = selectedCategory ? Data.find(category => category.title === selectedCategory) : null;

  // recursive function, stop if topic is null
  const getItems = (topic) => {
    if (!topic) return []; // Check if topic exists
    let items = topic.items || [];

    // recursively get items from subtopics
    topic.subtopics?.forEach(subtopic => {
      items = items.concat(getItems(subtopic)); // concatenate items from subtopics
    })
    return items;
  };

  const categoryItems = selectedSubtopic
    ? getItems(categoryData?.subtopics?.find(subtopic => subtopic.title === selectedSubtopic))
    : categoryData ? getItems(categoryData) : [];

  /** Handles the change of category selection. 
   * @param {Object} e - The event object from the category selection. */
  const handleCategoryChange = (e) => {
    const category = e.target.value; // Get the selected category value
    setFilter(category); // Update the filter with the selected category
    setSelectedCategory(category); // Set the selected category
    setSelectedSubtopic(null); // Reset subtopic when category changes
  };


  /** Handles the change of subtopic selection. 
    * @param {Object} e - The event object from the subtopic selection. */
  const handleSubtopicChange = (e) => {
    const subtopic = e.target.value;
    setSelectedSubtopic(subtopic);
    // Set the filter for the selected subtopic
    // If subtopic is selected, set the filter to "category.subtopic"
    // otherwise, set the filter to the selected category
    setFilter(subtopic ? `${selectedCategory}.${subtopic}` : selectedCategory);
  };


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
          <h2 style={{ margin: "10px", textAlign: "center" }}>
            Subtopics for {categoryData.title}
          </h2>
          <select onChange={handleSubtopicChange}
            style={{
              width: "80%",
              display: "flex",
              padding: "5px",
              margin: "10px auto",
              font: "caption",
            }}>
            <option value="">All</option>
            {categoryData.subtopics?.map((subtopic) => (
              <option key={subtopic.title} value={subtopic.title}>
                {subtopic.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Используем компонент Sections для отображения материалов */}
      <Sections categoryItems={categoryItems} />
    </div>
  );
};

export default FilterMenu;