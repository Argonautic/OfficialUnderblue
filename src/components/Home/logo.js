import React, { Component } from 'react';
import { Image, Transition } from 'semantic-ui-react';

import BandLogo from '../../../assets/newLogo.png';
import '../../../assets/style/logo.css'

export default class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: this.props.fromLink
        }
    }

    componentDidMount() {
        if (this.state.visible === false) {
            this.setState({visible: true});
        }
    }

    render() {
        return (
            <Transition visible={this.state.visible} animation="scale" duration={500}>
                <Image id="band-name" src={BandLogo} centered size="large" />
            </Transition>
        );
    }
}