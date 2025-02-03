import styled from "styled-components"

const StyledVideo = styled.div`
  & > p {
    color: red;
  }
  & > h3 {
    margin: 0;
  }
  & > iframe {
    height: 100%;
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`
export default function Video({ data }) {
  const isValidUrl = data.url && data.url.startsWith("https://www.youtube.com/embed/");

  return (
    <StyledVideo>
      {data.title && <h3>{data.title}</h3>}
      {data.description && <p>{data.description}</p>}
      {isValidUrl ? (
        <iframe src={data.url} title={data.title} frameBorder="0" allowFullScreen/>
      ) : (
        <p>Invalid or missing video URL. Please check the URL.</p>
      )}
      {/* добавим логику опциональную добавления видео с локального устройства и места хранения */}
    </StyledVideo>
  )
}
