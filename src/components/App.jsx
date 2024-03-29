import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./createArea.jsx";

function App() {
  const [notes, setNotes] = useState([]);
//ADD NOTES
 function addNote(newNotes){
  setNotes(prevNotes =>{
    return[...prevNotes, newNotes]
  })
 }
//DELETE NOTES
 function deleteNote(id){
  setNotes(prevNotes =>{
    return prevNotes.filter((noteItem, index)=>{
return index != id;
    });
  });
 }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}/>
       { notes.map((noteItem, index) => {
          return (<Note
          key={index}
          id={index}
          tile={noteItem.title}
          content={noteItem.content}
          onDelete = {deleteNote}
           />
          )
        })
       }
      {/* <Note key={1}  /> */}
      <Footer />
    </div>
  );
}

export default App;