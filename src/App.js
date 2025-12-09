import React from 'react';
import './css/App.css';
import profilePic from './images/self_picture.jpg';
import githubIcon from './images/icons/github.svg';
import linkedinIcon from './images/icons/linkedin.svg';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="header-section">
          <div className="profile-image">
            <img src={profilePic} alt="Brandon Lenz" />
          </div>
          <div className="header-text">
            <h1>Brandon Lenz</h1>
            <h2>Senior Director, CX Automation and AI @ <a href="https://www.qgenda.com/" target="_blank" rel="noopener noreferrer">QGenda</a></h2>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Vikesfoeva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/brandonlenz-pmp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        <div className="about-section">
          <h3>👋 Hello, World! I'm Brandon.</h3>
          
          <div className="whoami">
            <h4>Who I am</h4>
            <ul>
              <li>👨‍💻 Experienced technical leader in software implementation, automation, and AI impact</li>
              <li>☢️ Nuclear Engineering graduate from <a href="https://www.wisc.edu/" target="_blank" rel="noopener noreferrer">University of Wisconsin - Madison</a></li>
              <li>💻 Computer Science graduate from <a href="https://oregonstate.edu/" target="_blank" rel="noopener noreferrer">Oregon State University</a></li>
              <li>🎯 PMP certified professional with experience in project management</li>
              <li>💡 Passionate about building scalable and efficient solutions</li>
            </ul>
          </div>
        </div>
        <div className="contact-blurb">
          <p>If you want to get in touch, reach out to <a href="mailto:Brandon@BrandonLenz.ai">Brandon@BrandonLenz.ai</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;