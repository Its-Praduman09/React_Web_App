import React, { useState } from 'react'


function Form() {
    const [name,setName]=useState("")
    const [handel,setHandel]=useState("")
    function HandleChnage(event){
        setName(event.target.value)
    }
    function HandleClicked(event){
        setHandel(name)
        event.preventDefault();
    }
  return (
    <div style={{
        width: '300px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1 style={{ color: '#333', fontSize: '24px' }}>Hello {handel}</h1><br/>
        <form onClick={HandleClicked}>
        <input onChange={HandleChnage} value={name} type='text' placeholder='what`s your name?' style={{
          width: '80%',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #ccc', 
          borderRadius: '4px',  
        }}/><br/>
        <button type='submit' style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '4px',
        }}>Submit</button>
        </form>
    </div>
  )
}

export default Form