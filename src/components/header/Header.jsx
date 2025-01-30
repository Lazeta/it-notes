import { useState, useEffect } from 'react';
import { NoteForm } from "../forms/NoteForm";
import styled from 'styled-components';

const StyledComponent = styled.header`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
`

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
    <StyledComponent>
      <h2>Programming Notes</h2>
      <NoteForm addNote={addNote} />
    </StyledComponent>
  );
};
