import React from 'react'
import {useState} from 'react'


export const Login = () => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(0)
    const [warning, setWarning] = useState('')
    
    const sendLogin = (e) => {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(response => response.json())
        .then(data => setWarning(data.message))
    }

  return (
    <div className='log'>
        <form className='cont' onSubmit={sendLogin}>
            <h2>Login</h2>
            <input type='text' placeholder='Username' value={username} onChange={e => setUserName(e.target.value)} name='username'></input>
            <br></br>
            <input type='text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} name='password'></input>
            <br></br>
            <div>
            <input type='checkbox' value={checkbox} onChange={e => setCheckbox(e.target.value)}></input><span>Remember me</span>
            </div>
            <br></br>
            <div>{warning}</div>
            <br></br>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login