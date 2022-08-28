import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Footer extends Component {
    render() { 

        const buttonClass = "badge bg-primary m-0 p-1 b-0 "
        return (
            <Navbar fixed='bottom' bg='dark' variant='dark'>
                <Container style={{justifyContent:'center'}}>
                    <Nav>
                        <Nav.Link className='m-0 p-1' href="https://drive.google.com/file/d/1JUoxg_aDWZtRSKqsW1tt8LPRj_zAKjs6/view?usp=sharing" target="_blank" rel="noreferrer">
                            <span className={buttonClass}>Resume</span>
                        </Nav.Link>
                        <Nav.Link className='m-0 p-1' href="https://github.com/Vikesfoeva" target="_blank" rel="noreferrer">
                            <span className={buttonClass}> Github</span>
                        </Nav.Link>
                        <Nav.Link className='m-0 p-1' href="https://www.linkedin.com/in/brandonlenz-pmp/" target="_blank" rel="noreferrer">
                            <span className={buttonClass}>LinkedIn</span>
                        </Nav.Link>
                        <Nav.Link className='m-0 p-1' href='mailto: brandon@brandonlenz.dev' target="_blank" rel="noreferrer">
                            <span className={buttonClass}>Email</span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default Footer;
