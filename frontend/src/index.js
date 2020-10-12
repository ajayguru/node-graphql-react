import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import '@babel/polyfill';

import history from './utils/history';
import App from './App';

ReactDOM.render(
    (
                <Router history={history}>
                   <div><App /></div>
                </Router>
    ), document.getElementById('appRoot'),
);