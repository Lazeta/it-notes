import styled from "styled-components";

const StyledLine = styled.div`
  margin-top: 30px;
  margin-bottom: 0;
  width: 100%;
`;

export const Line = () => {
  return (
    <StyledLine>
      <hr />
      <br />
    </StyledLine>
  );
};
