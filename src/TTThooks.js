import React, {useState} from 'react';

//Tic Tac Toe by just using hooks 
//Where should we keep the state?
//Should we seperate game and squares?
//If we do, how do we share state between game and squares?

//Can pass in a function call to setState method for more complex behavior (such as changing other states concurrently!)

function Game(){
    const [squares, updateSquare] = useState(new Array(9).fill(null))
    const [turn, changeTurn] = useState(false); 
    function newSquare(index){
        const updatedSquare = squares.slice();
        updatedSquare[index] = turn ? 'X' : 'O'; 
        changeTurn(!turn);
        return updatedSquare; 
    }
    return(
        <div>
            <div class='row'>
                <button onClick={() => updateSquare(newSquare(0))}>
                    {squares[0]}
                </button>
                <button onClick={() => updateSquare(newSquare(1))}>
                    {squares[1]}
                </button>
                <button onClick={() => updateSquare(newSquare(2))}>
                    {squares[2]}
                </button>
            </div>
            <div class='row'>
                <button onClick={() => updateSquare(newSquare(3))}>
                    {squares[3]}
                </button>
                <button onClick={() => updateSquare(newSquare(4))}>
                    {squares[4]}
                </button>
                <button onClick={() => updateSquare(newSquare(5))}>
                    {squares[5]}
                </button>
            </div>
            <div class='row'>
                <button onClick={() => updateSquare(newSquare(6))}>
                    {squares[6]}
                </button>
                <button onClick={() => updateSquare(newSquare(7))}>
                    {squares[7]}
                </button>
                <button onClick={() => updateSquare(newSquare(8))}>
                    {squares[8]}
                </button>
            </div>
        </div>

    );
}

export default Game; 