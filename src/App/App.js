import './App.scss';
import Note from '../components/Note/Note';

function App() {
  return (
    <div className='App'>
      <div className='layout-btn'>
        <button className='add-btn' id='add'>
          <i className='fas fa-plus'></i>
          Add note
        </button>
      </div>

      <div className='container-notes'>
        <Note></Note>
      </div>
    </div>
  );
}

export default App;
