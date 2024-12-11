import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Contact() {
    const location=useLocation()
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate('/home')
    }
    const goToAbout=()=>{
        navigate('/about')
    }

  return (
    <>
    <h1>I am contact page and my id is {location.state.id2}</h1>
    {/* <Link to='home'>Home</Link>&nbsp;&nbsp;
    <Link to='about'>About</Link>&nbsp;&nbsp; */}
    <button onClick={goToHome}>Home</button>&nbsp;&nbsp;
    <button onClick={goToAbout}>About</button>&nbsp;&nbsp;
    </>
  )
}

export default Contact