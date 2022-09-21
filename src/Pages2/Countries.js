import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'

export const Countries = () => {
  const [flagsArr, setFlagsArr] = useState('')
  const {flags} = useSelector(state => state.flags)

    // const {flags} = useSelector(state => state.flags)

// console.log(flags)

useEffect(() => {
    
    setFlagsArr(flags.map(flag => (
        <img src={flag.flags.png} alt=''></img>
    )))
}, [flags])

  return (
    <div className='block'>
        <div>{flagsArr}</div>
    </div>
  )
}

export default Countries