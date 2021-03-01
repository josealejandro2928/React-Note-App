import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLayout from '../Layout/AdminLayout/AdminLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AdminLayout />
        </Route>
        <Route path='/auth'></Route>
      </Switch>
    </Router>
  );
}

export default App;
