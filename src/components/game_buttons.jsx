import React, { Component } from 'react';
class GameButtons extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h2 id="step" className='text-light'>Black, please place your builders</h2>
                <p id="error"></p>
                <p id="buttons">
                    <button id="undo" className="button">Undo Last Move</button>
                    <button id="reset" className="button">New Game</button>
                </p>
            </React.Fragment>
        );
    }
}
 
export default GameButtons;