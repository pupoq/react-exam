import React, {useState, useEffect} from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export const Fav = () => {
  const [storage, setStorage] = useState([])
  const [info, setInfo] = useState('')
   
  const [user] = useAuthState(auth)


  const asd = () => {
    setStorage(JSON.parse(localStorage.getItem('FavSongs')))
  }
  console.log(storage)

      let local = JSON.parse(localStorage.getItem('FavSongs'))
  


  const draw = () => {
      if(local !== null){
        setInfo(local.map(info => (
          <div className='infoBlock' key={info.id}>
              <div className='infoBlock2'>
                  <img className='infoIMG' src={info.header_image_thumbnail_url} alt=''></img>
                  <div className='left'>
                      <h3>{info.title_with_featured}</h3 >
                      <p>{info.artist_names}</p>
                  </div>
              </div>
              <div>
              <button onClick={ () => deleteOne(info.id)} className='delete'>Delete</button>
              </div>
          </div>
      )))
      }
  }
 
  const deleteOne = (info) => {
    console.log('asd')
    local.forEach(function(person, index, pArr){
        if(person.id === info){
          local.splice(index, 1)
          localStorage.setItem('FavSongs', JSON.stringify(local))
          local = JSON.parse(localStorage.getItem('FavSongs'))
        }
      });
      draw()
  }

  useEffect(() => {
    asd()
    draw()
  }, [])

  return (
    <div className='block'>
      {user ? <div>
        <div className='songInfo'>
            {info}
        </div>
        </div>
         : <h1>Пожалуйста войдите!</h1>}
    </div>
  )
}

export default Fav