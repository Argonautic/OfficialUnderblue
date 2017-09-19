import React, { Component } from 'react';

import '../../../public/style/stockBackground.css'

export default class StockBackground extends Component {
    /*constructor(props) {
        super(props);

        this.state = {
            opacity: 1
        }
    }

    componentDidMount() {
        if (this.props.backgroundId) {
            setTimeout(() => {
                console.log('stock background out');
                this.setState({ opacity: 0 });
            }, 2000);
        }
    }*/

    render() {
        return (
            <div id={this.props.backgroundId || "stock-background"}/>
        )
    }
}

//style={{opacity: this.state.opacity}}