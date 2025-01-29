import { useState } from "react";
import Button from "../buttons/Button";
import "./Categories.module.css";

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
    <section className={"topic"} 
      // style={{
      //   width: "96%",
      //   margin: "7px auto",
      //   textAlign: "justify",
      //   padding: "0 10px",
      //   backgroundColor: "#f5f5f5",
      //   border: "2px solid gray",
      //   borderRadius: '8px',
      // }}
    >
      {data.type === "paragraph" ? (
        <>
          {data.title && (
            <p className={"paragraph__item"}
              // style={{
              //   maxWidth: "100%",
              //   padding: "0 5px",
              //   textAlign: "justify",
              // }}
            >
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
            <h3 className={"text__item"}
              // style={{
              //   maxWidth: "100%",
              //   padding: "0 10px",
              //   textAlign: "justify",
              // }}
            >
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
          <a href={data.url} target="_blank" rel="noopener noreferrer" className={"link__item"}
            // style={{
            //   margin: "0",
            //   maxWidth: "100%",
            //   padding: "0 10px",
            //   textAlign: "justify",
            // }}
          >
            {data.title}
          </a>
        </>
      ) : data.type === "image" ? ( <img src={data.url} alt={data.title} className={"image__item"}
          // style={{
          //   margin: "0",
          //   maxWidth: "100%",
          //   objectFit: "cover",
          // }}
        />
      ) : data.type === "list" ? (
        <div>
          {data.title && (
            <h3 className={"list__item__title"}
              // style={{
              //   maxWidth: "100%",
              //   padding: "0 10px",
              //   textAlign: "justify",
              // }}
            >
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
            <h3 className={"code__item__title"}
              // style={{
              //   maxWidth: "100%",
              //   padding: "0 10px",
              //   textAlign: "justify",
              // }}
            >
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
          <div className={"code__item__description"}
            // style={{
            //   border: "1px solid #ccc",
            //   borderRadius: "4px",
            //   padding: "5px",
            //   backgroundColor: "#f5f5f5",
            //   fontFamily: "monospace",
            //   whiteSpace: "pre-wrap",
            //   overflow: "auto",
            //   marginBottom: "10px",
            // }}
          >
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
          <h3 className={"video__title"}
            // style={{ margin: "0" }}
          >{data.title}</h3>
          {data.description && <p>{data.description}</p>}
          <iframe className={"video__item"}
            src={data.url}
            title={data.title}
            frameBorder="0"
            allowFullScreen
            // style={{
            //   margin: "0",
            //   height: "100%",
            //   maxWidth: "100%",
            //   maxHeight: "500px",
            //   objectFit: "cover",
            // }}
          />
        </>
      ) : ( <Button onClick={expand} type="button" title={data.title} className={"button__title"}
          // style={{
          //   cursor: "pointer",
          //   padding: "8px 20px",
          //   marginLeft: "-10px",
          //   display: "flex",
          //   flexWrap: "wrap",
          // }}
        />
      )}

      {isVisible && filteredChildren.length > 0 && (
        <div className={"wrapper__childrens"}
          // style={{
          //   padding: "5px 0",
          //   marginTop: "5px",
          // }}
        >
          {filteredChildren.map((child, index) => (
            <div key={index}>
              <Categories data={child} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
