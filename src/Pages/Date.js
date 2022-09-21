import {useState} from 'react'

export const Date = () => {
    const [date1, setDate1] = useState('')
    const [date2, setDate2] = useState('')
    const [result, setResult] = useState([])

    const calc = () => {
        const date11 = new window.Date(date1);
        const date22 = new window.Date(date2);
        const daysLag = Math.ceil(Math.abs(date22.getTime() - date11.getTime()) / (1000 * 3600 * 24));
        setResult(daysLag)
    }

  return (
    <div className='block'>
        <h2>Date</h2>
        <input onChange={e => setDate1(e.target.value)} value={date1} type='date'></input>
        <button onClick={calc}>Calc</button>
        <input onChange={e => setDate2(e.target.value)} value={date2} type='date'></input>
        <div>{result}</div>
    </div>
  )
}

export default Date