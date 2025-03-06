import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Details = styled.details`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  
  & [open] > summary {
    color: blue;
  }
`

const Summary = styled.summary`
  font-weight: bold;
  cursor: pointer;
`

export const S = {
    Main,
    Details,
    Summary,
}