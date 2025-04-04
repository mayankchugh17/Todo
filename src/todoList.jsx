import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task:"sample tasks", id:uuidv4()}]);
    let [newTask, setNewTodo] = useState();

    const addNewTask = () =>{
        setTodos([...todos, newTask]);
        setNewTodo("");
    };
    const updateTodoValue = (event) =>{
        setNewTodo(event.target.value);             //here, newTask is being set
    };
    return (

        <div>
            <input type="text" placeholder="Add a Task" value={newTask} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add</button>
            <br /><br />
    
            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>

)
}