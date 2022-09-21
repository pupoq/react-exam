import {useState} from 'react'
import names from '../data/names.json'

const SearchFilter = () => {

    const [slovo, setSlovo] = useState('')

  return (
    <div>
        <input onChange={el => setSlovo(el.target.value)} value={slovo}></input>
        {names.filter(el => {
            if(slovo === ''){
                return el
            } else if (el.toLowerCase().includes(slovo.toLowerCase())){
                return el
            }
        }).map(el => <div style={{marginTop: '10px'}} key={el}>{el}</div>)}
    </div>
  )
}
