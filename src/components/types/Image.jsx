import { S } from "./Image.styles";

export default function Image({ data }) {
  const isValidUrl = data.url && data.url.startsWith("https://");
  
  return (
    <S.Image>
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
    </S.Image>
  )
}
