import Perf from 'react-addons-perf';
Perf.start();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Shared/header';
import Home from './components/Home/home';
import Bios from './components/Bios/bios';

import '../public/style/style.css';

ReactDOM.render(
    <BrowserRouter>
        <div id="site">
            <Route path="/" component={Header} />
            <Switch>
                <Route path="/bios" component={Bios} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('.container'));

Perf.stop();
Perf.printWasted();
