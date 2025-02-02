import styled from "styled-components";

export const StyledCategories = styled.section`
  width: 96%;
  margin: 7px auto;
  text-align: justify;
  padding: 0 10px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 8px;

  .button__title {
    cursor: pointer;
    padding: 8px 20px;
    margin-left: -10px;
    display: flex;
    flex-wrap: wrap;
  }
  .paragraph__item {
    max-width: 100%;
    padding: 0 5px;
    text-align: justify;
  }
  .text__item {
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;
  }
  .link__item {
    margin: 0;
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;
  }
  .list__item__title {
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;
  }
  .code__item__title {
    max-width: 100%;
    padding: 0 10px;
    text-align: justify;
  }
  .code__item__description {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    background-color: #f5f5f5;
    font-family: monospace;
    white-space: pre-wrap;
    overflow: auto;
    margin-bottom: 10px;
  }
  .image__item {
    margin: 0;
    max-width: 100%;
    object-fit: cover;
  }
  .video__title {
    margin: 0;
  }
  .video__item {
    margin: 0;
    height: 100%;
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`;