import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
   
    let [todos, setTodos] = useState(["sample tasks"])
    return (
    <>
        <input placeholder='add a task' />
        <br /><br />
        <button>Add task</button>
        <br /><br /><br /><br /><br /><br />
        <hr />
        <h4>tasks Todo</h4>
        <ul>
            <li></li>
        </ul>
    </>
   );
}