import React, { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent'

function UseContext() {
    const [count,setCount]=useState(0)
    const Clicked=useCallback(
        ()=>{
            setCount(count+1)
        },[count]
    )
  return (
    <div>
        <div>
            <h1>Count = {count}</h1>     
        </div>
        <button onClick={Clicked}>Increase</button><br/><br/><br/>
        <div>
            <ChildComponent buttonName="Clickeme" Clicked={Clicked}/>   
        </div> 
    </div> 
  )
}

export default UseContext