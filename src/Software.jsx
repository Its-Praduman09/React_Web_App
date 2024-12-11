// import React, { useEffect, useState } from 'react'

// function Software() {
//     let [count,setCount]=useState(0)
//     // const Clicked=()=>{
//     //     setCount((prev)=>prev+1)
//     // }
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((prev)=>prev+1)
//         },1000)
//     },[count])
    
//   return (
//     <>
//     <h3>Count = {count}</h3>
//     {/* <button onClick={useEffect()=>{setTimeout(()=>{setCount(count)=>count+1},1000)</>}}>Increase</button> */}
//     </>
//   )
// }

// export default Software
import React, { useEffect, useRef, useState } from 'react'

function Software() {
  const [name,setName]=useState('Praduman')
  const [course,setCourse]=useState('HTML')
  const Clicked=()=>{
    setName("")
  }
  const refElement=useRef()
  const Reset=()=>{
    refElement.current.value="";
  }
  const Change_Color=()=>{
    refElement.current.style.color="red"
  }
  const InputHandler=(e)=>{
    setCourse(e.target.value)
    refElement.current.style.color="blue"
  }
  return(
    <>
    <input type='text' ref={refElement} value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <button onClick={Clicked}>Submit</button>
    <button onClick={Reset}>Reset</button>
    <button onClick={Change_Color}>Change-Color</button>   
    <br/><br/>
    <h1>Exemple for React onChange Event Handler</h1>   
    <select ref={refElement} value={course} onChange={InputHandler} >
     <option value={"HTML"}>HTML</option> 
     <option value={"CSS"}>CSS</option> 
     <option value={"JavaScript"}>JavaScript</option> 
     <option value={"Java"}>Java</option> 
     <option value={"nodejs"}>Nodejs</option> 
     <option value={"React"}>React</option> 
     <option value={"PHP"}>PHP</option> 
    </select><br/><br/>
    <h3>Use Input : {course}</h3>
    </>
  );
}

export default Software