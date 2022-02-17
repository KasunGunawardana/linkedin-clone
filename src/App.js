import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'


import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
