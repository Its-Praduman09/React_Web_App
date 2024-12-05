import React, { useState } from 'react'

function Todo() {
    const[list,setList]=useState(["Sample Task"])
    const[update,setUpdate]=useState("")
    const inputHandler=(event)=>{
        setUpdate(event.target.value)
    }
    const Clicked=()=>{
        setList([...list,update])
    }
  return (
    <div>
        <input type="text" placeholder='add a task' onChange={inputHandler}/><br/><br/><br/>
        <button onClick={Clicked} style={{color:"white", backgroundColor:"blue"}}>Add Task</button>
        <br/><br/>
        <h2>Todo Lists</h2><br/><br/><br/>
        <ul>
            {list.map((m,index)=>(<li key={index}><b>{m}</b></li>))}
        </ul>
    </div>
  )
}

export default Todo