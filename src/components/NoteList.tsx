import React from "react";
import { Note } from "../types";

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
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
      )}
    </div>
  );
};

export default NoteList;
