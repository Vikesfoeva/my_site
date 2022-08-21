import React, { Component } from 'react';

class Navbar extends Component {
    render() { 

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button className="btn btn-primary m-2" onClick={() => this.props.onClick('aboutMe')}>
                                About Me
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-secondary m-2" onClick={() => this.props.onClick('buildersGame')}>
                                Builders Game
                            </button>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;