import React, {useState} from 'react'; 

//Something to think about: when we add a new item to our array, does React re-render the entire array?
//for performance, we don't want to re-render any items already there
//does the React virtual DOM take care of this?


//Take input from a form, stores current input in state variable
//setState on our todoArray by appending new element if we click on a button 
//render strings in todoItems using map function 


function TodoApp(){
    const [todoItems, changeTodo] = useState([]);
    const [currInput, changeInput] = useState(''); 
    function addTodoItem(event){
        const newTodo = todoItems.slice(); 
        newTodo.push(currInput); 
        changeTodo(newTodo); 
        changeInput(''); 
        event.preventDefault(); 
        return; 
    }

    return(
        <div>
            <h1>Mini Todo App</h1>
            <form>
                <label>
                    Add new todo item:
                    <input type="text" value={currInput} onChange={(event) => {changeInput(event.target.value)}}/>
                </label>
                <input type="submit" value="Submit" onClick={(event) => addTodoItem(event)}/>
            </form>
            <p>New Todo Item: {currInput}</p>
            {todoItems.map((todo) => 
                {return([
                    <p>{todo}</p>,
                    <button>remove priority</button>
                ])}
            )}
        </div>
    );
}

export default TodoApp; 