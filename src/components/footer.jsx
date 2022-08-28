import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Footer extends Component {
    render() { 
        const linkClass = 'm-0 p-1';
        const buttonClass = "badge bg-primary m-0 p-1 b-0 "
        const urls = {
            resume: 'https://drive.google.com/file/d/1JUoxg_aDWZtRSKqsW1tt8LPRj_zAKjs6/view?usp=sharing',
            github: 'https://github.com/Vikesfoeva',
            linkedIn: 'https://www.linkedin.com/in/brandonlenz-pmp/',
            email: 'mailto: brandon@brandonlenz.dev'
        };
        // Alternative background color for footer - backgroundColor: '#303030',
        return (
            <Navbar variant='dark' style={{ minHeight:50, display:'block'}}>
                <Container className='customerFooter' style={{justifyContent:'center'}}>
                    <Nav>
                        <Nav.Link className={linkClass} href={urls.resume} target="_blank" rel="noreferrer">
                            <span className={buttonClass}>Resume</span>
                        </Nav.Link>
                        <Nav.Link className={linkClass} href={urls.github} target="_blank" rel="noreferrer">
                            <span className={buttonClass}> Github</span>
                        </Nav.Link>
                        <Nav.Link className={linkClass} href={urls.linkedIn} target="_blank" rel="noreferrer">
                            <span className={buttonClass}>LinkedIn</span>
                        </Nav.Link>
                        <Nav.Link className={linkClass} href={urls.email} target="_blank" rel="noreferrer">
                            <span className={buttonClass}>Email</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default Footer;
