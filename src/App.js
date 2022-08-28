import React, { Component } from 'react';
import AboutMe from './components/about_me';
import BuildersGame from './components/builders_game';
import Footer from './components/footer';
import Headerbar from './components/headerbar';

const unselectedClassNav = 'btn btn-light m-1 text-dark';
const selectedClassNav = 'btn btn-primary m-1 text-light';
const unselectedClassExp = 'btn btn-light m-1 p-1 text-dark';
const selectedClassExp = 'btn btn-primary m-1 p-1 text-light';

class App extends Component {

  state = {
    navbaritems: {
      aboutMe : {
        id: 'about',
        hidden: false,
        classes: selectedClassNav
      },
      buildersGame: {
        id: 'buildersGame',
        hidden: true,
        classes: unselectedClassNav
      }
    },
    experience : {
      director: {
          id: 'director',
          title: 'Director',
          hidden: false,
          classes: selectedClassExp,
          duration: 'July 2021 - Present',
          details: [
            'Aggregate customer feedback for 10,000+ users on application',
            'Liaison to Product Team for biweekly sprint planning',
            'Enhance QA automated test coverage alongside continued identification and/or triage for product/system issues',
            'Collaborate with executive leadership on product strategies',
            'Automated team processes with Javascript & GScript tools'
          ]
      },
      manager: {
          id: 'manager',
          title: 'Manager',
          hidden: true,
          classes: unselectedClassExp,
          duration: 'January 2020 - June 2021',
          details: [
            'Collect, prioritize, and develop initial requirements for new product functionality based on customer feedback',
            'Drive process optimization and scalability of optional add-ons providing a key solution to customer retention',
            'Collaborate with cross-functional partner teams, creating key planning solutions and supporting technology'
          ]
      },
      supervisor: {
          id: 'supervisor',
          title: 'Supervisor',
          hidden: true,
          classes: unselectedClassExp,
          duration: 'April 2018 - December 2019',
          details: [
            'Developed tools in Microsoft Excel VBA and Google Sheets GScript, working independently with teams',
            'Leveraged expertise with Microsoft and GScript to automate core processes, saving 100+ hours per month',
            'Met with executive leadership to align and measure development efforts with overall business objectives'
          ]
      },
      accountConsult: {
          id: 'accountConsult',
          title: 'Account Consultant',
          hidden: true,
          classes: unselectedClassExp,
          duration: 'January 2016 - March 2018',
          details: [
            'Demonstrated clarity and technical knowledge, leading and presenting at weekly meetings with executive team',
            'Contributed to High Value Client (HVC) implementations, increasing brand exposure',
            'Collaborated with 50 consultants in customer success teams, sharing VBA/GScript automation tools'
          ]
      },
      softConsult: {
          id: 'softConsult',
          title: 'Software Consultant',
          hidden: true,
          classes: unselectedClassExp,
          duration: 'July 2015 - December 2015',
          details: [
            'Leveraged technical expertise, working within software configuration constraints to find creative solutions',
            'Applied a learning mindset to professional development, learning VBA and JavaScript to automate team tasks'
          ]
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Headerbar 
            onClick = {this.handleDisplay}
            navbaritems = {this.state.navbaritems}
        />
        <div hidden={this.state.navbaritems.aboutMe.hidden}>
          <AboutMe
            onClick = {this.handleDisplay}
            experience = {this.state.experience}
          />
        </div>
        <div hidden={this.state.navbaritems.buildersGame.hidden}>
          <BuildersGame />
        </div>        
        <Footer />
      </React.Fragment>
    );
  };

  handleDisplay = (clickedEle, interactedComp) => {
    const newObjectCopy = Object(this.state[interactedComp]);
    const stateKeys = Object.keys(newObjectCopy);
    let thisSelect, thisUnselect;
    
    if (interactedComp === 'navbaritems') {
      thisSelect = selectedClassNav
      thisUnselect = unselectedClassNav
    } else if (interactedComp === 'experience') {
      thisSelect = selectedClassExp
      thisUnselect = unselectedClassExp
    }
    
    for (let i = 0; i < stateKeys.length; i++) {
      const thiskey = stateKeys[i];
      if (clickedEle === thiskey) {
        newObjectCopy[thiskey].hidden = false;
        newObjectCopy[thiskey].classes = thisSelect;
      } else {
        newObjectCopy[thiskey].hidden = true;
        newObjectCopy[thiskey].classes = thisUnselect;
      }
    };
    
    this.setState({ interactedComp, newObjectCopy });
  };

}

export default App;