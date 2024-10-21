import React, { useEffect, useState } from "react";
import { Note } from "./types";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import FilterMenu from "./components/FilterMenu";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  // Загрузка заметок из sessionStorage при монтировании компонента
  useEffect(() => {
    const storedNotes = sessionStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Сохранение заметок в sessionStorage при их изменении
  useEffect(() => {
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const filteredNotes = filter
    ? notes.filter((note) => note.category === filter)
    : notes;

  return (
    <div className="app-container">
      <div className="header">
        <h2>Programming Notes</h2>
        <NoteForm addNote={addNote} />
        <hr></hr>
      </div>
      <FilterMenu setFilter={setFilter} />
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default App;
