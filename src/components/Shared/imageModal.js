import React, { Component } from 'react';
import { Image, Modal } from 'semantic-ui-react';

export default class ImageModal extends Component {
    render() {
        return (
            <Modal basic trigger={<Image src={this.props.src} />}>
                <Modal.Content image>
                    <Image wrapped src={this.props.src} />
                </Modal.Content>
            </Modal>
        );
    }
}