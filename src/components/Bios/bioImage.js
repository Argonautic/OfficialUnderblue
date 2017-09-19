import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class BioImage extends Component {
    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        this.props.onImageClick(this.props.name);
    }

    render() {
        console.log('yo');
        return (
            <Image src={this.props.src} onClick={this._onClick} />
        )
    }
}