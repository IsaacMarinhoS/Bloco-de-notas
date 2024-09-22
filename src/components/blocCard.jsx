/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext.jsx";
import "../styles/cardStyle.css";

export function BlocCard({ note }) {
  const { DeleteNote, UpdateNote } = useContext(BlocContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleEdit = () => {
    if (isEditing) {
      UpdateNote({
        id: note.id,
        title,
        description,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <section className="note">
      <div className="div_note">
        <p className="note_id">Id: {note.id}</p>
        {isEditing ? (
          <>
            <input
              className="form_input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form_textarea"
              value ={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <h1 className="note_title">{note.title}</h1>
            <p className="note_description">{note.description}</p>
          </>
        )}
      </div>
      <div className="div_button">
        <button className="update_button" onClick={handleEdit}>
          {isEditing ? "salvar" : "Edit"}
        </button>
        <button className="delete_button" onClick={() => DeleteNote(note.id)}>
          Deletar
        </button>
      </div>
    </section>
  );
}
