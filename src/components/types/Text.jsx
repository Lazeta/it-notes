import { S } from "./Text.styles";

export default function Text({ data }) {
  function formatLink() {
    if (!data.link && !data.url) {
      return null
    } else {
      if (data.link && data.url) {
        const isValidUrl = data.link && data.url && data.url.startsWith("https://");
        if (!isValidUrl) {
          return <p style={{ color: "red" }}>Invalid or missing link URL. Please check the URL.</p>
        } else {
          return (
            <p>
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {data.link}
              </a>
            </p>
          )
        }
      }
    }
  }

  return (
    <S.Text>
      {data.title && (
        <h3>
          {data.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h3>
      )}
      {data.description && (
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      )}
      {data.code && (
        <pre>
          <code>{data.code}</code>
        </pre>
      )}
      {formatLink()}
    </S.Text>
  );
}
