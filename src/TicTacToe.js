import React from 'react';
import './TicTacToe.css';

//TicTacToe with classes  
//made with the help of react tutorial 
//Need a board
//Need a way to keep track of square values 
//Square component, should it be a function or a class?
//Game component which keeps track of square components
//Game needs to be able to access square component value -> used to determine winner
//How do we share state between Game and Square, or keep them consistent with one another?
//Answer: lift state up to Game, where it will store state of Square
//Instead of storing state of Square in Square component, store in Game and pass state into Square as a prop 
//Square will function passed in props given by Game to change state 
//Square will rerender since props have changed? No, Game will rerender that Square because we used Game state to render that Square


//Bug: infinite render 
//when I passed changeSquare function into SquareClass prop value onClick, I did onClick = {this.changeSquare(index)}
//This calls changeSquare instead of passing it in as a function 
//changeSquare changes state, causing TicTacToeGame to re-render, where it would loop again to beginning
//To fix, did onClick = {() => this.changeSquare(index)}, which passes it in as a function to call instead of calling the function 


function SquareFunction(props){
    return(
        <button class='square' onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class TicTacToeGame extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            squares: new Array(9).fill(null),
            turn: false
        }; 
        this.changeSquare = this.changeSquare.bind(this); 
    }

    changeSquare(index) {
        const squares = this.state.squares.slice(); 
        squares[index] = this.state.turn ? 'X' : 'O'; 
        const turn = !(this.state.turn);
        this.setState({
            squares: squares, 
            turn: turn
        });
    }

    render(){
        return(
            <div>
                <div class='row'>
                    <SquareFunction
                        value={this.state.squares[0]}
                        onClick={() => this.changeSquare(0)}
                    />
                    <SquareFunction
                        value={this.state.squares[1]}
                        onClick={() => this.changeSquare(1)}
                    />
                    <SquareFunction
                        value={this.state.squares[2]}
                        onClick={() => this.changeSquare(2)}
                    />
                </div>
                <div class='row'>
                    <SquareFunction
                        value={this.state.squares[3]}
                        onClick={() => this.changeSquare(3)}
                    />
                    <SquareFunction
                        value={this.state.squares[4]}
                        onClick={() => this.changeSquare(4)}
                    />
                    <SquareFunction
                        value={this.state.squares[5]}
                        onClick={() => this.changeSquare(5)}
                    />
                </div>
                <div class='row'>
                    <SquareFunction
                        value={this.state.squares[6]}
                        onClick={() => this.changeSquare(6)}
                    />
                    <SquareFunction
                        value={this.state.squares[7]}
                        onClick={() => this.changeSquare(7)}
                    />
                    <SquareFunction
                        value={this.state.squares[8]}
                        onClick={() => this.changeSquare(8)}
                    />
                </div>
            </div>
        );
    }

    
}

export default TicTacToeGame; 
