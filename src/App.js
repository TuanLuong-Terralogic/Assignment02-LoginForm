import React, { useEffect } from 'react';
import './Assets/SASS/main.scss';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginLayout from './Layout/LoginLayout';
import RegisterLayout from './Layout/RegisterLayout';
import ProfileLayout from './Layout/ProfileLayout';
import UserAuth from './Auth/UserAuth';
import {userLoaded} from './Action/user';
// import Alert from './Components/Alert';
import {connect} from 'react-redux';
// import Loading from './Components/Loading';



const createBrowserHistory = require ('history').createBrowserHistory;
const App = ({userLoaded}) => {

  const history = createBrowserHistory();
  

  useEffect(()=> {
    userLoaded();
  }, []);

  return (
    
      <Router history={history}>
        {/* <Alert /> */}
        <Switch>
          <Route path="/" exact component={LoginLayout} />
          <Route path="/register" exact component={RegisterLayout} />
          <UserAuth path="/profile" exact component={ProfileLayout} />
        </Switch>
      </Router>
  );
}

export default connect(null, {userLoaded})(App);
