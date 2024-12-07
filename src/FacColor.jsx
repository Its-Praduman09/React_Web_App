import React, { useState } from 'react'

function FacColor() {
    
    const [color,setColor]=useState('red')
  return (
    <>
    <h1>Your favorite color {color}</h1>
    <button onClick={()=>setColor('blue')}>Blue</button>
    <button type='button' onClick={()=>setColor('pink')}>pink</button>
    <button style={{color:"black"}} type='button' onClick={()=>setColor('black')}>black</button>                                  
    </>
  )
}

export default FacColor 