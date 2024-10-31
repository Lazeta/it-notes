import React, { useState } from 'react';

export default function Categories({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const expand = () => {
    setIsVisible(!isVisible);
  }

  // function an filter the data based on the search term
  const filterChildren = (children) => {
    if (!children) return [];
    return children.filter(child => {
      const matchesTitle = child.title.toLowerCase().includes(searchTerm.toLowerCase());
      const hasVisibleChildren = filterChildren(child.children).length > 0;
      return matchesTitle || hasVisibleChildren;
    });
  }

  const filteredChildren = filterChildren(data.children);


  return (
    <div
      style={{
        padding: '10px 10px',
        border: '2px solid gray',
        width: '102%',
        margin: '0 auto',
        textAlign: 'justify',
        backgroundColor: '#f5f5f5',
      }}>
      {data.type === "text" ? (
        <p
          style={{
            margin: '0',
            maxWidth: '100%',
            padding: '0 10px',
            textAlign: 'justify',
          }}>{data.title}</p>
      ) : data.type === "link" ? (
        <a href={data.url} target="_blank" rel="noopener noreferrer"
          style={{
            margin: '0',
            maxWidth: '100%',
            padding: '0 10px',
            textAlign: 'justify',
          }}>{data.title}</a>
      ) : data.type === "image" ? (
        <img src={data.url} alt={data.title}
          style={{
            margin: '0',
            maxWidth: '100%',
            objectFit: 'cover',
          }} />
      ) : data.type === "video" ? (
        <iframe 
          src={data.url} 
          title={data.title}
          frameBorder="0"
          allowFullScreen
          style={{
            margin: '0',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '500px',
            objectFit: 'cover',
          }} />
      ) : (
        <button onClick={expand}
          style={{
            cursor: 'pointer',
            padding: `10px 40px`
          }}>{data.title}</button>
      )}

      {isVisible && filteredChildren.length > 0 && (
        <div style={{ padding: '5px 10px', marginBottom: 10 }}>
          {filteredChildren.map((child, index) => (
            <div key={index}>
              <Categories data={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}