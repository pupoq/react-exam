import React from 'react'
import { useSelector} from 'react-redux'
import AddPost from './AddPost'
import {useState, useEffect} from 'react'

export const Blogs = () => {

  const [blogs, setBlogs] = useState('')

  const value = useSelector(state => state.posts)

  console.log(value)

  return (
    <div className='block'>
      <AddPost />
      <section>
        {value.map(info => (
          <div key={info.id}>
            <p>{info.id}</p>
            <p>{info.title}</p>
            <p>{info.content}</p>
          </div>
  ))}
      </section>
    </div>
  )
}

export default Blogs