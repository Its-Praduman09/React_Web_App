import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function About() {
    const location=useLocation()
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate('/home')
    }
    const goToContact=()=>{
        navigate('/contact')
    }
  return (
    <>
    <h1>I am about page and my id is {location.state.id1}</h1>
    {/* <Link to='/home'>Home</Link>&nbsp;&nbsp;
    <Link to='/contact'>Contact</Link>&nbsp;&nbsp; */}
    <button onClick={goToHome}>Home</button>&nbsp;&nbsp;
    <button onClick={goToContact}>Contact</button>&nbsp;&nbsp;                                                                                                        
    </>
  )
}

export default About 