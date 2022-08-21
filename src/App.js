import React, { Component } from 'react';
import AboutMe from './components/about_me';
import BuildersGame from './components/builders_game';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    navbaritems: {
      aboutMe : {
        id: 'about',
        hidden: false,
        classes: "btn btn-primary m-2"
      },
      buildersGame: {
        id: 'buildersGame',
        hidden: true,
        classes: "btn btn-secondary m-2"
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar 
            onClick = {this.handleDisplay}
            navbaritems = {this.state.navbaritems}
        />
        <div hidden={this.state.navbaritems.aboutMe.hidden}>
          <AboutMe />
        </div>
        <div hidden={this.state.navbaritems.buildersGame.hidden}>
          <BuildersGame />
        </div>
      </React.Fragment>
    );
  };

  handleDisplay = (clickedEle) => {
    const navbaritems = Object(this.state.navbaritems);
    const stateKeys = Object.keys(navbaritems);
    
    for (let i = 0; i < stateKeys.length; i++) {
      const thiskey = stateKeys[i];
      if (clickedEle === thiskey) {
        navbaritems[thiskey].hidden = false;
        navbaritems[thiskey].classes = "btn btn-primary m-2";
      } else {
        navbaritems[thiskey].hidden = true;
        navbaritems[thiskey].classes = "btn btn-secondary m-2";
      }
    };
    
    this.setState({ navbaritems });
  };
}

export default App;
