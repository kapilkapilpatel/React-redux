import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cart = useSelector(state => state.cart.value)
    //console.log(cart ,"cart")
    
    
  return (
    <>
    {cart.map((ele , ind)=>{ 
        return(
            <div key={ind}>
                <h4> {ele.productTitle}</h4>
                <img height={"300px"} width={"400px"} src={ele.image} alt='' /> <br></br>
                <span>{ele.price}</span> <br></br>
            </div>
        )
    })}
    </>
  )
}

export default Cart