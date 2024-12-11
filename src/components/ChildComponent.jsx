import React from 'react'

const ChildComponent=React.memo(
    (props) =>{
        console.log("Child component go re-render")
      return (
        <div>
            <button onClick={props.clicked}>{props.buttonName}</button>
        </div>
      )
    }
);

export default ChildComponent