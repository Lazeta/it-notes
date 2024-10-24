import React from "react";

const Sections = ({ categoryItems }) => {
    return (
        <div className="category-list">
            <h2>Category Items</h2>
            <ul>
                {categoryItems.map((category) => (
                    <li key={category.title}>
                        <h3>{category.title}</h3>
                        {category.items ? ( // Проверяем наличие items
                            <Sections categoryItems={category.items} /> // Рекурсивный вызов
                        ) : (
                            <>
                                {category.type === "link" && category.url ? (
                                    <a href={category.url} target="_blank" rel="noopener noreferrer">
                                        {category.description}
                                    </a>
                                ) : category.type === "image" && category.url ? (
                                    <div>
                                        <p>{category.description}</p>
                                        <img
                                            src={category.url}
                                            alt={category.title}
                                            style={{ maxWidth: "100%", height: "auto" }}
                                        />
                                    </div>
                                ) : (
                                    <p>{category.description}</p>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sections;