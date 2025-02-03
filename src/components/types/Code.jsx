import styled from "styled-components"

const StyledCode = styled.div`
& > h3 {
  max-width: 100%;
  padding: 0 10px;
  text-align: justify;
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

export default function Code({ data }) {
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
    <StyledCode>
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
      {data.description &&
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      }
      {data.code && (
        <pre>
          <code>{data.code}</code>
        </pre>
      )}
      {formatLink()}
    </StyledCode>
  )
}
