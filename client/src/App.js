import React from 'react';
import './App.css';
import Forms from './components/Forms';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import User from './components/User';

function App() {
  return (
    <div className='App' style={{ margin: '0 auto' }}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Forms />
        </Route>
        <PrivateRoute path='/users' component={User} />
      </Switch>
    </div>
  );
}

export default App;
