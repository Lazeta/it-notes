import { useState } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
  text-align: center;

  div {
    min-width: 300px;
    width: 100%;
  }

  input,
  textarea,
  select {
    width: -webkit-fill-available;
  }
`;

export const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("notes");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
      type,
    };
    addNote(newNote);
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="notes">Notes</option>
          <option value="article">Article</option>
          <option value="site">Site</option>
          <option value="link">Links</option>
          <option value="code">Code</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div>
        <Button type="submit" title="Add note" />
      </div>
    </StyledForm>
  );
};
