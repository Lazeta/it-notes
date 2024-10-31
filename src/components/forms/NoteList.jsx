const NoteList = ({ notes }) => {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>
              {note.category} - {note.type}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
