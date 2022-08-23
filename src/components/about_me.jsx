import React, { Component } from 'react';
import OSULogo from '../images/osulogo.svg'

class AboutMe extends Component {

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <h1>Hello, welcome to my website!  My name is Brandon Lenz.  I'm an aspiring fullstack developer.</h1>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Education</h1>
                    <div className="container m-3">
                        <div className="row">
                            <div className="col">
                                <img src={OSULogo} alt="Oregon State University Logo"  max-width={250}/>
                            </div>
                            
                            <div className="col"align="center">
                                <h5><a href="https://oregonstate.edu/" target="_blank" rel="noreferrer">Oregon State University</a></h5>
                                <h6>B.S. in Computer Science</h6>
                                <h6>September 2020 - Expected Spring 2023</h6>
                            </div>
                            <div className="col" />
                            <div className="w-100 m-2"></div>

                            <div className="col">
                                <img src={require('../images/uwmadison.0fd53df6.png')} alt="University of Wisconsin Madison Logo" width={400}/>
                            </div>
                            <div className="col" align="center">
                                <h5><a href="https://www.wisc.edu/" target="_blank" rel="noreferrer">University of Wisconsin, Madison</a></h5>
                                <h6>B.S. in Nuclear Engineering with minors in Mathematics and German Language</h6>
                                <h6>September 2010 - May 2015</h6>
                            </div>
                            <div className="col" />
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Work Experience</h1>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;