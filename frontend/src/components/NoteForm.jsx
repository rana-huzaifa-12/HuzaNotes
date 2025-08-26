import React, { useState, useEffect } from "react";

const NoteForm = ({ onSubmit, editNote }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (editNote) {
            setTitle(editNote.title);
            setDescription(editNote.description);
        }
    }, [editNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-6 bg-gray-800 rounded-2xl shadow-2xl">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
            />
            <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-xl font-semibold shadow hover:from-gray-600 hover:to-gray-700 transition"
            >
                {editNote ? "Update Note" : "Add Note"}
            </button>
        </form>
    );
};

export default NoteForm;
