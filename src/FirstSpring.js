import React, {useState, useEffect} from 'react';
import {useSpring, animated, interpolate} from 'react-spring'; 


//Does spring take care of object coordinates?
//What is actually doing the animation? Is it spring or is it CSS?
//useEFfect -> return a cleanup function after any initial setsups

//Lets try moving a box without react spring first 
//Set up state hooks for x and y coordinates
//Set up effect hook to set up listeners for keyboard events


function BoxMove(){
    //set up state for coordinates of box
    const [coords, changeCoords] = useState([0, 0]); 
    //set up event listener for key presses
    useEffect(() => {
        
    });
    const boxStyle = {
        position: 'relative',
        right: coords[0],
        top:  coords[1],
        width: '200px',
        border: '3px solid red',
        tabIndex: -1
    };
    function moveBox(event){
        console.log("detected key press!");
        // const newX = coords[0];
        // const newY = coords[1];
        // newX = event.keycode === 37 ? newX + 5 : newX; 
        // newX = event.keycode === 39 ? newX - 5 : newX; 
        // newY = event.keycode === 38 ? newY + 5 : newY; 
        // newY = event.keycode === 40 ? newY - 5 : newY; 
        // changeCoords([newX, newY]); 
        return; 
    }
    return(
        <div style={boxStyle} onKeyDown={(event) => moveBox(event)}>
            <p>some text</p>
        </div>
    ); 
}

function FirstSpringApp(){

}

export default BoxMove; 