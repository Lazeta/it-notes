import { useState } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";
import Text from "../types/Text";
import Image from "../types/Image";
import Video from "../types/Video";

const StyledCategories = styled.section`
  width: 96%;
  margin: 7px auto;
  text-align: justify;
  padding: 0 10px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 8px;
  Button {
    cursor: pointer;
    padding: 8px 20px;
    margin-left: -10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledChildMap = styled.div`
  padding: 5px 0;
  margin-top: 5px;
`;

export default function Categories({ data }) {
  const [visibleItemId, setVisibleItemId] = useState(null);
  const [searchTerm] = useState('');

  const expand = (itemId) => {
    setVisibleItemId(visibleItemId === itemId ? null : itemId);
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
    <StyledCategories key={data.id}>
      {data.type === "image" ? (<Image data={data} />) : 
      data.type === "video" ? (<Video data={data} />) : 
      data.type === "text" ? (<Text data={data} />) : 
      (
        <Button
          onClick={() => expand(data.id)}
          type="button"
          title={data.title}
        />
      )}

      {visibleItemId === data.id && filteredChildren.length > 0 && (
        <StyledChildMap>
          {filteredChildren.map((child) => (
            <div key={child.id}>
              <Categories data={child} />
            </div>
          ))}
        </StyledChildMap>
      )}
    </StyledCategories>
  );
}
