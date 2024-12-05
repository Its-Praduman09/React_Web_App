import React from 'react'

function Avatar({person,size=0}) {
  return (
    <>
    <p>Your name is {person.name}</p>
    <p>Your id is {person.id}</p>
    <p>Your age is {person.age}</p>
    <p>Your size is {size}</p>
    </>
  )
}

export default Avatar