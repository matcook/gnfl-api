import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

import Matches from '../matches/Matches';
import Clubs from '../clubs/Clubs';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div>
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard/club">Clubs</Link>
            </li>
            <li>
              <Link to="/dashboard/match">Matches</Link>
            </li>
            <li>
              <Link to="/dashboard/news">News</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard/club" component={Clubs} />
          <Route path="/dashboard/match" component={Matches} />
          {/* <Route exact path="/dashboard/news" component={News} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
