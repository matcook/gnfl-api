import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Club from './dashboard/Club';
import Match from './dashboard/Match';
import News from './dashboard/News';

const Dashboard = () => {
  return (
    <Router>
      <div>
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to='/dashboard/club'>Clubs</Link>
            </li>
            <li>
              <Link to='/dashboard/match'>Matches</Link>
            </li>
            <li>
              <Link to='/dashboard/news'>News</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/dashboard/club' component={Club} />
          <Route exact path='/dashboard/match' component={Match} />
          <Route exact path='/dashboard/news' component={News} />
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
