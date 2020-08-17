import React from 'react';

//TicTacToe with classes  
//Need a board
//Need a way to keep track of square values 
//Square component, should it be a function or a class?
//Game component which keeps track of square components
//Game needs to be able to access square component value -> used to determine winner
//How do we share state between Game and Square, or keep them consistent with one another?
//Answer: lift state up to Game, where it will store state of Square
//Instead of storing state of Square in Square component, store in Game and pass state into Square as a prop 
//Square will function passed in props given by Game to change state 
//Square will rerender since props have changed?


//Bug: infinite render 
//when I passed changeSquare function into SquareClass prop value onClick, I did onClick = {this.changeSquare(index)}
//This calls changeSquare instead of passing it in as a function 
//changeSquare changes state, causing TicTacToeGame to re-render, where it would loop again to beginning
//To fix, did onClick = {() => this.changeSquare(index)}, which passes it in as a function to call instead of calling the function 

class SquareClass extends React.Component{
    render(){
        return(
            <button onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}




class TicTacToeGame extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            squares: new Array(9).fill(null),
            turn: false
        }; 
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
                <SquareClass
                    value={this.state.squares[0]}
                    onClick={() => this.changeSquare(0)}
                />
                <SquareClass
                    value={this.state.squares[1]}
                    onClick={() => this.changeSquare(1)}
                />
                <SquareClass
                    value={this.state.squares[2]}
                    onClick={() => this.changeSquare(2)}
                />
            </div>
        );
    }

    
}

export default TicTacToeGame; 
