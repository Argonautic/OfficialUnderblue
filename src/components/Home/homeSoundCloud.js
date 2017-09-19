import React, { Component } from 'react';
import { Header, Divider, Container, Image, Grid } from 'semantic-ui-react';
import ImageModal from '../Shared/imageModal';

import AnuDrumming from '../../../public/landingPhotos/AnuDrumming.jpg';
import CouchShot from '../../../public/landingPhotos/CouchShot.jpg';
import KimBaxter from '../../../public/landingPhotos/KimBaxter.jpg';
import RockwoodFrontShot from '../../../public/landingPhotos/RockwoodFrontShot.jpg';
import SideGuitars from '../../../public/landingPhotos/SideGuitars.jpg';
import SleepingBo from '../../../public/landingPhotos/SleepingBo.jpg';

import '../../../public/style/homeSoundCloud.css';

export default class HomeSoundCloud extends Component {
    testLog() {
        console.log('hi');
    }

    render() {
        return (
            <Container id="home-soundcloud">
                <Header size="huge" inverted color="grey">
                    <a id="bandcamp" href="https://underblue.bandcamp.com/album/passenger">Download Underblue's new EP, Passenger</a>
                </Header>
                <Divider inverted /><Divider inverted />
                <br />
                <Grid stackable columns={2} style={{backgroundColor: "transparent"}}>
                    <Grid.Column>
                        <iframe id="home-player" width="70%" height="400" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334869029&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true" />
                    </Grid.Column>
                    <Grid.Column>
                        <Grid id="homepage-pics" columns={3}>
                            <Grid.Row>
                                <Image.Group size="small">
                                    <ImageModal src={CouchShot} />
                                    <ImageModal src={RockwoodFrontShot} />
                                    <ImageModal src={SideGuitars} />
                                    <ImageModal src={SleepingBo} />
                                    <ImageModal src={KimBaxter} />
                                    <ImageModal src={AnuDrumming} />
                                </Image.Group>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}