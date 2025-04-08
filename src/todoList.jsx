import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
   
    let [todos, setTodos] = useState([{task : "sample tasks", id : uuidv4(), isDone : false}])
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

    let upperCaseAll = () =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        )
    }

    let upperCaseIt = (id) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id)
                {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }
                else{
                    return todo;    
                }
            })
        )
    }

    let markAsDone = (id) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id)
                {
                    return {
                        ...todo,
                        isDone : true
                    };
                }
                else{
                    return todo;    
                }
            })
        )
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
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>    &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;&nbsp;         
                        <button onClick={()=>upperCaseIt(todo.id)}>Upppercase</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>

                    <br /><br />
                    </li>
                ))
            }
            <br /><br />
        </ul>
        <br /><br />
        <button onClick={upperCaseAll}>To uppercase</button>
    </>
   );
}