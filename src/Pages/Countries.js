import React from 'react'
import {useState} from 'react'

export const Countries = () => {
  const [countryName, setCountry] = useState('')
  const [countryInfo, setCountryInfo] = useState('')
  const [countryIMG, setCountryIMG] = useState('')

  const search = async () => {

    const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`, {
      method: "GET",
    })
    const res = await data.json()

    console.log(res)

    setCountryIMG(res[0].flags.png)
    setCountryInfo(res[0].capital[0])
  }

  return (
    <div className='block'>
      
        <input onChange={e => setCountry(e.target.value)} value={countryName}></input>
        <button onClick={search}>Search</button>
        <div>
          <div>{countryInfo}</div>
          <img src={countryIMG} alt=''></img>
        </div>
      
    </div>
  )
}

export default Countries
