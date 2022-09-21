import React from 'react'
import {useState, useEffect} from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export const Search = () => {

    const [user] = useAuthState(auth)

    const [searchInp, setSearchInp] = useState('')
    const [songInfo, setSongInfo] = useState('')
    const [alert, setAlert] = useState('')
    const [full, setFull] = useState('')
    const [moreInfo, setMoreInfo] = useState('')

    const getMoreInfo = (info) => {
        setMoreInfo(<div className='moreInfo'>
            <div>
                <img style={{width: '500px'}} src={info.header_image_url}></img>
            </div>
            <div>
                <h1>{info.title}</h1>
            </div>
        </div>)
    }

    const addToFav = (info) => {
        let local = JSON.parse(localStorage.getItem('FavSongs'))
        let def = true
        if(local !== null){
            for(let item of local){
            if(item.id === info.id){
                def = false
                setAlert('Данный трек уже в избранных!')
                } else {
                setAlert('Трек добавлен в избранные!')
                }
            }
        }

        if(local !== null && def === true){
            local.push(info)
            localStorage.setItem('FavSongs', JSON.stringify(local))
        } else if(local === null) {
            let local2 = []
            local2.push(info)
            let local3 = localStorage.setItem('FavSongs', JSON.stringify(local2)) || []
            console.log(local3)
        }
}

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c082aefd4msh719ab1bd424c321p130a7fjsnd40208170959',
            'X-RapidAPI-Host': 'genius.p.rapidapi.com'
        }
    };

    const search = async () => {
        const response = await fetch(`https://genius.p.rapidapi.com/search?q=${searchInp}`, options)
        const data = await response.json()
        const result = data.response.hits

        setSongInfo(await result.map(info => (
            <div className='infoBlock' key={info.result.id} onClikc={ () => getMoreInfo(info)}>
                <div className='infoBlock2'>
                    <img className='infoIMG' src={info.result.header_image_thumbnail_url} alt=''></img>
                    <div className='left'>
                        <h3>{info.result.title_with_featured}</h3 >
                        <p>{info.result.artist_names}</p>
                    </div>
                </div>
                <div>
                    <button onClick={ () => addToFav(info.result)} className='add'>Add to Fav</button>
                </div>
            </div>
        )))
    }

    const def = async () => {
        const response = await fetch(`https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar`, options)
        const data = await response.json()
        const result = data.response.hits

        setSongInfo(await result.map(info => (
            <div className='infoBlock' key={info.result.id} onClick={ () => showFull(info.result)}>
                <div className='row2'>
                    <div className='infoBlock2'>
                        <img className='infoIMG' src={info.result.header_image_thumbnail_url} alt=''></img>
                        <div className='left'>
                            <h3>{info.result.title_with_featured}</h3 >
                            <p>{info.result.artist_names}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={ () => addToFav(info.result)} className='add'>Add to Fav</button>
                    </div>
                </div>
            </div>
        )))
    } 
 
    const showFull = (info) => {
        console.log(full)
        console.log(info)
        setFull(info.url)
    }
 
    useEffect(() => {
        def()
    }, [])

  return (
      
    <div className='block'>
        {user ? <div>
            <h2>Поиск треков</h2>
        <input className='searchInp' onChange={e => setSearchInp(e.target.value)} value={searchInp}></input>
        <button className='btn' onClick={search}>Search</button>
        { alert === 'Трек добавлен в избранные!' ? <span className='alert' style={{color: 'green', marginLeft: '20px'}}>{alert}</span> : <span className='alert' style={{color: 'red', marginLeft: '20px'}}>{alert}</span>}
        { full ? <div className='full' style={{display: 'none'}}>{full}</div> : <div className='full' style={{display: 'block'}}>{full}</div>}
        <div className='songInfo'>
            {songInfo}
        </div>
        </div> : <h1>Пожалуйста войдите!</h1>}
    </div>
  )
}

export default Search
