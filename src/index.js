/*import Perf from 'react-addons-perf';
Perf.start();*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Shared/header';
import Footer from './components/Shared/footer';
import Home from './components/Home/home';
import Bios from './components/Bios/bios';
import Music from './components/Music/music';
import Tour from './components/Tour/tour';
import Photos from './components/Photos/photos';
import Videos from './components/Videos/videos';
import StockBackground from './components/Shared/stockBackground';

import '../public/style/style.css';
import StaticOverlay from "./components/Shared/staticOverlay";

ReactDOM.render(
    <BrowserRouter>
        <div id="site">
            <StockBackground />
            <StaticOverlay />
            <Route component={Header} />
            <Switch>
                <Route path="/bios" component={Bios} />
                <Route path="/music" component={Music} />
                <Route path="/tour" component={Tour} />
                <Route path="/photos" component={Photos} />
                <Route path="/videos" component={Videos} />
                <Route path="/" component={Home} />
            </Switch>
            <Route component={Footer} />
        </div>
    </BrowserRouter>
    , document.querySelector('.container'));

/*Perf.stop();
Perf.printWasted();*/
