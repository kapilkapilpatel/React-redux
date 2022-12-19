import React from 'react'
import Cart from './Cart'
import Header from './Header'
import Product from './Product'

function Ecommers() {
  return (
    <>
    <Header/>
    
    <div className='d-flex'>
    <Product/>
    <Cart/>
    </div>
    </>
  )
}

export default Ecommers