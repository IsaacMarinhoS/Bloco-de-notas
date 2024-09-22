/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BlocContext = createContext();

export function BlocContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const [keyId, setKeyId] = useState(0);

  //criar 
  function CreateNote(note) {
    const newNote = {
      id: keyId,
      title: note.title,
      description: note.description,
    };

    console.log("Criando nova nota: ", newNote); 
    setNotes(prevNotes => [...prevNotes, newNote]);
    setKeyId(prevKeyId => prevKeyId + 1);
  }

  // deletar 
  function DeleteNote(noteId) {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);

    if (updatedNotes.length > 0) {
      const maxId = Math.max(...updatedNotes.map(note => note.id));
      setKeyId(maxId + 1);
    } else {
      setKeyId(0);
    }
  }

  // atualizar
  function UpdateNote(updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
  }

  return (
    <BlocContext.Provider 
      value={{
        notes, 
        DeleteNote, 
        CreateNote,
        UpdateNote
      }}
    >
      {props.children}
    </BlocContext.Provider>
  );
}
