import React, { Component } from 'react';

class AboutMe extends Component {

    render() { 
        const imageStyles = {
            maxWidth: "85%",
            tintColor: 'gray',
            opacity: 0.6,
            transition: '0.4s'
        }
        const divStyles = {
            display: "flex",
            alignItems: 'center'
        }

        const wiscLogo = require('../images/uwmadison.0fd53df6.png');

        // Logo retrieved from https://communications.oregonstate.edu/brand-guide/visual-identity/logo/request-logo-files
        // Logo guidelines https://communications.oregonstate.edu/brand-guide/visual-identity/logo-guidelines
        const osuLogo = require('../images/OSU_horizontal_2C_O_over_B.png');
       

        function upOpacity(ele) {
            ele.target.style.opacity = 1;
        }
        function downOpacity(ele) {
            ele.target.style.opacity = .6;
        }
        return (
            <div className="container">
                <div className="row">
                    <h1>Hello!  My name is Brandon Lenz.  I'm an aspiring fullstack developer.</h1>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Education</h1>
                    <div className="container m-1">
                        <div className="row">
                            <div className="col-lg">
                                <a href="https://oregonstate.edu/" target="_blank" rel="noreferrer" className="link-dark">
                                    <img src={osuLogo} alt="Oregon State University Logo" style={imageStyles} onMouseOver={upOpacity} onMouseLeave={downOpacity}/>
                                </a>
                            </div>
                            <div className="col-md" style={divStyles}>
                                <div className='container'>
                                    <div className='row'>
                                        <h4 className="text-dark">Oregon State University</h4>
                                    </div>
                                    <div className='row'>
                                        <h5>B.S. in Computer Science</h5>
                                    </div>
                                    <div className='row'>
                                        <h5>September 2020 - Expected Spring 2023</h5>
                                    </div>
                                </div>                         
                            </div>
                        </div>
                        <div className="w-100 m-4" />
                        <div className="row">
                            <div className="col-lg">
                                <a href="https://www.wisc.edu/" target="_blank" rel="noreferrer" className="link-dark">
                                    <img src={wiscLogo} alt="University of Wisconsin Madison Logo" style={imageStyles} onMouseOver={upOpacity} onMouseLeave={downOpacity}/>
                                </a>
                            </div>
                            
                            <div className="col-md" style={divStyles}>
                                <div className="container">
                                    <div className='row'>                                
                                        <h4 className='text-dark'>University of Wisconsin, Madison</h4>
                                    </div>
                                    <div className='row'>
                                        <h5>B.S. in Nuclear Engineering with minors in Mathematics and German Language</h5>
                                    </div>
                                    <div className='row'>
                                        <h5>September 2010 - May 2015</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Work Experience</h1>
                    <h2 className='text-primary'>QGenda</h2>
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <ul style={{listStyle: 'none'}}>
                            <li>Director, Customer Success</li>
                                <ul>
                                    <li>July 2021 - Present</li>
                                </ul>
                            <li>Manager, Customer Success</li>
                                <ul>
                                    <li>January 2020 - June 2021</li>
                                </ul>
                            <li>Supervisor, Customer Success</li>
                                <ul>
                                    <li>April 2018 - December 2019</li>
                                </ul>
                            <li>Account Consultant</li>
                                <ul>
                                    <li>January 2016 - March 2018</li>
                                </ul>
                            <li>Software Consultant</li>
                                <ul>
                                    <li>July 2015 - December 2015</li>
                                </ul>                      
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;