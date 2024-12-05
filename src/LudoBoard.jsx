import { useState } from "react";

export default function LudoBoard()
{
    //let [blueMove,setBlueMove]=useState(0)
    // you can create a object
    let [move,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
    const updateBlue=()=>
    {
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1}
        })
    }
    const updateYellow=()=>
        {
            setMoves((prevMoves)=>{
                return {...prevMoves,yellow:prevMoves.yellow+1}
            })
        }
        const updateGreen=()=>
            {
                setMoves((prevMoves)=>{
                    return {...prevMoves,green:prevMoves.green+1}
                })
            }
            const updateRed=()=>
                {
                    setMoves((prevMoves)=>{
                        return {...prevMoves,red:prevMoves.red+1}
                    })
                }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves = {move.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {move.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {move.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red Move = {move.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}