import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux'

export const Countries = () => {
  const [cytatyArr, setCytaty] = useState('')
  const {flags} = useSelector(state => state.cytaty)

  console.log(flags)

  const getCyt = () => {
    setCytaty(flags[Math.floor(Math.random() * flags.length)].text)
  }

// const getCyt = () => {
//   let random = 0
//   let max = cytaty.flags.length
//   for(let i = 0; i < cytaty.flags.length; i++){
//     random = Math.floor(Math.random() * max)
//     if(random == i){
//       setCytaty(<div>
//         <p>{cytaty.flags[i].text}</p>
//         <p>{cytaty.flags[i].author}</p>
//       </div>
//       )
//     }
    
//   }
//   console.log(cytatyArr)
  
// }

// useEffect(() => {
  
//   setCytaty(cytaty.flags.map(flag => (
//     <div>
//       <h3>{flag.author}</h3>
//       <h4>{flag.text}</h4>
//     </div>
//     )))
// }, [cytaty])

  return (
    <div className='block'>
        <button onClick={getCyt}>Show</button>
        <div>{cytatyArr}</div>
    </div>
  )
}

export default Countries