import styled from "styled-components";

const Text = styled.div`
  & > h3 {
    padding: 0 10px;
    text-align: justify;
  }
  & > p {
    padding: 0 10px;
    & > a {
      padding: 0;
    }
  }
  & > pre {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    background-color: #f5f5f5;
    font-family: monospace;
    white-space: pre-wrap;
    overflow: auto;
    margin-bottom: 10px;
  }
`

export const S = {
  Text,
}