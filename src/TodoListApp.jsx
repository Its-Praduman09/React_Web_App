import React, { useState } from 'react'

function TodoListApp() {
    const [list,setList]=useState([])
    const saveToDoList=(e)=>
    {
        let name=e.target.toname.value;
        // alert()
        if(!list.includes(name))
        {
            let finalTodolist=[...list,name]
            setList(finalTodolist)
        }
        else{
            alert("You  Can`t add duplicate name")
        }
        e.preventDefault()
    }
  return (
    <div>
        <h2>Todo List Application</h2>
        <form onSubmit={saveToDoList}>
            <input type="text" name='toname'/>
            <button>Save</button>
        </form>
        <br/>
        <div className='outerDiv'>
        <ul>
            <li>HTML<span>&times;</span></li>
        </ul>
        </div>
    </div>
  )
}

export default TodoListApp