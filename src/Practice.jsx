import React, { useState } from 'react'

function Practice() {
    const [name,setName]=useState("")
    const [actual,setActual]=useState("")
    const number=[1,2,3,4,5]
    const lists=number.map((m,index)=>(<li key={index}>{m}</li>))
    function inputHandler(event)
    {
        setName(event.target.value)
    }
    function Cllicked()
    {
        setActual(name)
    }

  return (
    <div>
        <h1>Hello {actual}</h1>
        <input type="text" onChange={inputHandler} placeholder="Enter Your Name"/><br/><br/>
        <button style={{color:"white",backgroundColor:"blue"}} 
        onMouseLeave={e => e.target.style.backgroundColor = "blue"}
        onMouseEnter={e => e.target.style.backgroundColor = "black"}  onClick={Cllicked}>Submit</button><br/><br/>
        <ul>
            {lists}
        </ul>
    </div>
  )
}

export default Practice