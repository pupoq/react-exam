import {useState} from 'react'

export const Product = () => {
    const [numbers, setNumbers] = useState('')
    const [result, setResult] = useState([])

    const calc = () => {
        const arr = numbers.split(' ');

        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
            result.push(arr[i]);
            }
        }

        console.log(result)

        setResult(result)
    }

  return (
    <div className='block'>
        <h2>Dublicate</h2>
        <input onChange={e => setNumbers(e.target.value)} value={numbers}></input>
        <button onClick={calc}>Calc</button>
        <div>{result}</div>
    </div>
  )
}

export default Product