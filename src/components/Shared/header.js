import React, { Component } from 'react';
import { Menu, Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/newLogo.png';
import Sidebar from './sidebar';
import '../../../assets/style/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarWidth: 0,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            stackedHeader: window.innerWidth < 920
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleHeaderOpacity = this.toggleHeaderOpacity.bind(this);
        this.onResize = this.onResize.bind(this);

        window.addEventListener("scroll", this.toggleHeaderOpacity);
        window.addEventListener("resize", this.onResize);
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

    onResize() {
        if (window.innerWidth < 920 && !this.state.stackedHeader) {
            this.setState({ stackedHeader: true });
        } else if (window.innerWidth >= 920 && this.state.stackedHeader) {
            this.setState({ stackedHeader: false });
        }
    }

    render() {
        const { stackedHeader } = this.state;

        const navItems = [
            { key: 'bios', name: 'Bios', icon: "users" },
            { key: 'music', name: 'Music', icon: "music"  },
            { key: 'tour', name: 'Tour', icon: "map outline" },
            { key: 'photos', name: 'Photos', icon: "picture" },
            { key: 'videos', name: 'Videos', icon: "video" },
        ];

        return (
            <div id="header">
                <Menu secondary className="top-menu" inverted fixed="top" style={{ backgroundColor: this.state.backgroundColor, opacity: this.state.opacity }}>
                    <Menu.Item id="header-logo" as={Link} to={{pathname: '/', state: { fromLink: true }}}>
                        <Image src={Logo} size={stackedHeader ? "tiny" : "small"} />
                    </Menu.Item>

                    {this.getSocialIcons(stackedHeader ? 'small' : 'large')}

                    {stackedHeader ?
                        <Menu.Item position="right" style={{"verticalAlign": "middle"}}>
                            <Button icon onClick={this.toggleSidebar} style={{ backgroundColor: "rgba(255, 255, 255, 0)"}}>
                                <Icon inverted size="small" name="content" />
                            </Button>
                        </Menu.Item> :

                        <Menu.Menu position="right">
                            {navItems.map(item => {
                                return <Menu.Item className="menu-item" as={Link} to={item.key} key={item.key} name={item.name} />
                            })}
                        </Menu.Menu>
                    }
                </Menu>

                <Sidebar navItems={navItems} sidebarWidth={this.state.sidebarWidth} />
                {/*<div id="mySidenav" className="sidenav" style={{'width': this.state.sidebarWidth}}>
                    {navItems.map(item => {
                        return <Link to={item.key} key={item.key}><Icon name={item.icon} />{item.name}</Link>
                    })}
                </div>*/}
            </div>
        );
    }
}