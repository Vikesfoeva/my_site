import React, { Component } from 'react';
import Instructions from './instructions';
import GameButtons from './game_buttons';

class BuildersGame extends Component {
    state = {  } 
    render() { 
        function generateBoard () {
            const out = [];
            for (let i=0; i<7; i++) {
                for (let j=0; j<7; j++) {
                    if (i === 0 || i === 6 || j === 0 || j === 6) {
                        out.push(<div className='wall' key={'wall'+i+j}></div>);
                    } else if ((i%2 === 1 && j%2 === 1) || (i%2 ===  0 && j%2 === 0)) {
                        out.push(
                            <div className="boxA" key={"box_"+(i-1)+(j-1)} id={"box_"+(i-1)+(j-1)}>
                                <div key={"piece_"+(i-1)+(j-1)} className="piece"></div>
                                <div key={"height_"+(i-1)+(j-1)} className="height">0</div>
                            </div>
                        )
                    } else {
                        out.push(
                            <div className="boxB" key={"box_"+(i-1)+(j-1)} id={"box_"+(i-1)+(j-1)}>
                                <div key={"piece_"+(i-1)+(j-1)} className="piece"></div>
                                <div key={"height_"+(i-1)+(j-1)} className="height">0</div>
                            </div>
                        )
                    }
                }
            }
            return (
                out
            )
        };
        return (
            <React.Fragment>
                <div id='instructions'>
                    <Instructions />
                </div>
                <div id='game_buttons'>
                    <GameButtons />
                </div>
                <div className='gameboard'>
                    {generateBoard()}
                </div>
            </React.Fragment>
        );
    }
}
 
export default BuildersGame;