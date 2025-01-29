import { useState, useEffect } from 'react';
import { NoteForm } from "../forms/NoteForm";
import "./Header.module.css";

export const Header = () => {
  const [notes, setNotes] = useState([]);

  // Загрузка заметок из localStorage при монтировании компонента
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Сохранение заметок в localStorage при их изменении
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className={"header"}>
      <h2>Programming Notes</h2>
      <NoteForm addNote={addNote} />
    </div>
  );
};
