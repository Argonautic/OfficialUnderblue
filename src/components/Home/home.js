import React, { Component } from 'react';

import Welcome from './welcome';
import Logo from './logo';
import Landing from './landing';
import Overlay from './overlay';
import HomeSoundCloud from './homeSoundCloud'

export default class Home extends Component {
    render() {
        let renderWelcome;
        this.props.location.state ? renderWelcome = false : renderWelcome = true;

        return (
            <div id="test">
                {renderWelcome && <Welcome />}
                <Logo fromLink={!renderWelcome}/>
                <Landing fromLink={!renderWelcome} />
                <Overlay />
                <HomeSoundCloud />

                <div style={{maxWidth: "600px", margin: "0 auto", paddingTop: "30px"}}>
                    <h2 className="white-color">Midnight Blue - Living Room Sessions</h2>
                    <div className="video-wrapper">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jgxiO-sKgRE"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        );
    }
}