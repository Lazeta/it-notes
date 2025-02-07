import styled from "styled-components";

const Categories = styled.section`
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

const ChildMap = styled.div`
  padding: 5px 0;
  margin-top: 5px;
`;

export const S = {
    Categories,
    ChildMap
}