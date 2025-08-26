import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "./NoteForm";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState(null);

    const fetchNotes = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/notes");
            setNotes(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { fetchNotes(); }, []);

    const addNote = async (note) => {
        try {
            const res = await axios.post("http://localhost:5000/api/notes", note);
            setNotes([res.data, ...notes]);
        } catch (err) { console.log(err); }
    };

    const updateNote = async (note) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/notes/${editNote._id}`, note);
            setNotes(notes.map(n => n._id === res.data._id ? res.data : n));
            setEditNote(null);
        } catch (err) { console.log(err); }
    };

    const deleteNote = async (id) => {
        if (!window.confirm("Delete this note?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/notes/${id}`);
            setNotes(notes.filter(n => n._id !== id));
        } catch (err) { console.log(err); }
    };

    return (
        <div className="relative min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
            {/* Animated Background */}
            <svg className="absolute top-0 left-0 w-48 sm:w-56 md:w-72 h-38 sm:h-56 md:h-52 opacity-20 animate-float-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#4B5563" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-60 md:h-66 opacity-20 animate-spin-slower" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#374151" rx="20" />
            </svg>
            <svg className="absolute top-1/4 right-1/4 sm:right-1/3 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 opacity-15 animate-pulse-float" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#6B7280" />
            </svg>

            {/* Notes Container */}
            <div className="relative max-w-4xl mx-auto z-10">
                <NoteForm onSubmit={editNote ? updateNote : addNote} editNote={editNote} />

                <div className="flex flex-col space-y-6 mt-6">
                    {notes.length === 0 && (
                        <p className="text-center text-gray-400 text-lg">
                            No notes yet. Add one above!
                        </p>
                    )}
                    {notes.map(note => (
                        <div key={note._id} className="bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="mb-4 sm:mb-0">
                                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{note.title}</h3>
                                <p className="text-gray-300">{note.description}</p>
                            </div>
                            <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2 mt-4 sm:mt-0">
                                <button
                                    onClick={() => setEditNote(note)}
                                    className="px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded-xl font-medium shadow hover:from-gray-600 hover:to-gray-700 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteNote(note._id)}
                                    className="px-5 py-2 bg-red-600 text-gray-100 rounded-xl font-medium shadow hover:bg-red-500 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotesList;
