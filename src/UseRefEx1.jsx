import React, { useRef, useState } from 'react'

function UseRefEx1() {
    const refEffect=useRef();
    const [name,setName]=useState(0)
    // console.log(refEffect)
    const InputHandler=(e)=>{
        setName(e.target.value)// you allow to write anything into input field
    }
    const Effect=()=>{
        refEffect.current.focus()
       // refEffect.current.value=""
       refEffect.current.style.color="red"
       refEffect.current.style.fontSize="30px"   
       setName(name+1)
    }
  return (
    <div>
        <h1>Learning of useRef</h1>
        <br/>
        <input type="text" placeholder='type anything ...' ref={refEffect} value={name} onChange={InputHandler}/>
        <br/><br/>
        <button onClick={Effect} style={{color:"white", backgroundColor:"green"}}>Effect</button>
    </div>
  )
}

export default UseRefEx1