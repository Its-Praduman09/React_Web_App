import React, { useRef, useState } from 'react'

function UseRef() {
    const [name,setName]=useState("Praduman")
    const Reset=()=>{
        setName("")
        ur.current.focus()
    }
    const InputHandler=()=>
    {
        // ur.current.style.color="red";
        ur.current.style.color="blue";
        ur.current.value="Engineer";
    }
    const ur=useRef();// it id direct manipulate dom object dom k sare functionality ko change kr sakte hai with help of useRef
   // console.log(ur)
  return (
    <>
    <h1>Learning useRef</h1>
    <input ref={ur} type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={Reset}>Reset</button>
    <button onMouseEnter={InputHandler}>OnMouseEnter</button>                                                                                                                                                                                                                                                                                                                                                                                                               
    </>
  )
}

export default UseRef