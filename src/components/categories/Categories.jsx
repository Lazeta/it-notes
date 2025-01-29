import { useState } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";

const StyledCategories = styled.section`
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
  .wrapper__childrens {
    padding: 5px 0;
    margin-top: 5px;
  }
`;

export default function Categories({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm] = useState("");

  const expand = () => {
    setIsVisible(!isVisible);
  };

  // function an filter the data based on the search term
  const filterChildren = (children) => {
    if (!children) return [];
    return children.filter((child) => {
      const matchesTitle = child.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const hasVisibleChildren = filterChildren(child.children).length > 0;
      return matchesTitle || hasVisibleChildren;
    });
  };
  const filteredChildren = filterChildren(data.children);

  return (
    <StyledCategories>
      {data.type === "paragraph" ? (
        <>
          {data.title && (
            <p className={"paragraph__item"}>
              {data.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
        </>
      ) : data.type === "text" ? (
        <>
          {data.title && (
            <h3 className={"text__item"}>
              {data.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          )}
          {data.description && (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          )}
          {data.link && data.url && (
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.link}
            </a>
          )}
        </>
      ) : data.type === "link" ? (
        <>
          {data.description && <p>{data.description}</p>}
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className={"link__item"}
          >
            {data.title}
          </a>
        </>
      ) : data.type === "image" ? (
        <img src={data.url} alt={data.title} className={"image__item"} />
      ) : data.type === "list" ? (
        <div>
          {data.title && (
            <h3 className={"list__item__title"}>
              {data.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          )}
          {data.description && (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          )}
          {data.link && data.url && (
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.link}
            </a>
          )}
        </div>
      ) : data.type === "code" ? (
        <>
          {data.title && (
            <h3 className={"code__item__title"}>
              {data.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
          )}
          {data.description && (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          )}
          <div className={"code__item__description"}>
            <pre>
              <code>{data.code}</code>
            </pre>
          </div>
          {data.link && data.url && (
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              {data.link}
            </a>
          )}
        </>
      ) : data.type === "video" ? (
        <>
          <h3 className={"video__title"}>{data.title}</h3>
          {data.description && <p>{data.description}</p>}
          <iframe
            className={"video__item"}
            src={data.url}
            title={data.title}
            frameBorder="0"
            allowFullScreen
          />
        </>
      ) : (
        <Button
          onClick={expand}
          type="button"
          title={data.title}
          className={"button__title"}
        />
      )}

      {isVisible && filteredChildren.length > 0 && (
        <div className={"wrapper__childrens"}>
          {filteredChildren.map((child, index) => (
            <div key={index}>
              <Categories data={child} />
            </div>
          ))}
        </div>
      )}
    </StyledCategories>
  );
}
