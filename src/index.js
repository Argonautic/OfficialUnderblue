import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import reducers from './reducers';

import Header from './components/header';
import Filler from './components/filler';
import Landing from './components/landing';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Header} />
                <Route path="/" component={Landing} />
                <Route path="/" component={Filler} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
