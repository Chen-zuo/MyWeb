import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './route/App';
import './common/init.css';

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
