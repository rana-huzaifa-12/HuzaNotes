import express from "express";
import Note from "../models/Note.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all notes of logged-in user
router.get("/", verifyToken, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new note
router.post("/", verifyToken, async (req, res) => {
    const { title, description } = req.body;
    try {
        const note = new Note({ title, description, user: req.user._id });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a note
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
        if (!note) return res.status(404).json({ message: "Note not found" });

        note.title = req.body.title || note.title;
        note.description = req.body.description || note.description;
        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a note
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!note) return res.status(404).json({ message: "Note not found" });

        res.json({ message: "Note deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
