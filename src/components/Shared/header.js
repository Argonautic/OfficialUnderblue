import React, { Component } from 'react';
import { Menu, Image, Grid, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/logo.png';
import '../../../assets/style/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        const isHomepage = this.props.match.url === '/';

        this.state = {
            isHomepage,
            sidebarWidth: 0,
            backgroundColor: isHomepage ? 'rgba(255, 255, 255, 0)' : "#090909",
            opacity: isHomepage ? null : '0.8',
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleHeaderOpacity = this.toggleHeaderOpacity.bind(this);

        if (isHomepage) {
            window.addEventListener("scroll", this.toggleHeaderOpacity);
        }
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
                    <Menu.Item key={icon.key} style={{"padding": "13px 5px"}}>
                        <a href={icon.link}>
                            <Icon size={size} name={icon.name} />
                        </a>
                    </Menu.Item>
                );
            })
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isHomepage && nextProps.location.pathname !== '/') {
            window.removeEventListener('scroll', this.toggleHeaderOpacity);
            this.setState({
                isHomepage: false,
                backgroundColor: "#090909",
                opacity: '0.8',
            });
        } else if (!this.state.isHomepage && nextProps.location.pathname === '/') {
            window.addEventListener('scroll', this.toggleHeaderOpacity);
            this.setState ({
                isHomepage: true,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                opacity: null,
            })
        }
    }

    toggleHeaderOpacity() {
        if (this.state.backgroundColor === "#090909" && window.pageYOffset < 100) {
            this.setState({
                backgroundColor: 'rgba(255, 255, 255, 0)',
                opacity: null,
            });
        } else if (this.state.backgroundColor !== "#090909" && window.pageYOffset >= 100) {
            this.setState({
                backgroundColor: "#090909",
                opacity: '0.8',
            });
        }
    }

    render() {

        const navItems = [
            { key: 'bios', name: 'Bios', icon: "users" },
            { key: 'music', name: 'Music', icon: "music"  },
            { key: 'tour', name: 'Tour', icon: "map outline" },
            { key: 'photos', name: 'Photos', icon: "picture" },
            { key: 'videos', name: 'Videos', icon: "video" },
        ];

        return (
            <div id="header">
                <Grid>
                    <Grid.Row only="computer" className="full-size">
                        <Menu secondary className="top-menu" inverted fixed="top" style={{ backgroundColor: this.state.backgroundColor, opacity: this.state.opacity }}>
                            <Menu.Item as={Link} to={{pathname: '/', state: { fromLink: true }}} style={{"paddingLeft": "10px", "paddingRight": "10px"}}>
                                <Image
                                    src={Logo}
                                    size="small"
                                />
                            </Menu.Item>

                            {this.getSocialIcons('large')}

                            <Menu.Menu position="right">
                                {navItems.map(item => {
                                    return <Menu.Item className="menu-item" as={Link} to={item.key} key={item.key} name={item.name} />
                                })}
                            </Menu.Menu>
                        </Menu>
                    </Grid.Row>

                    <Grid.Row only="mobile tablet" className="full-size">
                        <Menu secondary className="top-menu" inverted fixed="top" style={{ backgroundColor: this.state.backgroundColor, opacity: this.state.opacity }}>
                            <Menu.Item as={Link} to={{pathname: '/', state: { fromLink: true }}} style={{"paddingLeft": "6px"}}>
                                <Image
                                    src={Logo}
                                    size="tiny"
                                />
                            </Menu.Item>

                            {this.getSocialIcons('small')}

                            <Menu.Item position="right" style={{"verticalAlign": "middle"}}>
                                <Button icon onClick={this.toggleSidebar} style={{ backgroundColor: "rgba(255, 255, 255, 0)"}}>
                                    <Icon inverted size="small" name="content" />
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                </Grid>

                <div id="mySidenav" className="sidenav" style={{'width': this.state.sidebarWidth}}>
                    {navItems.map(item => {
                        return <Link to={item.key} key={item.key}><Icon name={item.icon} />{item.name}</Link>
                    })}
                </div>
            </div>
        );
    }
}