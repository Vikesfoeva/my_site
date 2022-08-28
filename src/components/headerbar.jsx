import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Headerbar extends Component {

    render() { 
        const aboutState = this.props.navbaritems.aboutMe.classes;
        const builderState = this.props.navbaritems.buildersGame.classes;
        const styles ={
            minHeight: 60
        }
        return (
            <div style={styles}>
                <Navbar className='customFooter' collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' display='block'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link className={aboutState} onClick={() => this.props.onClick('aboutMe', 'navbaritems')}>About Me</Nav.Link>
                                <Nav.Link className={builderState} onClick={() => this.props.onClick('buildersGame', 'navbaritems')}>Builder's Game</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
 
export default Headerbar;
