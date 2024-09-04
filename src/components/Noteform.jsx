import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSave, selectedNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [selectedNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { title, content };
        onSave(note);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">{selectedNote ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
};

export default NoteForm;