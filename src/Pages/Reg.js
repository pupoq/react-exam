import React from 'react'
import {useState} from 'react'


export const Reg = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')
    const [warning, setWarning] = useState('')

    const register = (e) => {

        if(password !== repPassword){
            setWarning('Password mismatch')
        } else {
            e.preventDefault()

        fetch('/register', {
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        }
    }

  return (
    <div className='log'>
        <form className='cont' onSubmit={register}>
            <h2>Register</h2>
            <input type='text' placeholder='Username' value={username} onChange={e => setUserName(e.target.value)} name='username'></input>
            <br></br>
            <input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}name='password'></input>
            <br></br>
            <input type='text' placeholder='Comfirm password' value={repPassword} onChange={e => setRepPassword(e.target.value)}></input>
            <div>
            <br></br>
            <a className='userarg'>User agreement</a>
            </div>
            <br></br>
            <div className='red'>{warning}</div>
            <br></br>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Reg