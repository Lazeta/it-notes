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
    onExpand(itemId);
  }

  const filterChildren = (children) => {
    if (!children) return [];
    return children.filter(child => {
      const matchesTitle = typeof child.title === 'string'
        && child.title.toLowerCase().includes(searchTerm.toLowerCase());
      const hasVisibleChildren = filterChildren(child.children).length > 0;
      return matchesTitle || hasVisibleChildren;
    });
  }

  // // Защитная функция если данные не пришли корректно
  // const safeChildren = (children) =>
  //   (children || []).map(child => ({
  //     ...child,
  //     title: child.title || '', // Заполняем отсутствующие заголовки
  //     children: safeChildren(child.children), // Рекурсивно обрабатываем дочерние элементы
  //   }));

  const filteredChildren = filterChildren((data.children));

  return (
    <S.Categories
      key={data.id}>
      {data.type === "image" ? (<Image data={data} />) :
        data.type === "video" ? (<Video data={data} />) :
          data.type === "text" ? (<Text data={data} />) :
            (
              <Button
                key={data.id}
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
                key={child.id}
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
