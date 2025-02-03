import styled from "styled-components";

const StyledText = styled.div`
  & > h3 {
    padding: 0 10px;
    text-align: justify;
  }
  & > p {
    padding: 0 10px;
    color: red;
    font-size: 1.05rem;
    & > a {
      padding: 0;
    }
  }
`

export default function Text({data}) {
  function formatLink() {
    if (!data.link && !data.url) {
      return null
    } else {
      if (data.link && data.url) {
        const isValidUrl = data.link && data.url && data.url.startsWith("https://");
        if (!isValidUrl) {
          return <p>Invalid or missing link URL. Please check the URL.</p>
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
    <StyledText>
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
      {formatLink()}
    </StyledText>
  );
}
