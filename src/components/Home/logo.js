import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import Logo from '../../../public/logo.png';

export default class Landing extends Component {

    render() {
        return (
           <Image id="band-name" src={Logo} centered size="medium" />
        );
    }
}