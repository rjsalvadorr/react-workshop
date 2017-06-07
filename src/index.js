import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import Timer from './Timer'
import Form from './Form'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Root = () => (
    <Router>
        <App>
            <Route exact path="/" component={Timer} />
            <Route path="/form" component={Form} />
        </App>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
