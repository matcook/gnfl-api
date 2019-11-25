import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

import ClubState from './context/club/ClubState';

import './App.css';

const App = () => {
  return (
    <ClubState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ClubState>
  );
};

export default App;
