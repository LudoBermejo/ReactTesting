import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!AppStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('app')
);

