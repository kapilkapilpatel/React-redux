import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../features/CartSlice'


const product = [
  {
    productId: "1",
    productTitle: "camra",
    image : "https://tse1.mm.bing.net/th?id=OIP.Q9NzaIoEjR2KoqEG4YqfcQHaFj&pid=Api&P=0",
    price: "75500"
  },
  {
    productId: "2",
    productTitle: "Laptop",
    image : "https://tse3.mm.bing.net/th?id=OIP.59MFCA6c6ZoIug99VJKyAwHaEl&pid=Api&P=0",
    price: "52500"
  },
  {
    productId: "3",
    productTitle: "Ipad",
    image : "https://tse2.mm.bing.net/th?id=OIP.0GvvEo8RrFO1yolsPNjyewAAAA&pid=Api&P=0",
    price: "27500"
  },
  {
    productId: "4",
    productTitle: "Iphone",
    image: "https://tse4.mm.bing.net/th?id=OIP.pPgHx5d-qrPSIPoGtWCQaQHaI6&pid=Api&P=0",
    price: "39500"
  },
]

function Product() {

  const counter = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  // console.log(counter)
  
  return (
    <div>
      {/* <h1>Count : {counter.value}</h1>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>{
          dispatch(fetchPosts())
        }}>Fetch Data</button> */}

      {/* <header>Cart : {counter.value}</header> */}

      {product.map((el) => {
        return (
          <div className='products' key={el.productId}>
            <h4 >{el.productTitle} </h4>
            <img height={"300px"} width={"400px"} src={el.image} alt='' /> <br></br>
            <span>{el.price}</span> <br></br>
            <button onClick={() => dispatch(addToCart(el))}>Add to cart</button>
            <button onClick={() => dispatch(removeToCart(el))}>Remove To Cart</button>
            {/* <button onClick={() => dispatch(decrement())}>Remove to cart</button>  */}
          </div>
        )
      })}


    </div>
  )
}

export default Product