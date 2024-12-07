import React, { useState } from 'react'

function StateObject() {               
    let [moves,setMoves]=useState({blue:0,yellow:0})
    const blueMove=()=>{
        setMoves((premMoves)=>{
            return {...premMoves,blue:premMoves.blue+1}
        })
    }
    
    const yellowMove=()=>
        {
            setMoves((prevMoves)=>{
                return {...prevMoves,yellow:prevMoves.yellow+1}
            })
        }

  return (
    <div>
        <h4>Blue Moves: {moves.blue}</h4>
       <button onClick={blueMove} style={{backgroundColor:'blue',color:"white"}}>Blue</button><br/><br/>
       <h4>Yellow Moves: {moves.yellow}</h4>
       <button onClick={yellowMove} style={{backgroundColor:'yellow',color:"white"}}>Yellow</button><br/>  
       
    </div>  
  )
}

export default StateObject 