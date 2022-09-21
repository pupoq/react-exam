import {useState} from 'react'

export const FourthTask = () => {

    const [symbols, setSymbols] = useState('')
    const [result, setResult] = useState('')

    const calc = () => {
        const arr = symbols.split(' ')

        const obj = {}

        for(let item of arr){
            if(!obj.hasOwnProperty(item)) obj[item] = 1
            else obj[item] = obj[item] + 1
        }


        setResult(Object.entries(obj).map(el => <li key={el}>{el[0]}: {el[1]}</li>))

        console.log(obj)
    }

  return (
    <div className='block'>
        <input onChange={e => setSymbols(e.target.value)} value={symbols}></input>
        <button onClick={calc}>Calc</button>
        <ul>
            {result}
        </ul>
    </div>
  )
}
