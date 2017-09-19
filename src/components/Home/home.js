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

                <div style={{marginTop: "30px"}}>
                    <h2 className="white-color">Underblue live at Silvanas!</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/6vDMMJ9ZC6w"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }
}