import React, { useState } from 'react'

function TodoList() {
    let [todos,setTodos]=useState(['Sample Task'])
    let [newTodo,setNewTodo]=useState("")
    const addNewTask=()=>{
        setTodos([...todos,newTodo])
    }
    const updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }
  return (
    <div>
        <div>
            <input type="text" placeholder='Add a task' value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask} style={{backgroundColor:"black",color:"white"}}>Add Task</button>
        </div><br/><br/>
        <h4>Todo Lists!</h4><br/>
        <ul>
            {todos.map((todo)=>(<li style={{color:"blue"}}>
                {todo}
            </li>))}
        </ul>
        </div>
  )
}

export default TodoList