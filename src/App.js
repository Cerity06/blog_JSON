import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Create from './components/Create';
import Articles from './components/Articles';
import Home from './components/Home';

import {useState} from 'react'

function App() {
  // how to call JSON server
  // json-server --watch --port 3200 data/db.json

  return (
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/articles'>
              <Articles/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
