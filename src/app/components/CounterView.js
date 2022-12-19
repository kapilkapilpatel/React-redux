import React from 'react'
import { useSelector } from 'react-redux'


const CounterView = () => {
   const counter =  useSelector(storeState=>storeState.counter)
   console.log(counter)
  return (
    <div>{counter.count}</div>
  )
}

export default CounterView