import React from "react";
import { Material } from "../components/FilterMenu";

interface MaterialListProps {
    materials: Material[]; // Массив материалов для отображения
}

const MaterialList: React.FC<MaterialListProps> = ({ materials }) => {
    return (
        <div className="material-list">
            <h2>Materials</h2>
            {materials.length === 0 ? (
                <p>No materials found.</p>
            ) : (
                <ul>
                    {materials.map((material, index) => (
                        <li key={index}>
                            <h3>{material.title}</h3>
                            {material.type === "link" && material.url ? (
                                <a href={material.url} target="_blank" rel="noopener noreferrer">
                                    {material.description}
                                </a>  
                            ) : (
                                <p>{material.description}</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MaterialList;