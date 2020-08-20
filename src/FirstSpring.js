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
    const [xCoord, changeX] = useState(0); 
    const [yCoord, changeY] = useState(0); 
    //set up event listener for key presses
    function moveBox(event){
        console.log("detected key press!");
        console.log(event.keyCode);
        if(event.keyCode === 37){
            changeX(xCoord => xCoord + 5);
        }
        if(event.keyCode === 39){
            changeX(xCoord => xCoord - 5);
        }
        if(event.keyCode === 38){
            changeY(yCoord => yCoord - 5);
        }
        if(event.keyCode === 40){
            changeY(yCoord => yCoord + 5);
        }
        return; 
    }
    useEffect(() => {
        //add and remove event listners needs same function handler
        //if we did () => {function}, these are technically two different functions 
        const handler = (event) => {moveBox(event)}
        document.addEventListener('keydown', handler);  
        return(() => {document.removeEventListener('keydown', handler)}); 
    }, []);
    const boxStyle = {
        position: 'relative',
        right: xCoord,
        top:  yCoord,
        width: '100px',
        border: '3px solid red',
    };
    return(
        <div style={boxStyle}>
            <p>some text</p>
        </div>
    ); 
}

function FirstSpringApp(){

}

export default BoxMove; 