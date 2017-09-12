import React, { Component } from 'react';
import { Header, Divider, Container, Image, Grid } from 'semantic-ui-react';
import ImageModal from './imageModal';

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
                                    <ImageModal src="public/landingPhotos/CouchShot.jpg" />
                                    <ImageModal src="public/landingPhotos/RockwoodFrontShot.jpg" />
                                    <ImageModal src="public/landingPhotos/SideGuitars.jpg" />
                                    <ImageModal src="public/landingPhotos/SleepingBo.jpg" />
                                    <ImageModal src="public/landingPhotos/KimBaxter.jpg" />
                                    <ImageModal src="public/landingPhotos/AnuDrumming.jpg" />
                                </Image.Group>
                                {/*<Grid.Column>
                                    <ImageModal src="public/landingPhotos/CouchShot.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <ImageModal src="public/landingPhotos/RockwoodFrontShot.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <ImageModal src="public/landingPhotos/SideGuitars.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <ImageModal src="public/landingPhotos/SleepingBo.jpg" />
                                </Grid.Column>*/}
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}