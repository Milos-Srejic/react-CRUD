import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Create from './Pages/Create/Create';
import Update from './Pages/Update/Update';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            {isLogged ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/update/:postID">
            <Update />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            {isLogged ? <Homepage /> : <Redirect to="/login" />}
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
