import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import NewFriend from './components/NewFriend'

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
        <li>
        <Link to='/newFriend'>Add</Link>
      </li>

      </ul>
      <Switch>
        <PrivateRoute exact path="/newFriend"  component={NewFriend} />
        <PrivateRoute exact path="/protected"  component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
