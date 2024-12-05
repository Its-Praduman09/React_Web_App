import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

function TodoLists() {
    let[todos,setTodos]=useState([{task:"sample task",id:uuidv4()}]) 
    let[update,setUpdate]=useState("")
    function todoHandler(event)
    {
        setUpdate(event.target.value)
    }
    function Clicked()
    {
          //  setTodos([...todos,{task:update,id:uuidv4()}]) 
          setTodos((prevTodo)=>{
           return [...prevTodo,{task:update,id:uuidv4()}]
          })       
        // event.preventDefault()                 
    }
    const deleteTodo=(id)=>{
      // const copy=todos.filter((todo)=>todo.id!=id)
     // console.log(copy)
     setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id))
    }
  return (
    <div>
        <input type="text" value={update} placeholder='add a task' onChange={todoHandler}/>&nbsp;&nbsp;
        <button onClick={Clicked} style={{color:"white",backgroundColor:"blue"}}>Add Task</button>
        <br/><br/><br/>
        <hr/>
        <h2>Todo Tasks</h2>  
        <ul>
            {todos.map((u)=>(
              <li key={u.id}>
                <span><b>{u.task}</b></span>&nbsp;&nbsp;
                <button onClick={()=>deleteTodo(u.id)}>Delete</button>
                </li>))}
        </ul>
    </div>
  )
}

export default TodoLists