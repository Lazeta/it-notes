import { useState } from "react";
import styled from "styled-components";
import Categories from "../Categories";

const StyledContainer = styled.div`
  padding: 5px 0;
  margin-top: 5px;
`;

export default function FilterTopics({ data }) {
  const [visibleItems, setVisibleItems] = useState({});

  const toggleVisibility = (title) => {
    setVisibleItems(prevState => ({
      ...prevState,
      [title]: !prevState[title]
    }));
  };

  const renderChildren = (children) => {
    if (!children) return null;
    return children.map((child, index) => (
      <StyledContainer key={index}>
        <Categories
          data={child}
          onExpand={() => toggleVisibility(child.title)}
          isVisible={visibleItems[child.title]}
        />
        {visibleItems[child.title] && renderChildren(child.children)}
      </StyledContainer>
    ));
  };

  return (
    <>
      {renderChildren(data.children)}
    </>
  );
}