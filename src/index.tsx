import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader';

import './reset.css';
import './base.css';

(window as any).$ = (window as any).jQuery = require('jquery');
require('jquery-textfill/source/jquery.textfill.js');

import { App } from './components/App';

// Hot Module Reload
const HotApp = hot(module)(App);

ReactDOM.render(
  <HotApp />,
  document.getElementById('root')
);
