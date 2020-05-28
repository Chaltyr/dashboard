import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
