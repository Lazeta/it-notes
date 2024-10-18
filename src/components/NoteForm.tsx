import React, { useState } from "react";
import { Note } from "../types";

interface NoteFormProps {
  addNote: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"article" | "link" | "video" | "code" | 'site' | 'notes'>("article");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: Note = {
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
    <form onSubmit={handleSubmit} style={{ 
      display: "flex",
      padding: "0 10px",

      }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value as "article" | "link" | "video" | "code" | 'site' | 'notes')
        }
        style={{ marginRight: "10px" }}
      >
        <option value="article">Article</option>
        <option value="link">Links</option>
        <option value="video">Video</option>
        <option value="code">Code</option>
        <option value="site">Site</option>
        <option value="notes">Notes</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
