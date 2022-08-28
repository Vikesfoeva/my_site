import React, { Component } from 'react';
class Instructions extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Instructions</h1>
                <div>
                        The game is played on 5x5 board. Each square on the board has a height that starts at 0, but cannot ever
                        exceed 4. One player is black and the other is white. Player x will place their two builders first, and then
                        player two will
                        place both of theirs. No two builders may occupy the space at the same time. If any builder occupies a
                        square, that square cannot be built on.
                        <br />
                        <br />
                        A turn consists of:
                    <ol>
                        <li>A player choosing a builder to move</li>
                        <li>Moving that builder to an adjacent square, diagonally or orthognally (up/down or left/right). Note that
                            a builder can move
                            upwards only 1 level in height but can move downwards any amount. So a builder would be unable to move
                            from a square of height 1 to a square
                            of height 3 even if they were adjacent. Moving from a square of height 2 to 0 is valid though.
                        </li>
                        <li>Then building on a square adjacent to the square that builder moved to (diagonally or orthognally). Note
                            you are allowed to build on the square
                            that was just vacated. A sqaure cannot exceed a height of 4.
                        </li>
                        <li>Successful completion of all of the above steps constitutes a valid move.</li>
                    </ol>
                    <br />
                    <br />
                    <p>A player wins when:</p>
                    <ol>
                        <li>One of a players builders are on a square of height 3 or: </li>
                        <li>At the completion of a players turn, their opponent has no valid moves. For example, if black has just
                            moved and on their turn white
                            would have no valid moves, then black wins.
                        </li>
                    </ol>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Instructions;