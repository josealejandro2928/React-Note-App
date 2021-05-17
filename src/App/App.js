import './App.scss';
import Note from '../components/Note/Note';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  let [notes, setNotes] = useState([]);

  const containerRef = useRef();
  const elementRef = containerRef.current;

  useEffect(() => {
    let tempNotes = JSON.parse(localStorage.getItem('notes') || `[]`);
    tempNotes.map((x) => (x.isEditing = false));
    setNotes(tempNotes);
    // console.log("ppppppppp")
  }, []);

  return (
    <div className='App' ref={containerRef}>
      <div className='layout-btn'>
        <a href="https://www.markdownguide.org/basic-syntax/" target="_blamk  ">See more about markdown here</a>
        <button onClick={onAddNote.bind(this)} className='add-btn' id='add'>
          <i className='fas fa-plus'></i>
          Add note
        </button>
      </div>

      <div className='container-notes'>
        {notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              note={note}
              deleteNote={($event) => onDeleteNote($event)}
              toggleEditing={(note) => onToggleEditing(note, index)}
              changeText={(note, text) => onChangeText(note, text, index)}
            ></Note>
          );
        })}
      </div>
    </div>
  );

  function onDeleteNote(note) {
    // console.log('🚀 ~ file: App.js ~ line 44 ~ onDeleteNote ~ note', note);
    let noteEl = document.querySelector(`#note-${note.id}`);
    noteEl.classList.add('hide');
    let c = setTimeout(() => {
      notes = notes.filter((n) => n.id !== note.id);
      saveData(notes);
      clearTimeout(c);
    }, 500);
  }

  function onAddNote() {
    let newNote = { id: Date.now(), text: '', isEditing: true };
    notes.push(newNote);
    saveData(notes);
    let c = setTimeout(() => {
      let noteTag = elementRef.querySelector(`#note-${newNote.id} textarea`);
      noteTag.focus();
      clearTimeout(c);
    }, 150);
  }

  function onChangeText(note, text, index) {
    note.text = text;
    notes[index] = note;
    saveData([...notes]);
    // console.log(notes);
  }

  function onToggleEditing(note, index) {
    note = { ...note, isEditing: !note.isEditing };
    notes[index] = note;
    setNotes([...notes]);

    let c = setTimeout(() => {
      let textarea = elementRef.querySelector(`#note-${note.id} textarea`);
      if (textarea) {
        textarea.focus();
      }
      clearTimeout(c);
    }, 200);
  }

  function saveData(notes = []) {
    setNotes([...notes]);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}

export default App;
