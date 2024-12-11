import React, { useRef, useState } from 'react'

function Lists() {
    const [name,setName]=useState(["Praduman"])
    const [update,setUpdate]=useState("")
    const refElement=useRef()
    const InputHandler=(e)=>{
        setUpdate(e.target.value)
    }
    const Add=()=>{
        setName([...name,update])
        refElement.current.focus();
        
    }
  return (
    <>
    <h1>Todo Application</h1><br/><br/><br/>
    <input type="text" placeholder='your name......' value={update} onChange={InputHandler}/>&nbsp;&nbsp;&nbsp;
    <button onClick={Add} ref={refElement} style={{color:"white",backgroundColor:"blue"}}>Add Task</button>
    <br/><br/><br/>
    <ul>
        {name.map((m,id)=>(<li key={id}><b>{m}</b></li>))}              
    </ul>
    </>
  )
}

export default Lists