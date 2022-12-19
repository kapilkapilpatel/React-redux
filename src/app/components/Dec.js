import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../action/ActionCounter'

const Dec = () => {
    const dispatch = useDispatch()
    const [DecVal, setDecVal] = useState(1)
    return (
        <>
            <input
                value={DecVal} 
                onChange={e=>setDecVal(e.target.value)}
             />
            <button onClick={() => {
                dispatch(decrement (DecVal))
            }}>Dec</button>
        </>
    )
}

export default Dec