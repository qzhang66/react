import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(pervNote => {
            return [...pervNote, newNote];
        });

    }
    return (
        <div>
            <Header />
            <CreateArea addOn={addNote} />
            {notes.map((note, index) => {
                return (<Note key={index} id={index} title={note.title} content={note.content} />)

            })}

            <Footer />
        </div>
    );
}

export default App;
