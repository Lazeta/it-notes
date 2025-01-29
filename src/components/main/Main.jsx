import styled from "styled-components";
import { data } from "../../data/Data";
import Categories from "../categories/Categories";

const StyledMain = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Main = () => {
  return (
    <StyledMain>
      <Categories data={data} />
    </StyledMain>
  );
};
