import React, { useEffect, useState } from 'react'

function Counter() {
    let [count,setCount]=useState(0)
    const Clicked=()=>{
        setCount((current)=>current+1)
    }
    useEffect(function printSomething(){
        console.log("use-effect")
    })
  return (
    <>
    <h1>Counter Application</h1>
    <h4>Count = {count}</h4>
    <button onClick={Clicked} style={{color:"white",backgroundColor:"blue"}}>Increase</button>
    </>
  )
}

export default Counter