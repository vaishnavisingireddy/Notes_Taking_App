
import React, { useState } from 'react';
import NoteForm from './components/Noteform';
import NoteList from './components/Notelist';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

    const handleSave = (note) => {
        if (selectedNoteIndex !== null) {
            const updatedNotes = notes.map((n, index) =>
                index === selectedNoteIndex ? note : n
            );
            setNotes(updatedNotes);
            setSelectedNoteIndex(null);
        } else {
            setNotes([...notes, note]);
        }
    };

    const handleDelete = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const handleEdit = (index) => {
        setSelectedNoteIndex(index);
    };

    return (
        <div className="App">
            <header>
                <h1>Note-Taking Application</h1>
            </header>
            <NoteForm onSave={handleSave} selectedNote={notes[selectedNoteIndex]} />
            <div className="notes-container">
                <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        </div>
    );
};

export default App;