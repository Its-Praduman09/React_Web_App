import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

function UseCallback() {
    const [add,setAdd]=useState(0);
    const [count,setCount]=useState(0);
    // const Learning=()=>{
    //     // Learn Something
    // }// facing this type of problem go to the useCallback
    const Learning=useCallback(()=>{
        // Learn Something
    },[count])
  return (
    <>
    <h1>Learning Of useCallback</h1><br/>
    <ChildA Learning={Learning} count={count}/>
    <h3>{add}</h3><br/><br/>
    <h1>{count}</h1>
    <button onClick={()=>setAdd(add+1)}>Addition</button>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}

export default UseCallback