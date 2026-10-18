
import React, { useState } from "react";

const NoteModel = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    onSave({
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date().toLocaleDateString(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Create a Note
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <textarea
            placeholder="Write your note or task here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModel;
