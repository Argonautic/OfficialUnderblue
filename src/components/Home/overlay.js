import React, { Component } from 'react';

import '../../../assets/style/overlay.css';

export default class Overlay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: 0,
        };

        this.toggleLandingOpacity = this.toggleLandingOpacity.bind(this);

        window.addEventListener("scroll", this.toggleLandingOpacity);
    }

    toggleLandingOpacity() {
        if (this.state.opacity === 0.8 && window.pageYOffset < 100) {
            this.setState({ opacity: 0 });
        } else if (this.state.opacity !== 0.8 && window.pageYOffset >= 100) {
            this.setState({ opacity: 0.8 });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleLandingOpacity);
    }

    render() {
        return (
            <div id="overlay" style={{ opacity: this.state.opacity }} />
        );
    }
}