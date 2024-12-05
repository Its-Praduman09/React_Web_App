import { useState } from "react";

export default function LikeButton()
{
    let [like,setLike]=useState(false)
    let [count,setCount]=useState(0);
    function clicked()
    {
        setLike(!like)
        setCount(count+=1)
        
    }
    let styles={color:"red"}
    return(
        <div>
            <p>Count = {count}</p>
            <p onClick={clicked} style={styles}>
            {like?(<i class="fa-solid fa-heart"></i>):(<i class="fa-regular fa-heart"></i>)}
            </p>
        </div>
    );
}