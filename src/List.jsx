import React from 'react'

function List() {
    const fruits=["Apple","Orange","Papaya","Grapesh","Banana"]
    const fList=fruits.map((m,index)=>(<li key={index}>{m}</li>))
  return (
    <>
    <ul>{fList}</ul>
    </>
  )
}

export default List