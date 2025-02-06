import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
  text-align: center;

  div {
    min-width: 300px;
    width: 100%;
  }

  input,
  textarea,
  select {
    width: -webkit-fill-available;
  }
`;

export const S = {
  Form
}