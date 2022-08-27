import React, { Component } from 'react';
import OSULogo from '../images/osulogo.svg'

class AboutMe extends Component {

    render() { 
        const imageStyles = {
            maxWidth: "85%"
        }
        const divStyles = {
            display: "flex",
            alignItems: 'center'
        }
        return (
            <div className="container">
                <div className="row">
                    <h1>Hello, welcome to my website!  My name is Brandon Lenz.  I'm an aspiring fullstack developer.</h1>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Education</h1>
                    <div className="container m-1">
                        <div className="row">
                            <div className="col-lg">
                                <img src={OSULogo} alt="Oregon State University Logo" style={imageStyles}/>
                            </div>
                            <div className="col-md" style={divStyles}>
                                <div className='container'>
                                    <div className='row'>
                                        <h4><a href="https://oregonstate.edu/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                            Oregon State University
                                        </a></h4>
                                    </div>
                                    <div className='row'>
                                        <h6>B.S. in Computer Science</h6>
                                    </div>
                                    <div className='row'>
                                        <h6>September 2020 - Expected Spring 2023</h6>
                                    </div>
                                </div>                         
                            </div>
                        </div>
                        <div className="w-100 m-4" />
                        <div className="row">
                            <div className="col-lg">
                                <img src={require('../images/uwmadison.0fd53df6.png')} alt="University of Wisconsin Madison Logo" style={imageStyles}/>
                            </div>
                            
                            <div className="col-md" style={divStyles}>
                                <div className="container">
                                    <div className='row'>                                
                                        <h4><a href="https://www.wisc.edu/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                            University of Wisconsin, Madison    
                                        </a></h4>
                                    </div>
                                    <div className='row'>
                                        <h6>B.S. in Nuclear Engineering with minors in Mathematics and German Language</h6>
                                    </div>
                                    <div className='row'>
                                        <h6>September 2010 - May 2015</h6>
                                    </div>
                                </div>
                            </div>
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