import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './route/App';
import {HashRouter as Router} from 'react-router-dom';
import './common/init.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
