import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
   
    let [todos, setTodos] = useState([{task : "sample tasks", id : uuidv4()}])
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, {task : newTodo , id : uuidv4()}])
        setNewTodo("")
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    return (
    <>
        <input placeholder='add a task' value={newTodo} onChange={updateTodoValue}/>
        <br /><br />
        <button onClick={addNewTodo}>Add task</button>
        <br /><br /><br /><br /><br /><br />
        <hr />
        <h3>tasks Todo</h3>
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}> 
                        <span>{todo.task}</span>    &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    </li>
                ))
            }
            <br /><br />
        </ul>
    </>
   );
}