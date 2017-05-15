import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login from 'Login';
import TodoApp from 'TodoApp';

import firebase from 'app/firebase/';

var requireLogin = (nexState, replace, next) => {
  if ( !firebase.auth().currentUser ) {
    replace('/');
  }
  next();
};

var requireLogout = (nexState, replace, next) => {
  if ( firebase.auth().currentUser ) {
    replace('/todos');
  }
  next();
};

export default (
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={requireLogout}/>
      </Route>
    </Router>
);