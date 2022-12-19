import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../action/ActionCounter'


const Inc = () => {
    const dispatch = useDispatch()
    const [incVal, setIncVal] = useState(1)
    return (
        <>
            <input
                value={incVal} 
                onChange={e=>setIncVal(e.target.value)}
             />
            <button onClick={() => {
                dispatch( increment (incVal))
            }}>Inc</button>
        </>
    )
}

export default Inc