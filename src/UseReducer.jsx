import React, { useReducer } from 'react'

const initialstate=0;
const reducer=(state,action)=>{
    switch(action)
    {
        case "Increment":
            return state+1;
            case "Decrement":
                return state-1;
                default:
                    return state
    }

}
function UseReducer() {
    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <h1>Count = {count}</h1><br/>
    <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>dispatch("Increment")}>Increment</button>&nbsp;&nbsp;
    <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{dispatch("Decrement")}}>Decrement</button>
    </>
  )
}

export default UseReducer