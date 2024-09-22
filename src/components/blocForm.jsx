/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { BlocContext } from "../Context/blocContext";
import "../styles/formStyle.css";

export default function BlocForm({ noteToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { CreateNote, UpdateNote } = useContext(BlocContext);

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [noteToEdit]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      UpdateNote({
        id: noteToEdit.id,
        title,
        description,
      });
    } else {
      CreateNote({
        title,
        description,
      });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <section>
      <h1 className="form_title">Bloco de Notas</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <input
          className="form_input"
          placeholder="digite o titulo:"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="digite o conteudo:"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button className="form_button">criar</button>
      </form>
    </section>
  );
}
