import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';
import FriendsList from './components/FriendsList.js';
import { Nav, NavItem } from 'shards-react';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <NavItem>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/protected">
              Protected Page
            </Link>
          </NavItem>
        </Nav>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        {/* <PrivateRoute path="/anotherRoute" component={SomeOtherComponent} /> */}
      </div>
    </Router>
  );
}

export default App;
