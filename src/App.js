import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Create from './components/Create';
import Articles from './components/Articles';
import Home from './components/Home';

import {useState} from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

import Planets from './components/Planets';
import People from './components/People';

const queryClient = new QueryClient(); 

function App() {
  // how to call JSON server
  // json-server --watch --port 3200 data/db.json

  // how to call react query -->
  // import { ReactQueryDevtools } from 'react-query/devtools'
  // <ReactQueryDevtools initialIsOpen={false} /> -> not working

  // Next -> npm install next react react-dom
  // npx create-next-app


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
                <Articles />
              </Route>
              <QueryClientProvider client={queryClient}>

              <Route exact path='/planets'>
                <Planets />
              </Route>
              <Route exact path='/people'>
                <People />
              </Route>
              </QueryClientProvider>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
