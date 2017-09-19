import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';

import PortraitAnu from '../../../public/BioAssets/PortraitAnu.jpg'
import PortraitJon from '../../../public/BioAssets/PortraitJon.jpg'
import PortraitKim from '../../../public/BioAssets/PortraitKim.jpg'
import PortraitSimon from '../../../public/BioAssets/PortraitSimon.jpg'
import { bioAnu, bioJon, bioKim, bioSimon, bioIlvi } from '../../../public/BioAssets/IndividualBios';

export default class BioDetails extends Component {
    constructor(props) {
        super(props);

        this.bandBios = [
            { name: "Anu", src: PortraitAnu, bio: bioAnu },
            { name: "Jon", src: PortraitJon, bio: bioJon },
            { name: "Kim", src: PortraitKim, bio: bioKim },
            { name: "Simon", src: PortraitSimon, bio: bioSimon },
        ];

        this.state = { bioText: this.bandBios[0].bio };
    }

    render() {
        return (
            <div>
                <Image.Group size="small">
                    {this.bandBios.map(bio => {
                        return <Image key={bio.name} src={bio.src} onClick={this.testClick} />
                    })}
                </Image.Group>

                <Segment raised id="bio-box">
                    {this.state.bioText}
                </Segment>
            </div>
        )
    }
}