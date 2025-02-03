import styled from "styled-components";

const StyledImage = styled.div`
  & > p {
    color: red;
  }
  & > span > p {
    text-align: center;
  }
  & > img {
    padding: 10px 0;
    max-width: 100%;
    object-fit: cover;
  }
`

export default function Image({ data }) {
  const isValidUrl = data.url && data.url.startsWith("https://");
  
  return (
    <StyledImage>
      {data.title && (
        <span>
          <p>{data.title}</p>
        </span>
      )}
      {/* нужно ли описание к картинке??? */}
      {data.description && <p>{data.description}</p>}
      {isValidUrl ? (
        <img src={data.url} alt={data.title}/>
      ) : (
        <p>Invalid or missing image URL. Please check the URL.</p>
      )}
      {/* добавим логику опциональную добавления картинки с локального устройства и места хранения */}
    </StyledImage>
  )
}
