import "./App.css";
import { useEffect, useState } from "react";
import { NoteForm } from "./components/NoteForm";
import FilterMenu from "./components/FilterMenu";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState(typeof String || null);

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

  const addNote = (note) => {
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
      </div>
      <div className="line">
        <hr />
      </div>
      <div>
        <FilterMenu setFilter={setFilter} />
        <NoteList notes={filteredNotes} />
      </div>
    </div>
  );
};

export default App;
