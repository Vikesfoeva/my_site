import React, { Component } from 'react';
import AboutMe from './components/about_me';
import BuildersGame from './components/builders_game';
import Footer from './components/footer';
import Headerbar from './components/headerbar';

const unselectedClass = 'btn btn-light m-1 text-dark';
const selectedClass = 'btn btn-primary m-1 text-light';

class App extends Component {

  state = {
    navbaritems: {
      aboutMe : {
        id: 'about',
        hidden: false,
        classes: selectedClass
      },
      buildersGame: {
        id: 'buildersGame',
        hidden: true,
        classes: unselectedClass
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
          <AboutMe />
        </div>
        <div hidden={this.state.navbaritems.buildersGame.hidden}>
          <BuildersGame />
        </div>        
        <Footer />
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
        navbaritems[thiskey].classes = selectedClass;
      } else {
        navbaritems[thiskey].hidden = true;
        navbaritems[thiskey].classes = unselectedClass;
      }
    };
    
    this.setState({ navbaritems });
  };
}

export default App;
