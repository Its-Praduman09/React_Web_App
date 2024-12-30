import React, { useContext } from 'react'
import {usernameContext, userpasswordContext} from './ParentComponent'

function ClassC() {
 const username=useContext(usernameContext)
 const password=useContext(userpasswordContext)
  return (
    // <h1>Your name is {props.name} come From Parent Component</h1>
    

    <h1>Your username is {username} and your password is {password}</h1>
  )
}

export default ClassC