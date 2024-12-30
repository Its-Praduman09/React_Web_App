import React from 'react'
import './Products.css'
function Products(props) {
    const discountedPrice = props.price - (props.price * props.discount) / 100;
  return (
    <div className='product-container'>
        <h1 className='product-title'>{props.title}</h1>
        <p className='product-description'>{props.description}</p>
        <p>
                Price: <span className="original-price">₹{props.price.toLocaleString('en-IN')}</span>
            </p>
            <p>
                Discounted Price: <span className="discounted-price">₹{discountedPrice.toLocaleString('en-IN')}</span>
            </p>
    </div>
  )
}

export default Products