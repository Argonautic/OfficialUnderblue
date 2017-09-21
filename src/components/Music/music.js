import React, { Component } from 'react';
import { Container, Header, Item } from 'semantic-ui-react';

import { lyricsSuperconductor, lyricsMidnightBlue, lyricsBrain, lyricsTrain, lyricsSeaMachine} from '../../../assets/MusicAssets/lyrics';

import '../../../assets/style/music.css';

export default class Music extends Component {
    constructor(props) {
        super(props);

        this.songs = [
            { title: "Superconductor", lyrics: lyricsSuperconductor},
            { title: "Midnight Blue", lyrics: lyricsMidnightBlue},
            { title: "Brain", lyrics: lyricsBrain},
            { title: "Train", lyrics: lyricsTrain},
            { title: "Sea Machine", lyrics: lyricsSeaMachine},
        ];

        this.renderSongDetails = this.renderSongDetails.bind(this);
    }

    renderSongDetails() {
        return this.songs.map(song => {
            return <Item key={song.title}>
                <Item.Content style={{textAlign: "left"}}>
                    <Item.Header className="white-color" as="h3">{song.title}</Item.Header>
                    <Item.Description>
                        <p className="white-color">{song.lyrics}</p>
                    </Item.Description>
                </Item.Content>
            </Item>
        });
    }

    render() {
        return (
            <Container className="top-margin">
                <div style={{marginBottom: "20px"}}>
                    <h2 className="white-color">
                        Find us on
                        <a target="_blank" href="https://soundcloud.com/officialunderblue"> Soundcloud</a>,
                        <a target="_blank" href="https://underblue.bandcamp.com/"> Bandcamp</a>, and
                        <a target="_blank" href="https://open.spotify.com/artist/2TJPo2ycm9kGbyRC9qcWkL"> Spotify</a>!</h2>
                </div>
                {/*<Header as="h3" className="white-color">
                    Passenger
                </Header>*/}
                <div>
                    <iframe
                        width="80%"
                        height="300"
                        scrolling="no"
                        frameBorder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334869029&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
                    />
                </div>
                <Item.Group>
                    {this.renderSongDetails()}
                </Item.Group>
            </Container>
        )
    }
}