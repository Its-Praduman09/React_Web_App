import React, { useState } from 'react'

function Count() {
    const [count,setCount]=useState(Math.random);
    const incCount=()=>{
        // setCount(count+1) it behavive asynchronous type 
        // setCount(count+1)
        setCount((prevCount)=>{
            return prevCount+1
        })
        setCount((prevCount)=>{
            return prevCount+1
        })

    }
  return (
    <div>
        <h1>Count = {count}</h1>
        <button onClick={incCount}>Increase</button>
    </div>
  )
}

export default Count