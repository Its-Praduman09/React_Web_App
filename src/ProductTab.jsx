import React from 'react'
import Product from './Product'

function ProductTab() {
  return (
    <div>
        <Product title="Phone" price={50000}/>
        <Product title="Laptop" price={40000}/>
        <Product title="Pen" price={10}/>


    </div>
  )
}

export default ProductTab