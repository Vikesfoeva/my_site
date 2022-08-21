import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 

        const aboutMeURL = "";
        const buildersURL = "";

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href={aboutMeURL}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href={buildersURL}>Builders Game</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;