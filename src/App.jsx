import { useState, useEffect } from 'react';
import './App.css';
import { NoteForm } from './components/forms/NoteForm';
import { data } from './data/Data';
import Categories from './components/categories/Categories';

function App() {
  const [notes, setNotes] = useState([]);

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

  return (
    <div className="App">
      <div className="header">
        <h2>Programming Notes</h2>
        <NoteForm addNote={addNote} />
      </div>
      <div className="line">
        <hr />
        <br />
      </div>
      <div style={{ maxWidth: "1024px", width: "100%", margin: "0 auto", padding: 0, maxHeight: "auto" }}>
        <Categories data={data} />
      </div>
    </div>
  );
}

export default App;