import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import House from './components/House';
import './App.css';

export default (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/house/:id' component={House} />
    </Switch>
  </HashRouter>
)