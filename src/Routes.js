import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';

import App from './App';

import Home from './components/pages/Home';

export default () => (
  <Router>
    <Route path="/" component={Home}>
      
      <Route path="/login" component={Home} />
      <Route path="/signup" component={Home} />
    </Route>
    <Route path="*" component={App} />
  </Router>
);
