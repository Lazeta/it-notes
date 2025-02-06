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
      setOpenPath(newPath);
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
