import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducers';

import Header from './components/header';
import Landing from './components/landing';
import Overlay from './components/overlay';
import Logo from './components/logo';
import HomeSoundCloud from './components/homeSoundCloud'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div id="site">
                <Route path="/" component={Header} />
                <Route path="/" component={Landing} />
                <Route path="/" component={Overlay} />
                <Route path="/" component={Logo} />
                <Route path="/" component={HomeSoundCloud} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
