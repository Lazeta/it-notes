import { useState } from "react";
import Categories from "./Categories";


export default function ParentComponent({ data }) {
  const [openPath, setOpenPath] = useState([]);

  const handleExpand = (itemId) => {
    const findPath = (node, targetId, path = []) => {
      if (node.id === targetId) return [...path, node.id];
      if (node.children) {
        for (const child of node.children) {
          const result = findPath(child, targetId, [...path, node.id]);
          if (result) return result;
        }
      }
      return null;
    };

    const newPath = findPath(data, itemId);

    if(newPath) {
      if (openPath.includes(itemId)) {
        // Если элемент уже открыт, закрываем его и всех его детей
        const parentPath = newPath.slice(0, newPath.indexOf(itemId));
        setOpenPath(parentPath);
      } else {
        setOpenPath(newPath);
      }
    } else {
      setOpenPath([]); // Очистка пути, если элемент не найден
    }
  }

  return (
    <Categories
      key={data.id}
      data={data}
      openPath={openPath}
      onExpand={handleExpand}
    />
  );
}
