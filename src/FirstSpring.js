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


//Springs hooks which contain style props for elements 
//Lets make a component where if you click on text, it will fade in 
//if you click on it again, it will fade out

//mini problem, how do you seperate didMount and didUpdate?
//pass in an empty array


// function FirstSpringApp(){
//     const [toggle, setToggle] = useState(true); 
//     const [props, set, stop] = useSpring(() => ({opacity: 1, from: {opacity: 0}}));
//     function fadeText(){
//         setToggle(!toggle); 
//         set({opacity: toggle ? 1 : 0});
//     }
//     return(
//         <animated.h1 style={props} onClick={()=>fadeText()}>This is a test</animated.h1>
//     );
// }

//Why is setState not immediately updating?
//when you use a state variable within a function and call setState to change it, it will keep using the old state variable
//this is because state updates are not reflected in current closures
//state updates will not be reflected in current render, but next render


function FirstSpringApp(){
    const [toggle, setToggle] = useState(true); 
    const [props, set, stop] = useSpring(() => ({opacity: 1, from: {opacity: 0}}));
    function fadeText(){
        setToggle(!toggle); 
    }
    useEffect(() => {
        set({opacity: toggle ? 1 : 0});
    }, [toggle]);
    return(
        <animated.h1 style={props} onClick={()=>fadeText()}>This is a test</animated.h1>
    );
}


//Lets try making a box slide across the screen
//we want to expand width of a box 

function SecondSpringApp(){
    const props = useSpring({width: '1000px', border:'3px solid red', from: {width: '100px', border:'3px solid red'}});
    return(
        <animated.div style={props}>awesome</animated.div>
    );
}

export default SecondSpringApp;