export default function Video() {
  <>
    <h3 style={{ margin: "0" }}>{data.title}</h3>
    {data.description && <p>{data.description}</p>}
    <iframe
      src={data.url}
      title={data.title}
      frameBorder="0"
      allowFullScreen
      style={{
        margin: "0",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "500px",
        objectFit: "cover",
      }}
    />
  </>;
}
