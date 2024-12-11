import React, { useState } from 'react'

function ArrayStateObject() {
    const [moves,setMoves]=useState({blue:0})
    const [arr,setArr]=useState("no moves");
    const BlueMoves=()=>{
        setMoves((prevmoves)=>{
            // setMoves({...moves,blue:moves.blue+1})
            return {...prevmoves,blue:prevmoves.blue+1}
        })
        arr.push("blue moves");
        setArr(arr)
        console.log(arr)
    }
  return (
    <div>
        <h3>Blue moves : {moves.blue}</h3><br/><br/>
        <button onClick={BlueMoves} style={{color:"white",backgroundColor:"blue", width:"40px",height:"30px"}}>+1</button>
    </div>
  )
}

export default ArrayStateObject 