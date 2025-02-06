import { S } from "./Video.styles";

export default function Video({ data }) {
  const isValidUrl = data.url && data.url.startsWith("https://www.youtube.com/embed");

  return (
    <S.Video>
      {data.title && <h3>{data.title}</h3>}
      {data.description && <p>{data.description}</p>}
      {isValidUrl ? (
        <iframe src={data.url} title={data.title} frameBorder="0" allowFullScreen/>
      ) : (
        <p style={{ color: "red" }}>Invalid or missing video URL. Please check the URL.</p>
      )}
      {/* добавим логику опциональную добавления видео загружаемого с локального устройства */}
    </S.Video>
  )
}
