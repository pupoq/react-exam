import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NewOne = () => {

    const navigate = useNavigate()

    const getHomePage = () => {
        navigate('/')
    }

  return (
    <div className='block'>
        <div>NewOne</div>
        <button onClick={getHomePage}>Back home</button>
    </div>
  )
}

export default NewOne