import React from 'react'
import Avatar from './Avatar'

function Profile() {
  return (
    // <Avatar name="Praduman Kumar" id={26} age={25}/>
    <Avatar person={{name:"Badal",id:1,age:34}} size={100}/>
  )
}

export default Profile  