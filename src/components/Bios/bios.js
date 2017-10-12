import React, { Component } from 'react';
import { Container, Image, Segment } from 'semantic-ui-react';

import BioImage from './bioImage';

import PortraitAnu from '../../../assets/BioAssets/PortraitAnu1x1.jpg'
import PortraitJon from '../../../assets/BioAssets/PortraitJon1x1.jpg'
import PortraitKim from '../../../assets/BioAssets/PortraitKim1x1.jpg'
import PortraitSimon from '../../../assets/BioAssets/PortraitSimon1x1.jpg'
import { bioAnu, bioJon, bioKim, bioSimon, bioIlvi } from '../../../assets/BioAssets/IndividualBios';
import '../../../assets/style/bios.css';

export default class Bios extends Component {
    constructor(props) {
        super(props);

        this.bandBios = new Map();
        this.bandBios.set("Anu McPherson", {src: PortraitAnu, bio: bioAnu});
        this.bandBios.set("Jonathan Zhou", {src: PortraitJon, bio: bioJon});
        this.bandBios.set("Kimberly Torres", {src: PortraitKim, bio: bioKim});
        this.bandBios.set("Simon Luk", {src: PortraitSimon, bio: bioSimon});

        this.state = {
            bioMember: "Anu McPherson",
            bioText: bioAnu
        };

        this.onImageClick = this.onImageClick.bind(this);
        this.renderImages = this.renderImages.bind(this);
    }

    onImageClick(name) {
        this.setState({
            bioMember: name,
            bioText: this.bandBios.get(name).bio
        })
    }

    renderImages() {
        let biosIter = this.bandBios.entries();
        let biosArray = [...biosIter];

        return biosArray.map(bio => {
            return <BioImage
                key={bio[0]}
                name={bio[0]}
                src={bio[1].src}
                onImageClick={this.onImageClick}
                active={this.state.bioMember === bio[0]}
            />
        });
    }

    render() {
        return (
            <Container>
                <div id="bio">
                    <h2>The Band</h2>
                    <div>
                        <p id="band-bio">
                            Underblue is a 5 piece alternative pop band based in faithful NYC. Formed in 2016 by
                            younglings Anu McPherson and Jonathan Zhou with nothing but restless energy, Underblue
                            quickly grew on a love of musical freedom and diversity, and have come to proudly
                            represent unity between cultures. Over time the band has found success playing at
                            venues like Rockwood Music Hall, The Bitter End, DROM, and dozens of smaller venues,
                            where they continue to share their music with anyone who wants to listen.<br /><br />

                            Lovers of culture, energy, and emotion, the members of Underblue make compelling music
                            of any genre. Their songs draw influence from jazz, R&B, hip hop, classical, and indie
                            rock, and their lyrics paint stories of love, panic, adventure, heartbreak, and breakneck speed.
                        </p>
                    </div>

                    <Image.Group size="small" style={{marginTop: "10px"}}>
                        {this.renderImages()}
                    </Image.Group>

                    <Segment inverted padded stacked id="bio-box">
                        <h2 className="white-color" style={{textAlign: "center", marginBottom: "10px"}}>{this.state.bioMember}</h2>
                        {this.state.bioText}
                    </Segment>
                </div>
            </Container>
        );
    }
}