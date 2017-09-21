import React, { Component } from 'react';

import StockBackground from '../Shared/stockBackground';
import StaticOverlay from '../Shared/staticOverlay';

import '../../../assets/style/welcome.css';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            exists: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ opacity: 0 });
        }, 2000)
    }

    render() {
        return (
            <div id="welcome" style={{opacity: this.state.opacity}}>
                <StockBackground backgroundId="stock-background-landing" />
                <StaticOverlay backgroundId="static-overlay-landing" />
            </div>
        );
    }
}