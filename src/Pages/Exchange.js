import React, { useEffect, useState } from 'react'


export const Exchange = () => {

    const [from, setCurrency] = useState('')
    const [to, setTo] = useState('')
    const [optionInfo, setOption] = useState('')
    const [result, setResult] = useState('')

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c082aefd4msh719ab1bd424c321p130a7fjsnd40208170959',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    const Func = async () => {
        const data = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
        const res = await data.json()
        console.log(res)
        res.push('KZT')
        setOption(res.map(currency => (
            <option value={currency} key={currency}>{currency}</option>
        )))
    }

    useEffect(() => {
        Func()
    }, [])



    return (
        <div className='block'>
            <select value={from} onChange={e => setCurrency(e.target.value)}>
                {optionInfo}
            </select>
            <select value={to} onChange={e => setTo(e.target.value)}>
                {optionInfo}
            </select>
            <button >Convert</button>
            <div>{result}</div>
        </div>
    )
}

export default Exchange