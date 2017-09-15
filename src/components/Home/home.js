import React, { Component } from 'react';

import Landing from './landing';
import Overlay from './overlay';
import Logo from './logo';
import HomeSoundCloud from './homeSoundCloud'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Overlay />
                <Logo />
                <HomeSoundCloud />
            </div>
        );
    }
}