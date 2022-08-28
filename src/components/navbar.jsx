import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        const aboutState = this.props.navbaritems.aboutMe.classes;
        const builderState = this.props.navbaritems.buildersGame.classes;
        return (
            <div className="container">
                <div className='row justify-content-md-left'>
                    <div className='col-sm-auto'>
                        <button className={aboutState} onClick={() => this.props.onClick('aboutMe')}>
                                About Me
                        </button>
                    </div>
                    <div className='col-sm-auto'>
                        <button className={builderState} onClick={() => this.props.onClick('buildersGame')}>
                                Builders Game
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;