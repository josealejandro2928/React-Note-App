import './Note.scss';

function Note() {
  return (
    <div className='Note'>
      <div className='note'>
        <div className='tools'>
          <button className='edit'>
            <i className='fas fa-edit'></i>
          </button>
          <button className='delete'>
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
        <div className='hidden'></div>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default Note;
