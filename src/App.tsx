import React, { useState } from 'react';
import { Note } from './types';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import FilterMenu from './components/FilterMenu';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const filteredNotes = filter
    ? notes.filter((note) => note.category === filter)
    : notes;

  return (
    <div style={{ 
      padding: "10px",
      backgroundColor: "#6d9ac4"
    }}>
      <h1>Programming Notes</h1>
      <NoteForm addNote={addNote} />
      <FilterMenu setFilter={setFilter} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default App;