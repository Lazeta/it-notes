import Button from "../buttons/Button";
import { StyledCategories } from "../../styles/components/categories/categories.styled";
import FilterTopics from "./filters/FilterTopics";


export default function Categories({ data, onExpand}) {
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
          onClick={onExpand}
          type="button"
          title={data.title}
          className={"button__title"}
        />
      )}

      <FilterTopics data={data}/>
    </StyledCategories>
  );
}
