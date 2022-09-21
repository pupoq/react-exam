import {useState} from 'react'

export const Home = () => {

    const [slovo, setSlovo] = useState('')
    const [result, setResult] = useState('')

    const reverse = () => {
        let slovo2 = []
        let res = ''
        for(let item of slovo){
            slovo2.push(item)
        }
        slovo2.reverse()
        for(let item of slovo2){
            res += item
            setResult(res)
        }
    }

  return (
    <div className='block'>
        <h2>Reverse</h2>
        <input onChange={e => setSlovo(e.target.value)} value={slovo}></input>
        <button onClick={reverse}>Reverse</button>
        <div>{result}</div>
    </div>
  )
}


export default Home