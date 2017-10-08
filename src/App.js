import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


import Home from './components/Home';
import Query from './components/Query';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/Query" component={Query}/>
        </div>
      </Router>
    );
  }
}

export default App;
