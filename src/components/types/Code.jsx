export default function Code() {
  <>
    {data.title && (
      <h3
        style={{
          maxWidth: "100%",
          padding: "0 10px",
          textAlign: "justify",
        }}
      >
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
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "5px",
        backgroundColor: "#f5f5f5",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        overflow: "auto",
        marginBottom: "10px",
      }}
    >
      <pre>
        <code>{data.code}</code>
      </pre>
    </div>
    {data.link && data.url && (
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        {data.link}
      </a>
    )}
  </>;
}
