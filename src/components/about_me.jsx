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
                    <h1>Hello, welcome to my website!  My name is Brandon Lenz.  I'm an aspiring fullstack developer.</h1>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1>Education</h1>
                    <div className="container m-1">
                        <div className="row">
                            <div className="col-lg">
                                <img src={osuLogo} alt="Oregon State University Logo" style={imageStyles} onMouseOver={upOpacity} onMouseLeave={downOpacity}/>
                            </div>
                            <div className="col-md" style={divStyles}>
                                <div className='container'>
                                    <div className='row'>
                                        <h3><a href="https://oregonstate.edu/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                            Oregon State University
                                        </a></h3>
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
                                <img src={wiscLogo} alt="University of Wisconsin Madison Logo" style={imageStyles} onMouseOver={upOpacity} onMouseLeave={downOpacity}/>
                            </div>
                            
                            <div className="col-md" style={divStyles}>
                                <div className="container">
                                    <div className='row'>                                
                                        <h3><a href="https://www.wisc.edu/" target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                            University of Wisconsin, Madison    
                                        </a></h3>
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
                </div>
            </div>
        );
    }
}
 
export default AboutMe;