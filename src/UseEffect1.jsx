import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0);
    // useEffect it doing side effect
    useEffect(()=>{
        console.log("Welcome")
    },[data])
    const Increase=()=>{
        setCount(count+1)
    }
    const Clicked1=()=>{
        setData((prev)=>(prev+2))
    }
  return (
    <div>
        <h1>useEffect Examples</h1>
        <h2>Button Clicked {count} Times. Even {data}</h2>
        <br/>
        <button style={{backgroundColor:"blue",color:"white"}} onClick={Increase}>Clicked</button>
        <button onClick={Clicked1}>ClickedToPrintEven</button>
    </div>
  )
}

export default UseEffect1