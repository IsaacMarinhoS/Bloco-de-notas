import { BlocCard } from "./blocCard";
import { useContext } from "react";
import { BlocContext } from "../Context/blocContext";
import "../styles/listStyle.css";

export function BlocList() {
  const { notes } = useContext(BlocContext);
  return (
    <section className="note_section">
      {notes.map((note) => (
        <BlocCard key={note.id} note={note} />
      ))}
    </section>
  );
}
