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
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import Edit from './Pages/Edit/Edit';

function App() {
  const isLogged = useSelector((state) => state.login.isLogged);
  console.log(isLogged);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            {isLogged ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/create">
            {isLogged ? <Create /> : <Redirect to="/" />}
          </Route>
          <Route path="/edit/:id">
            {isLogged ? <Edit /> : <Redirect to="/" />}
          </Route>
          <Route path="/about">
            {isLogged ? <About /> : <Redirect to="/" />}
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
