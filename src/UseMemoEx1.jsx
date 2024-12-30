import React, { useMemo, useState } from 'react'

function UseMemoEx1() {
    const [add,setAdd]=useState(0)
    const [sub,setSub]=useState(100)
    const Multiplaction=useMemo(function Multiply(){
        console.log("........................");
        return add*10;
    },[add])
    const Addition=()=>{
        setAdd(add+1)
    }
    const Substraction=()=>{
        setSub(sub-1)
    }
  return (
    // useMemo it is used to increase(reduce) performance of application 
    <div>
        <h1>Learning Of useMemo</h1>&nbsp;
        {Multiplaction}<br/>
        <span>{add}</span>&nbsp;
        <button onClick={Addition}>Addition</button>&nbsp;
        <span>{sub}</span>&nbsp;
        <button onClick={Substraction}>Substraction</button>
    </div>
  )
}

export default UseMemoEx1