import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import Timer from './Timer'
import Form from './Form'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import reducers from './reducers';
const store = createStore(reducers)

const Root = () => (
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path="/" component={Timer} />
                <Route path="/form" component={Form} />
            </App>
        </Router>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
