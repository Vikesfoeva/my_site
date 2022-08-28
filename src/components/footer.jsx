import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        const styles = {
            position: 'fixed',
            bottom: 10,
            width: "100%"
        }
        const buttonClass = "badge bg-primary"
        return (
            <div className='row' style={styles}>
                <div className='row g-1' style={{justifyContent: 'center'}}>
                    <div className='col-sm-auto'>
                        <a href="https://drive.google.com/file/d/1JUoxg_aDWZtRSKqsW1tt8LPRj_zAKjs6/view?usp=sharing" target="_blank" rel="noreferrer">
                            <h6><span className={buttonClass}>Resume</span></h6>
                        </a>
                    </div>
                    <div className='col-sm-auto'>
                        <a href="https://github.com/Vikesfoeva" target="_blank" rel="noreferrer">
                            <h6><span className={buttonClass}> Github</span></h6>
                        </a>
                    </div>
                    <div className='col-sm-auto'>                            
                        <a href="https://www.linkedin.com/in/brandonlenz-pmp/" target="_blank" rel="noreferrer">
                            <h6><span className={buttonClass}>LinkedIn</span></h6>
                        </a>
                    </div>
                    <div className='col-sm-auto'>
                        <a href="mailto: brandon@brandonlenz.dev" target="_blank" rel="noreferrer">
                            <h6><span className={buttonClass}>Email</span></h6>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default Footer;