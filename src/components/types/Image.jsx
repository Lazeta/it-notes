export default function Image() {
  <>
    <img
      src={data.url}
      alt={data.title}
      style={{
        margin: "0",
        maxWidth: "100%",
        objectFit: "cover",
      }}
    />
  </>;
}
