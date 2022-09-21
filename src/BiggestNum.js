import React from 'react'
import {useState} from 'react'

export const BiggestNum = () => {
    const [numbers, setNumbers] = useState('')
    const [result, setResult] = useState('')
    const calc = () => {
        const newArr = numbers.split(' ').map(Number)

        setResult(Math.max(...newArr))
    }

  return (
    <div className='block'>
        <input onChange={p => setNumbers(p.target.value)} value={numbers}></input>
        <button onClick={calc}>Calc</button>
        <div>{result}</div>
    </div>
  )
}
