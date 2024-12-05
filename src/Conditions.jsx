import React, { useState } from 'react'

function Conditions() {
    //const[login,setLogin]=useState(1)
    const login=4;
  return (
    <div>
        <h1>
             {/* {login?"Welcome Praduman":"Welcome Guest"} */}
             {login==1?"Welcome User 1":login==2?"Welcome User 2":"Welcome Guest"}
        </h1>
    </div>
  )
}

export default Conditions