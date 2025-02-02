import styled from "styled-components";

export default function Paragraph({ data }) {
  const StyledParagraph = styled.p`
    max-width: 100%;
    padding: 0 5px;
    text-align: justify;
  `

  return (
    <>
      {data.title && (
        <StyledParagraph>
          {data.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </StyledParagraph>
      )}
    </>
  );
}