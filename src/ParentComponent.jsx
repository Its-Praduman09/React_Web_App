import React, { createContext,useState } from 'react'
import ClassA from './ClassA'
const usernameContext=createContext()
const userpasswordContext=createContext()

function ParentComponent() {
    const [username,setUsername]=useState("Praduman@123")
  const [password,setPassword]=useState("Badal@123")
  return(
    <>
    <h1>Example Of useContext</h1>
    {/* <ClassA name="Praduman"/> */}
    <usernameContext.Provider value={username}>
      <userpasswordContext.Provider value={password}>
        <ClassA/>
      </userpasswordContext.Provider>
    </usernameContext.Provider>
    
    </>
  );
}

export default ParentComponent
export {usernameContext,userpasswordContext} ;  