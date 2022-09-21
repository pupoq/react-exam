import React from 'react'
import {useState} from 'react'

export const ConvertSeconds = () => {

    const [minutes, setMinutes] = useState('')
    const [res, setRes] = useState('')

    const handle = (event) => {
        setMinutes(event.target.value)
    }

    const calc = () => {
        setRes(minutes * 60)
    }

    

  return (
    <div className='block'>
        <input placeholder='minutes' onChange={handle} value={minutes}></input>
        <div>{res} seconds</div>
        <button onClick={calc}>calc</button>
    </div>
  )
}
