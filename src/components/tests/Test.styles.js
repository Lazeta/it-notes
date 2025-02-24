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

export const S = {
    Tests,
    Test,
    TestWrapper,
}