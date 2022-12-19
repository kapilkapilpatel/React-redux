import { useSelector } from "react-redux";

import React from 'react'

export default function Header() {
  const cartValue = useSelector((state) => state.cart.value.length)

  return (
    <>
      <h3 > CART : <span>{cartValue}</span></h3>
    </>
  )
}