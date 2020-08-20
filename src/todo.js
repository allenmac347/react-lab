import React, {useState} from 'react'; 

//Something to think about: when we add a new item to our array, does React re-render the entire array?
//for performance, we don't want to re-render any items already there
//does the React virtual DOM take care of this?


//Take input from a form, stores current input in state variable
//setState on our todoArray by appending new element if we click on a button 
//render strings in todoItems using map function 

//When using map, each element must have a unique key 
//How do we generate keys for each user input?
//Can't be based on input since because of duplicate user info 
//use time? generate a timestamp for every pushed item on 
//for purposes of this component, just went with something simple, having a counter


function TodoApp(){
    const [todoItems, changeTodo] = useState([]);
    const [currInput, changeInput] = useState(''); 
    const [uniqueId, updateId] = useState(0);
    function addTodoItem(event){
        const newTodo = todoItems.slice(); 
        const newInput = {
            text: currInput,
            identifier: uniqueId
        }
        newTodo.push(newInput); 
        changeTodo(newTodo); 
        changeInput(''); 
        updateId(uniqueId + 1);
        event.preventDefault(); 
        return; 
    }

    function removeTodoItem(index){
        const newTodo = todoItems.slice(); 
        console.log(newTodo);
        newTodo.splice(index, 1);
        console.log(newTodo);
        changeTodo(newTodo); 
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
            {todoItems.map((todo, index) => 
                {return(
                    <React.Fragment key={todo.identifier}>
                        <p>{todo.text}</p>,
                        <button onClick={() => removeTodoItem(index)}>remove priority</button>
                    </React.Fragment>
                )}
            )}
        </div>
    );
}

export default TodoApp; 