import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class Landing extends Component {

    render() {
        return (
           <Image id="band-name" src="public/logo.png" centered size="medium" />
        );
    }
}