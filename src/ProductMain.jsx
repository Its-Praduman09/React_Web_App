import React from 'react'
import Products from './Products'
function ProductMain() {
  return (
    <>
    <Products title={"Mobile"} description={"WOW Good Product"} price={28000} discount={10}/>
    <Products title={"Laptop"} description={"WOW Amazing Product"} price={48000} discount={15}/>
    <Products title={"Tablet"} description={"WOW Awesome Product"} price={34000} discount={20}/>
    </>
  )
}

export default ProductMain