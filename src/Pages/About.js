import {useState} from 'react'

export const About = () => {
    const [slovo, setSlovo] = useState('')
    const [result, setResult] = useState('')



    const calc = () => {
        let slovo1 = []
        let slovo2 = []
        let res = ''
        let res2 = ''
        for(let item of slovo){
            slovo2.push(item)
            slovo1.push(item)
        }
        slovo2.reverse()
        for(let item of slovo2){
            res += item
        }
        for(let item of slovo1){
            res2 += item
        }
        if(res === res2){
            setResult('Palindrom')
        } else {
            setResult('Not palindrom')
        }
    }

  return (
    <div className='block'>
        <h2>Polindrom</h2>
        <input onChange={e => setSlovo(e.target.value)} value={slovo}></input>
        <button onClick={calc}>Calc</button>
        <div>{result}</div>
    </div>
  )
}

export default About