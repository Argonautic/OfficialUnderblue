import React, { Component } from 'react';

import '../../../public/style/staticOverlay.css';

export default class StaticOverlay extends Component {
    /*constructor(props) {
        super(props);

        this.state = {
            opacity: 0.8
        }
    }

    componentDidMount() {
        if (this.props.backgroundId) {
            setTimeout(() => {
                console.log('static overlay out');
                this.setState({ opacity: 0 });
            }, 2000);
        }
    }*/

    render() {
        return (
            <div id={this.props.backgroundId || "static-overlay"} />
        );
    }
}

//style={{opacity: this.state.opacity}}