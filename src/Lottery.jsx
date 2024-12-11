import React, { useState } from 'react'
import './Lottery.css'
import { GenerateTicket } from './helper';


function Lottery() {
    const [ticket,setTicket]=useState(GenerateTicket(3));
   let win=ticket[0]+ticket[1]+ticket[2];
   const buyTicket=()=>{
    setTicket(GenerateTicket(3))
   }
//    {win==15?"Gongratulations You Win":""}
    
  return (
    <div>
        <h1>Lottery Game!</h1>
        <div className='ticket'>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div><br/>
        <button style={{color:"white",backgroundColor:"blue"}} onClick={buyTicket}>Buy New Ticket</button>
        <h1 style={{color:"white", backgroundColor:"darkmagenta"}}>{win==15?"Congratulations, You Won!":""}</h1>
       
    </div>
  )
}

export default Lottery