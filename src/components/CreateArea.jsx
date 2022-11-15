import React, { useState } from "react";


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(events) {
        const { name, value } = events.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.addOn(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();


    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
