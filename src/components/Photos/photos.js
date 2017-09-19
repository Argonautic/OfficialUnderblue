import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import '../../../public/style/photos.css';

export default class Photos extends Component {
    render() {
        return (
            <Container className="top-margin">
                <div id="insta-photos">
                    {/*<iframe
                        id="insta-frame"
                        src="//users.instush.com/collage/?cols=9&rows=7&sl=true&user_id=3569358902&username=officialunderblue&sid=-1&susername=-1&tag=-1&stype=mine&bg=transparent&space=true&rd=false&grd=false&gpd=6&drp=false&pin=true&t=999999ldCIe0A7gSVq2QCJHzo5zqnz2hwfiKS0eR161iHJh1gswQuiUqgVJJp_n6Qcdje4R5Mcp0hPQyk"
                        allowTransparency="true"
                        frameBorder="0"
                        scrolling="no"

                    />*/}
                    <ul className="juicer-feed" data-feed-id="officialunderblue">
                        <h1 className="referral">
                            <a href="https://www.juicer.io" /></h1></ul>
                </div>
            </Container>
        )
    }
}