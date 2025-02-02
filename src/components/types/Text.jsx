import styled from "styled-components";

export default function Text({data}) {
  const StyledText = styled.div`
    &>h3 {
      max-width: 100%;
      padding: 0 10px;
      text-align: justify;
    }
  `

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
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      )}
      {data.link && data.url && (
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.link}
        </a>
      )}
    </StyledText>
  );
}
