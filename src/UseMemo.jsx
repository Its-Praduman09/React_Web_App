import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [add,setAdd]=useState(0)
    const [sub,setSub]=useState(100)
    const Increase=()=>{
        setAdd((e)=>(e+1))
    }
    const Decrease=()=>{
        setSub((e)=>(e-1))
    }
    const Multiplaction=useMemo(function multiply(){
        console.log("#####");
        return add*10;
    },[add])
  return (
    
    <div>
        <h1>Learning Of useMemo</h1>
        {Multiplaction}
        <button onClick={Increase}>Addition</button>
        <span>{add}</span><br/>
        <button onClick={Decrease}>Substration</button> 
        <span>{sub}</span>
    </div>
  )
}

export default UseMemo