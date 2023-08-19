// this is the notes with add button
import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    //extract the name and value properties from the 
    //event.target object into separate variables
    //with reference to button element clicked
    const { name, value } = event.target;
    //save our content
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
        //the name and calue of tile and content will be saved
      }
    })
  }
  function submitNote(event) {
    //passing new note back to app.jsx
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    //prevent page to flash/reload
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;