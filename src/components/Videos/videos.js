import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export default class Videos extends Component {
    render() {
        return (
            <Container className="top-margin">
                {/*<iframe
                    id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    frameBorder="0"
                />*/}
                {/*<iframe
                    src="http://www.youtube.com/embed/?listType=user_uploads&list=2VcKRPkNNH2IOnEyNZ7etg"
                    width="480"
                    height="400"
                    frameBorder="0"
                    style={{marginTop: 20}}
                />*/}
                <iframe
                    src="https://www.powr.io/plugins/youtube-gallery/view?unique_label=499abe84_1505797475&external_type=iframe"
                    width="100%"
                    height="600"
                    frameBorder="0"
                />
            </Container>
        )
    }
}