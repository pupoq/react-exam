import React from 'react'
import {useState} from 'react'

export const ThirdTask = () => {
    const [numbers, setNumbers] = useState('')
    let [result, setResult] = useState([])

    const calc = () => {

        const newArr = numbers.split(' ').map(Number)

        let secArr = newArr.sort((a, b) => a - b)

        setResult(result = secArr)
        console.log(result)
    }

    let list = result.map(element => <li key={element}>{element}</li>)

  return (
    <div className='block'>
        <input onChange={p => setNumbers(p.target.value)} value={numbers}></input>
        <button onClick={calc}>Calc</button>
        {list}
    </div>
  )
}
