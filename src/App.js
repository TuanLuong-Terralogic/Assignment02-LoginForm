import React, { useEffect } from 'react';
import './Assets/SASS/main.scss';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginLayout from './Layout/LoginLayout/LoginLayout';
import RegisterLayout from './Layout/RegisterLayout/RegisterLayout';
import ProfileLayout from './Layout/ProfileLayout/ProfileLayout';
import UserAuth from './Auth/UserAuth';
import { userLoaded } from './Redux/Action/user';
// import Alert from './Components/Alert';
import { connect } from 'react-redux';
// import Loading from './Components/Loading';

const App = ({ userLoaded }) => {

  useEffect(() => {
    userLoaded();
  }, []);

  return (

    <Router>
      <Switch>
        <Route path="/" exact component={LoginLayout} />
        <Route path="/register" exact component={RegisterLayout} />
        <UserAuth path="/profile" exact component={ProfileLayout} />
      </Switch>
    </Router>
  );
}

export default connect(null, { userLoaded })(App);
