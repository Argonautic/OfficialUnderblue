import React, { Component } from 'react';

export default class Overlay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: 0,
        };

        window.addEventListener("scroll", () => {
            this.toggleLandingOpacity()
        });

        this.toggleLandingOpacity = this.toggleLandingOpacity.bind(this);
    }

    toggleLandingOpacity() {
        if (this.state.opacity === 0.8 && window.pageYOffset < 100) {
            this.setState({ opacity: 0 });
        } else if (this.state.opacity !== 0.8 && window.pageYOffset >= 100) {
            this.setState({ opacity: 0.8 });
        }
    }

    render() {
        return (
            <div id="overlay" style={{ opacity: this.state.opacity }} />
        );
    }
}