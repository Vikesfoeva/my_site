import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        const aboutState = this.props.navbaritems.aboutMe.classes;
        const builderState = this.props.navbaritems.buildersGame.classes;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button className={aboutState} onClick={() => this.props.onClick('aboutMe')}>
                                About Me
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={builderState} onClick={() => this.props.onClick('buildersGame')}>
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