import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Create from './Pages/Create/Create';
import Update from './Pages/Update/Update';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
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
            <Homepage />
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
