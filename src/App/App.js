import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLayout from '../Layout/AdminLayout/AdminLayout';
import Login from '../Auth/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AdminLayout />
        </Route>
        <Route path='/auth'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
