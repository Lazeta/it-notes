import { S } from "./Categories.styles";
import { useState } from "react";
import Button from "../buttons/Button";
import Text from "../types/Text";
import Image from "../types/Image";
import Video from "../types/Video";

export default function Categories({ data, openPath, onExpand }) {
  const [searchTerm] = useState('');

  const isOpen = openPath.includes(data.id);

  const expand = (itemId) => {
    if (openPath.includes(itemId)) {
      const newPath = openPath.filter((id) => id !== itemId);
      onExpand(newPath[newPath.length - 1]);
    }
    else {
      onExpand(itemId);
    }
  }

  const filterChildren = (children) => {
    if (!children) return [];
    return children.filter(child => {
      const matchesTitle = child.title.toLowerCase().includes(searchTerm.toLowerCase());
      const hasVisibleChildren = filterChildren(child.children).length > 0;
      return matchesTitle || hasVisibleChildren;
    });
  }
  const filteredChildren = filterChildren(data.children);

  return (
    <S.Categories 
      key={data.title}>
      {data.type === "image" ? (<Image data={data} />) : 
      data.type === "video" ? (<Video data={data} />) : 
      data.type === "text" ? (<Text data={data} />) : 
      (
        <Button
          key={data.title}
          onClick={() => expand(data.id)}
          type="button"
          title={data.title}
        />
      )}

      {isOpen && filteredChildren.length > 0 && (
        <S.ChildMap>
          {filteredChildren.map((child) => (
            <div key={child.id}>
              <Categories
                key={child.title}
                data={child} 
                openPath={openPath}
                onExpand={(itemId) => onExpand(itemId)}
              />
            </div>
          ))}
        </S.ChildMap>
      )}
    </S.Categories>
  );
}
