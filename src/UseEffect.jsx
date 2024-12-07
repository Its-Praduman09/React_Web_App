import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [countx,setCountx]=useState(0)
    const [county,setCounty]=useState(0)
    const Counter1=()=>{
        setCountx((current)=>current+1)
    }
    const Counter2=()=>{
        setCounty((currentVal)=>currentVal+1)
    }
    useEffect(function printSomething(){
        console.log("use-effect")
    },[countx,county])
  return (
    <>
    <h1>Use Of Use-Effect</h1>
    <h3>Countx = {countx}</h3>
    <button onClick={Counter1} style={{backgroundColor:"red",color:'white'}}>+1</button><br/><br/>
    <h3>County = {county}</h3>
    <button onClick={Counter2} style={{backgroundColor:"red",color:'white'}}>+1</button>
    </>
  )
}

export default UseEffect