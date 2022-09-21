import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addBy } from '../features/counterSlice'
import {useState} from 'react'

export const Counter = () => {

    const [num, setNum] = useState('')

    const {value} = useSelector(state => state.counter)
    const dispatch = useDispatch()


  return (
    <div className='block'>
        <div>{value}</div>
        <input onChange={e => setNum(e.target.value)} value={num}></input>
        <button onClick={() => dispatch(addBy(+num))}>Add</button>
        <button onClick={() => dispatch(increment())} className='m-3'>Icnrement</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter