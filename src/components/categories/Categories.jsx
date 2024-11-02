import { useState } from 'react';
import Button from '../buttons/Button';

export default function Categories({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm] = useState('');


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

  // ________________________________________________________________________________________________

  // ________________________________________________________________________________________________
  return (
    <div
      style={{
        border: '2px solid gray',
        borderRadius: '8px',
        width: '94%',
        margin: '7px auto',
        textAlign: 'justify',
        padding: '0 10px',
        backgroundColor: '#f5f5f5',
      }}>
      {data.type === "text" ? (
        <p
          style={{
            margin: '0',
            maxWidth: '100%',
            padding: '0 10px',
            textAlign: 'justify',
          }}>{data.title.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>
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
        <Button onClick={expand} type="button" title={data.title}
          style={{
            cursor: 'pointer',
            padding: '8px 30px',
            marginLeft: '-10px',
          }}
        />
      )}

        {isVisible && filteredChildren.length > 0 && (
          <div
            style={{
              padding: '5px 0',
              marginTop: '20px',
            }}>
            {filteredChildren.map((child, index) => (
              <div key={index}>
                <Categories data={child} />
              </div>
            ))}
          </div>
        )}
      </div>
  );
}