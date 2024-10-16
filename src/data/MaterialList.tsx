import React from "react";

interface Material {
    title: string;
    description: string;
}

interface MaterialListProps {
    materials: Material[]; // Массив материалов для отображения
}

const MaterialList: React.FC<MaterialListProps> = ({ materials }) => {
    return (
        <div className="material-list">
            <h2>Material</h2>
            {materials.length === 0 ? (
                <p>No materials found.</p>
            ) : (
                <ul>
                    {materials.map((material, index) => (
                        <li key={index}>
                            <h3>{material.title}</h3>
                            <p>{material.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MaterialList;