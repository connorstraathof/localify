import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrismicApp from './PrismicApp';

require('./ably');
require('./AblyCafe');

ReactDOM.render(<PrismicApp  />, document.getElementById('root'));


serviceWorker.unregister();
