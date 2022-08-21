import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        const styles = {
            position: 'absolute',
            bottom: 0
        }
        return (
            <div style={styles}>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="collapse navbar-collapse" id="footer">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="https://drive.google.com/file/d/1JUoxg_aDWZtRSKqsW1tt8LPRj_zAKjs6/view?usp=sharing" target="_blank" rel="noreferrer">
                                <h4><span className="badge bg-primary m-2">
                                    Resume
                                </span></h4>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a href="https://github.com/Vikesfoeva" target="_blank" rel="noreferrer">
                                <h4><span className="badge bg-primary m-2">
                                    Github
                                </span></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/brandonlenz-pmp/" target="_blank" rel="noreferrer">
                                <h4><span className="badge bg-primary m-2">
                                    LinkedIn
                                </span></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="mailto: brandon@brandonlenz.dev" target="_blank" rel="noreferrer">
                                <h4><span className="badge bg-primary m-2">
                                    Email
                                </span></h4>
                            </a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Footer;