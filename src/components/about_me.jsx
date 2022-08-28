import React, { Component } from 'react';

class AboutMe extends Component {

    render() { 
        const hiddenImage = .6;
        const showImage = 1;
        const imageStyles = {
            maxWidth: "85%",
            tintColor: 'gray',
            opacity: hiddenImage,
            transition: '0.4s'
        }
        const divStyles = {
            display: "flex",
            alignItems: 'center'
        }

        // I am in no way endorsed by either institution
        // This content is strictly intended to inform my attendance in both schools

        // Logo acquired from https://brand.wisc.edu/web/logos/
        const wiscLogo = require('../images/uw-logo-flush-web.png');

        // Logo retrieved from https://communications.oregonstate.edu/brand-guide/visual-identity/logo/request-logo-files
        // Logo guidelines https://communications.oregonstate.edu/brand-guide/visual-identity/logo-guidelines
        const osuLogo = require('../images/OSU_horizontal_2C_O_over_B.png');

        function upOpacity(ele) {ele.target.style.opacity = showImage;}
        function downOpacity(ele) {ele.target.style.opacity = hiddenImage;}
        return (
            <div className="container">
                <div className="row">
                    <h1>Hello!  My name is Brandon Lenz.  I'm an aspiring fullstack developer.</h1>
                </div>
                <br></br>
                <div className="row m-2">
                    <h1 className='text-center text-secondary'>Education</h1>
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
                                        <h4 className="text-primary">Oregon State University</h4>
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
                                        <h4 className='text-primary'>University of Wisconsin, Madison</h4>
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

                <div className="row p-1">
                    <h1 className='text-center text-secondary'>Work Experience</h1>
                    <h2 className='text-primary text-center'>QGenda</h2>
                    <div id="QGenda_Experience">
                        <div className='container'>
                            <div className='row' id='master_row'>
                                <div className='col col-3' id='master_col'>                        
                                    {
                                    Object.keys(this.props.experience).map((inKey) => 
                                        <div className='row' key={this.props.experience[inKey].id + 'row'}>
                                            <div className='col' key={this.props.experience[inKey].id + 'col'}>

                                            <span className={this.props.experience[inKey].classes} key={this.props.experience[inKey].id+'span'} 
                                                onClick={() => this.props.onClick(this.props.experience[inKey].id, 'experience')}>
                                                {this.props.experience[inKey].title}
                                                
                                            </span>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                <div className='col' id='col_role-info'>
                                        {
                                            Object.keys(this.props.experience).map((inKey) => 
                                                <div key={this.props.experience[inKey].id + 'info'} hidden={this.props.experience[inKey].hidden}>
                                                    <h4>{this.props.experience[inKey].title}</h4>
                                                    <h5>{this.props.experience[inKey].duration}</h5>        
                                                    <ul>
                                                        {this.props.experience[inKey].details.map((element) => 
                                                            <li key={this.props.experience[inKey].id + this.props.experience[inKey].details.indexOf(element)}>
                                                                {element}
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;