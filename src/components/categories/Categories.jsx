import { useState } from "react";
import { StyledCategories } from "../../styles/components/categories/categories.styled";
import Button from "../buttons/Button";
import styled from "styled-components";
import Text from "../types/Text";
import Link from "../types/Link";
import Image from "../types/Image";
import List from "../types/List";
import Code from "../types/Code";
import Video from "../types/Video";

const StyledChildItems = styled.div`
  padding: 5px 0;
  margin-top: 5px;
`;

export default function Categories({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm] = useState('');

  const expand = () => {
    setIsVisible(!isVisible);
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
    <StyledCategories>
      {data.type === "text" ? (<Text data={data} />) : 
      data.type === "link" ? (<Link data={data} />) : 
      data.type === "image" ? (<Image data={data} />) : 
      data.type === "list" ? (<List data={data} />) : 
      data.type === "code" ? (<Code data={data} />) : 
      data.type === "video" ? (<Video data={data} />) : 
      (
        <Button
          onClick={expand}
          type="button"
          title={data.title}
          className={"button__title"}
        />
      )}

      {isVisible && filteredChildren.length > 0 && (
        <StyledChildItems>
          {filteredChildren.map((child, index) => (
            <div key={index} >
              <Categories data={child} />
            </div>
          ))}
        </StyledChildItems>
      )}
    </StyledCategories>
  );
}
