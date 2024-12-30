import React from 'react'
import { useState } from 'react'

function TodoApplication1() {
    const [todo,setTodo]=useState(["Sample Task"])
    const [update,setUpdate]=useState("")
    const InputHandler=(event)=>{
        setUpdate(event.target.value)
    } 
     const addTodoList=()=>{
        if(update.trim()==="")
        {
            alert("Task can not be empty")
            return;
        }
        if(todo.includes(update.trim()))
        {
            alert("Duplicate not Allowed")
            return
        }
        setTodo([...todo,update.trim()])
        setUpdate("")
     }
     const deleteList=(index)=>{
        const item=todo.filter((_,i)=>i!==index)
        setTodo(item)
     }
     
 return(
  <>
  <h1>Todo Application</h1>
  <input onChange={InputHandler} value={update} />&nbsp;&nbsp;
  <button onClick={addTodoList}>addTask</button>
  <br/><br/>
  <ul>
    {todo.map((m,index)=>{return <li><b>{m}</b>&nbsp;&nbsp;&nbsp;<button onClick={()=>deleteList(index)}>Delete</button></li>})}
  </ul>
  </>
 );
} 

export default TodoApplication1