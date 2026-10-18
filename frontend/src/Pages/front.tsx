
import React, { useState } from "react";
import Navbar from "../Components/navbar";
import NoteModel from "../Components/NoteModel";

function Front() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const handleSaveNote = (newNote) => {
    setNotes((previousNotes) => [newNote, ...previousNotes]);
  };

  const handleDeleteNote = (id) => {
    setNotes((previousNotes) =>
      previousNotes.filter((note) => note.id !== id)
    );
  };

  // Filter notes by title or content
  const filteredNotes = notes.filter((note) =>
    `${note.title} ${note.content}`
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar search={search} setSearch={setSearch} />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My Notes
        </h1>

        {notes.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-lg text-gray-500">
              No notes yet. Click Create Note to get started!
            </p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-lg text-gray-500">
              No notes match "{search}". Try another search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <h2 className="mb-2 break-words text-xl font-semibold text-gray-800">
                  {note.title}
                </h2>

                <p className="whitespace-pre-wrap break-words text-gray-600">
                  {note.content}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Created: {note.createdAt}
                  </span>

                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <button
        onClick={() => setIsModelOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl active:scale-95"
      >
        + Create Note
      </button>

      {isModelOpen && (
        <NoteModel
          onClose={() => setIsModelOpen(false)}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
}

export default Front;
