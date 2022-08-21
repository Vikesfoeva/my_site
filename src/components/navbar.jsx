import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Builders Game</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;