import {React,memo} from 'react'

function ChildA({Learning,count}) {
    console.log("ChildA Component")
  return (
    <>
    </>
  )
}

export default memo(ChildA);