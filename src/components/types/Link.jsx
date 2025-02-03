import styled from "styled-components"

const StyledLink = styled.div`
  & > p {
    color: red;
  }
  & > span {
    font-size: 1rem;
    & > a {
      text-decoration: none;
    }
  }
`

export default function Link({ data }) {
  const isValidUrl = data.url && data.url.startsWith("https://");

  return (
    <StyledLink>
      {isValidUrl ? (
        <span>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </span>
      ) : (
        <p>Invalid or missing link URL. Please check the URL.</p>
      )}
    </StyledLink>
  )
}
