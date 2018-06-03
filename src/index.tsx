import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './base.css';

(window as any).$ = (window as any).jQuery = require('jquery');
require('jquery-textfill/source/jquery.textfill.js');

import { App } from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
