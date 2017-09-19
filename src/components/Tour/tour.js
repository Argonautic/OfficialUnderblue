import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

export default class Tour extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tours: false
        };
    }

    render() {
        return (
            !this.state.tours ?
            <Container className="top-margin">
                <h2 className="white-color">Egad, Underblue has no upcoming shows!</h2>
                <Divider inverted /><Divider inverted />
                <p>But fret not, we're still in action. Underblue is taking a break from feature shows
                for the rest of 2017 in order to focus on creating videos and building a fanbase, but we'll
                definitely be playing a lot of smaller shows around the city. Stay tuned for updates on those!</p>
            </Container>

            : <Container>

            </Container>

        );
    }
}