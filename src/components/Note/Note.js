/* eslint-disable no-unused-vars */
import './Note.scss';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function Note(props) {
  let note = props.note;
  let tagSection;

  if (note.isEditing) {
    tagSection = (
      <textarea
        value={note.text}
        onChange={(e) => props.changeText(note, e.target.value)}
      ></textarea>
    );
  } else {
    tagSection = (
      // <div
      //   className='text'
      //   dangerouslySetInnerHTML={{ __html: note.text }}
      // ></div>
      <div className='text'>
        <div className='markdown-body'>
          <ReactMarkdown>{note.text}</ReactMarkdown>
        </div>

        {/* <ReactMarkdown># Hello, *world*!</ReactMarkdown> */}
      </div>
    );
  }

  return (
    <div id={'note-' + note.id} className='Note'>
      <div className='tools'>
        <button
          onClick={() => {
            props.toggleEditing(note);
          }}
          className={note.isEditing ? 'active' : ''}
        >
          <i className='fas fa-edit'></i>
        </button>
        <button
          onClick={() => {
            props.deleteNote(note);
          }}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </div>
      {tagSection}
    </div>
  );
}

export default Note;
