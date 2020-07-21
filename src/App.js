import React from 'react';
import './Assets/SASS/main.scss';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './Reducer/rootReducer';
import LoginLayout from './Layout/LoginLayout';
import RegisterLayout from './Layout/RegisterLayout';
import ProfileLayout from './Layout/ProfileLayout';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginLayout} />
          <Route path="/register" exact component={RegisterLayout} />
          <Route path="/profile" exact component={ProfileLayout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
