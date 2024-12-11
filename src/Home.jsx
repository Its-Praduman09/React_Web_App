import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const id1=1;
    const id2=2;
    const navigate=useNavigate()
    const goToAbout=()=>{
        navigate('/about',{state:{id1:id1}})
    }
    const goToContact=()=>{
        navigate('/contact',{state:{id2:id2}})
    }
  return (
    <>
    <h1>I am home page</h1>
    {/* <Link to='/about'>About</Link>&nbsp;&nbsp;
    <Link to='/contact'>Contact</Link>&nbsp;&nbsp; */}
    <button onClick={goToAbout}>About</button>&nbsp;&nbsp;
    <button onClick={goToContact}>Contact</button>&nbsp;&nbsp;
    </>
  )
}

export default Home