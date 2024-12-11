import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <div className="Product">
        <h3>{props.title}</h3>
        {/* <h4>Product Description</h4> */}
        <h5>price : {props.price}</h5>
    </div>
  )
}

export default Product