import styled from "styled-components"

export default function Link({ data }) {
  const StyledLink = styled.div`
    &>a {
      text-decoration: none;
      padding: 0 10px;
      text-align: justify;
    }
  `

  return (
    <StyledLink>
      {data.url && (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.title}
        </a>
      )}
    </StyledLink>
  )
}
