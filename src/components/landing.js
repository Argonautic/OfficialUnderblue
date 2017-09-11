import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class Landing extends Component {
    render() {
        return (
            <div id="landing">
                   <Image id="band-name" src="public/logo.png" centered size="medium" />
            </div>
        );
    }
}