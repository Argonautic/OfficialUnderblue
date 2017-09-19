import React, { Component } from 'react';
import { Reveal, Image } from 'semantic-ui-react';

import footerImage from '../../../public/footerImage.png';

export default class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: "60px", marginBottom: "30px"}}>
                <Reveal animated="move">
                    <Reveal.Content visible style={{position: "relative !important", width: "100%"}}>
                        <Image centered src={footerImage} size='small' />
                    </Reveal.Content>
                </Reveal>
            </div>
        )
    }
}