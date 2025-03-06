import styled from "styled-components";

const Tests = styled.div`
  margin: 0 auto;
  padding-right: 40px;
`;

const Test = styled.div`
  padding: 10px 0;

  & > ul {
    padding-bottom: 10px;
  }
`

const TestWrapper = styled.div`
  margin: 0 auto;
`;

const Details = styled.details`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`

const Summary = styled.summary`
  font-weight: bold;
  cursor: pointer;
`

export const S = {
    Tests,
    Test,
    TestWrapper,
    Details,
    Summary
}