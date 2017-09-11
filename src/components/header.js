import React, { Component } from 'react';
import { Menu, Image, Grid, Icon, Button, Container} from 'semantic-ui-react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarWidth: 0,
        };
    }

    toggleSidebar() {
        this.state.sidebarWidth === 0 ? this.setState({ sidebarWidth: 250 }) : this.setState({ sidebarWidth: 0 })
    }

    getSocialIcons(size) {
        const icons = [
            { key: "facebook", name: "facebook square", link: "https://www.facebook.com/officialunderblue/" },
            { key: "instagram", name: "instagram", link: "https://www.instagram.com/officialunderblue/" },
            { key: "youtube", name: "youtube square", link: "https://www.youtube.com/channel/UC2VcKRPkNNH2IOnEyNZ7etg"},
        ];

        return (
            icons.map(icon => {
                return (
                    <Menu.Item style={{"padding": "13px 5px"}}>
                        <a href={icon.link}>
                            <Icon size={size} key={icon.key} name={icon.name} />
                        </a>
                    </Menu.Item>
                )
            })
        );
    }

    render() {
        const navItems = [
            { key: 'bio', name: 'Bio', icon: "users" },
            { key: 'music', name: 'Music', icon: "music"  },
            { key: 'tour', name: 'Tour', icon: "map outline" },
            { key: 'photos', name: 'Photos', icon: "picture" },
            { key: 'press', name: 'Press', icon: "newspaper" },
        ];

        return (
            <div id="header">
                <Grid style={{width: 300}}>
                    <Grid.Row only="computer tablet" className="full-size">
                        <Menu fluid className="top-menu" inverted fixed="top">
                            <Menu.Item style={{"paddingLeft": "10px", "paddingRight": "10px"}}>
                                <Image
                                    src="public/logo.png"
                                    as="a"
                                    href="/"
                                    size="small"
                                />
                            </Menu.Item>

                            {this.getSocialIcons('large')}

                            <Menu.Menu position="right">
                                {navItems.map(item => {
                                    return <Menu.Item className="menu-item" as="a" key={item.key} name={item.name} />
                                })}
                            </Menu.Menu>
                        </Menu>
                    </Grid.Row>

                    <Grid.Row only="mobile" className="full-size">
                        <Menu fluid className="top-menu" inverted fixed="top">
                            <Menu.Item style={{"paddingLeft": "6px", "paddingRight": "px"}}>
                                <Image
                                    src="public/logo.png"
                                    as="a"
                                    href="/"
                                    size="tiny"
                                />
                            </Menu.Item>

                            {this.getSocialIcons('small')}

                            <Menu.Item position="right" style={{"verticalAlign": "middle"}}>
                                <Button icon onClick={this.toggleSidebar.bind(this)} style={{"backgroundColor": "rgba(255, 255, 255, 0)"}}>
                                    <Icon inverted size="small" name="content" />
                                </Button>
                            </Menu.Item>
                        </Menu>
                </Grid.Row>
                </Grid>

                <div id="mySidenav" className="sidenav" style={{'width': this.state.sidebarWidth}}>
                    {navItems.map(item => {
                        return <a href="#" key={item.key}><Icon name={item.icon} />{item.name}</a>
                    })}
                </div>
            </div>
        );
    }
}