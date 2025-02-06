import styled from "styled-components";

const Image = styled.div`
  & > p {
    color: red;
  }
  & > span > p {
    text-align: center;
  }
  & > img {
    padding: 10px 0;
    max-width: 100%;
    object-fit: cover;
  }
`

export const S = {
  Image,
}