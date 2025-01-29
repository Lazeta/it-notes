import { useState } from "react";
import Button from "../buttons/Button";
import "./NoteForm.module.css";

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
    <form onSubmit={handleSubmit} className={"parent form"}>
      <div className={"div1"}>
        <input type="text" placeholder="Title" value={title} required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={"div2"}>
        <textarea placeholder="Content" value={content} required
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className={"div3"}>
        <input type="text" placeholder="Category" value={category} required
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className={"div4"}>
        <select value={type}
          onChange={(e) =>
            setType(e.target.value)
          }>
          <option value="notes">Notes</option>
          <option value="article">Article</option>
          <option value="site">Site</option>
          <option value="link">Links</option>
          <option value="code">Code</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className={"div5"}>
        <Button type="submit" title="Add note" />
      </div>
    </form>
  );
};
