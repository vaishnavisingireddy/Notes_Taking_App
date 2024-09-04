
import React from 'react';

const NoteList = ({ notes, onDelete, onEdit }) => {
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;