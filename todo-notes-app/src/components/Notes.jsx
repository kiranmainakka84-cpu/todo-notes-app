import { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="notes-container">
      <h2>📝 Notes</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Write your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter") {
    addNote();
  }
}}
        />

        <button onClick={addNote}>Save Note</button>
      </div>

      <ul className="task-list">
        {notes.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button
              className="delete-btn"
              onClick={() => deleteNote(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {notes.length === 0 && (
  <p style={{ marginTop: "20px", color: "#777" }}>
    No notes added yet.
  </p>
)}
    </div>
  );
}

export default Notes;