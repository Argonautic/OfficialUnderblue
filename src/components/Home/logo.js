import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import Logo from '../../../assets/logo.png';
import '../../../assets/style/logo.css'

export default class Landing extends Component {
    /*constructor(props) {
        super(props);

        this.state = {
            opacity: 1
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('logo out');
            this.setState({ opacity: 0 });
        }, 2000);
    }*/

    render() {
        return (
           <Image id="band-name" src={Logo} centered size="medium" />
        );
    }
}